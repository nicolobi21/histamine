// ═══════════════════════════════════════════════════════════
// HistaChef — Supabase Sync Service
// Synchronise les données entre navigateurs via un "code foyer"
// ═══════════════════════════════════════════════════════════

const HC_SYNC = (() => {

  // ── Config (rempli depuis Réglages) ──────────────────────
  let SUPABASE_URL = localStorage.getItem('hc_supa_url') || '';
  let SUPABASE_KEY = localStorage.getItem('hc_supa_key') || '';
  let householdId  = localStorage.getItem('hc_household_id') || '';

  let syncTimer    = null;
  let lastUpdatedAt = null;
  let isSyncing    = false;
  let isConfigured = false;

  // ── Helpers ──────────────────────────────────────────────
  function headers(extra = {}) {
    return {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      ...extra
    };
  }

  async function req(path, options = {}) {
    if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error('Supabase non configuré');
    const url = `${SUPABASE_URL}/rest/v1/${path}`;
    const res = await fetch(url, { ...options, headers: headers(options.headers || {}) });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Supabase ${res.status}: ${txt}`);
    }
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }

  // ── Config ───────────────────────────────────────────────
  function configure(url, key) {
    SUPABASE_URL = url.replace(/\/$/, '');
    SUPABASE_KEY = key;
    localStorage.setItem('hc_supa_url', SUPABASE_URL);
    localStorage.setItem('hc_supa_key', SUPABASE_KEY);
    isConfigured = !!(url && key);
  }

  function isReady() {
    return !!(SUPABASE_URL && SUPABASE_KEY && householdId);
  }

  // ── Foyer ────────────────────────────────────────────────
  async function createHousehold() {
    const state = _getLocalState();
    const rows = await req('hc_sync', {
      method: 'POST',
      headers: { 'Prefer': 'return=representation' },
      body: JSON.stringify({
        entries: state.entries,
        custom_foods: state.customFoods,
        tolerance_data: state.toleranceData,
        custom_recipes: state.customRecipes
      })
    });
    householdId = rows[0].household_id;
    lastUpdatedAt = rows[0].updated_at;
    localStorage.setItem('hc_household_id', householdId);
    _startAutoSync();
    return householdId;
  }

  async function joinHousehold(code) {
    const code_clean = code.trim().toLowerCase();
    const rows = await req(`hc_sync?household_id=eq.${code_clean}&select=household_id,updated_at`);
    if (!rows || !rows.length) throw new Error('Code foyer introuvable. Vérifie le code.');
    householdId = code_clean;
    localStorage.setItem('hc_household_id', householdId);
    await pull(); // charger les données du foyer
    _startAutoSync();
    return true;
  }

  function leaveHousehold() {
    householdId = '';
    lastUpdatedAt = null;
    localStorage.removeItem('hc_household_id');
    _stopAutoSync();
    setSyncStatus('disconnected');
  }

  function getCode() { return householdId; }

  // ── Push (local → Supabase) ──────────────────────────────
  let pushTimer = null;
  function schedulePush() {
    if (!isReady()) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(push, 1500); // debounce 1.5s
  }

  async function push() {
    if (!isReady() || isSyncing) return;
    isSyncing = true;
    setSyncStatus('syncing');
    try {
      const state = _getLocalState();
      const rows = await req(`hc_sync?household_id=eq.${householdId}`, {
        method: 'PATCH',
        headers: { 'Prefer': 'return=representation' },
        body: JSON.stringify({
          entries: state.entries,
          custom_foods: state.customFoods,
          tolerance_data: state.toleranceData,
          custom_recipes: state.customRecipes,
          updated_at: new Date().toISOString()
        })
      });
      if (rows && rows[0]) lastUpdatedAt = rows[0].updated_at;
      setSyncStatus('ok');
    } catch (e) {
      console.warn('[Sync] Push failed:', e.message);
      setSyncStatus('error');
    } finally {
      isSyncing = false;
    }
  }

  // ── Pull (Supabase → local) ──────────────────────────────
  async function pull() {
    if (!isReady()) return false;
    setSyncStatus('syncing');
    try {
      const rows = await req(`hc_sync?household_id=eq.${householdId}`);
      if (!rows || !rows.length) { setSyncStatus('ok'); return false; }
      const remote = rows[0];

      // Si pas de changement, on skip
      if (lastUpdatedAt && remote.updated_at === lastUpdatedAt) {
        setSyncStatus('ok');
        return false;
      }
      lastUpdatedAt = remote.updated_at;

      // Merge : on garde tous les IDs uniques (local + remote)
      const localEntries = JSON.parse(localStorage.getItem('ht_entries') || '[]');
      const remoteEntries = Array.isArray(remote.entries) ? remote.entries : [];
      const merged = _mergeEntries(localEntries, remoteEntries);

      // Écrire dans localStorage
      localStorage.setItem('ht_entries', JSON.stringify(merged));
      if (remote.custom_foods) localStorage.setItem('ht_custom_foods', JSON.stringify(remote.custom_foods));
      if (remote.tolerance_data) localStorage.setItem('ht_tolerance', JSON.stringify(remote.tolerance_data));
      if (remote.custom_recipes) localStorage.setItem('ht_custom_recipes', JSON.stringify(remote.custom_recipes));

      setSyncStatus('ok');
      return true; // données mises à jour → l'app doit se rafraîchir
    } catch (e) {
      console.warn('[Sync] Pull failed:', e.message);
      setSyncStatus('error');
      return false;
    }
  }

  // ── Merge entries par ID (pas de doublon) ────────────────
  function _mergeEntries(local, remote) {
    const map = new Map();
    [...remote, ...local].forEach(e => {
      if (e && e.id) map.set(String(e.id), e);
    });
    return Array.from(map.values()).sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? -1 : 1;
      return (a.mealTime || '') < (b.mealTime || '') ? -1 : 1;
    });
  }

  // ── Lire l'état local ────────────────────────────────────
  function _getLocalState() {
    return {
      entries:      JSON.parse(localStorage.getItem('ht_entries')        || '[]'),
      customFoods:  JSON.parse(localStorage.getItem('ht_custom_foods')   || '[]'),
      toleranceData:JSON.parse(localStorage.getItem('ht_tolerance')      || '{}'),
      customRecipes:JSON.parse(localStorage.getItem('ht_custom_recipes') || '[]')
    };
  }

  // ── Auto-sync toutes les 30 secondes ─────────────────────
  function _startAutoSync() {
    _stopAutoSync();
    syncTimer = setInterval(async () => {
      const updated = await pull();
      if (updated && typeof HC !== 'undefined') {
        // Recharger l'état de l'app sans rechargement de page
        if (HC.history && HC.history.render) HC.history.render();
        if (HC.dashboard && HC.dashboard.render) HC.dashboard.render();
        if (HC.journal && HC.journal.renderToday) HC.journal.renderToday();
      }
    }, 30000);
  }

  function _stopAutoSync() {
    if (syncTimer) { clearInterval(syncTimer); syncTimer = null; }
  }

  // ── Indicateur visuel ────────────────────────────────────
  function setSyncStatus(status) {
    const el = document.getElementById('syncDot');
    if (!el) return;
    const map = {
      ok:           { color: '#34d399', title: 'Synchronisé' },
      syncing:      { color: '#fbbf24', title: 'Synchronisation...' },
      error:        { color: '#f87171', title: 'Erreur de sync' },
      disconnected: { color: '#6e6b8a', title: 'Hors ligne' }
    };
    const s = map[status] || map.disconnected;
    el.style.background = s.color;
    el.title = s.title;
  }

  // ── Init au démarrage ────────────────────────────────────
  async function init() {
    isConfigured = !!(SUPABASE_URL && SUPABASE_KEY);
    if (!isConfigured || !householdId) {
      setSyncStatus('disconnected');
      return;
    }
    const updated = await pull();
    if (updated && typeof HC !== 'undefined') {
      // Reload app state after pull
      if (typeof loadState === 'function') loadState();
      setTimeout(() => {
        if (HC.recipes && HC.recipes.render) HC.recipes.render();
        if (HC.journal && HC.journal.renderToday) HC.journal.renderToday();
      }, 100);
    }
    _startAutoSync();
  }

  // ── API publique ─────────────────────────────────────────
  return { configure, createHousehold, joinHousehold, leaveHousehold,
           getCode, push, pull, schedulePush, init, isReady,
           setSyncStatus, isConfigured: () => isConfigured };

})();
