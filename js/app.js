// ═══════════════════════════════════════════
// HistaChef — Main Application
// ═══════════════════════════════════════════
const HC = {};

// ═══ UTILITIES ═══
function normalizeFoodName(name) {
  return String(name || '').trim().toLowerCase()
    .replace(/œ/g, 'oe').replace(/æ/g, 'ae')
    .replace(/['']/g, "'");
}
function clampScore(score) { const n = Number(score); if (!Number.isFinite(n)) return 1; return Math.max(0, Math.min(3, Math.round(n))); }
function levelFromScore(score) { return ['Faible','Modéré','Élevé','Très élevé'][clampScore(score)]; }
function escapeHtml(str) { const d = document.createElement('div'); d.textContent = str; return d.innerHTML; }
function escapeAttr(str) { return escapeHtml(str).replace(/'/g, "&#39;"); }
function escapeJs(str) { return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

function showToast(msg, color) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = color || 'var(--green)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

function getScoreColor(total) {
  if (total === 0) return {bg:'var(--green-bg)', color:'var(--green)', label:'OK'};
  if (total <= 5) return {bg:'var(--yellow-bg)', color:'var(--yellow)', label:'Léger'};
  if (total <= 15) return {bg:'var(--orange-bg)', color:'var(--orange)', label:'Modéré'};
  return {bg:'var(--red-bg)', color:'var(--red)', label:'Fort'};
}

// ═══ RECIPE VISUALS ═══
const RECIPE_EMOJIS = {
  "porridge-pomme-cannelle":"🍎","tartines-ricotta-poire":"🍐","smoothie-mangue-coco":"🥭",
  "galettes-sarrasin-oeuf":"🥞","bowl-quinoa-fruits":"🫐","soupe-butternut-gingembre":"🎃",
  "soupe-poireau-pomme-de-terre":"🥔","soupe-carotte-curcuma":"🥕","soupe-brocoli-chou-fleur":"🥦",
  "poulet-riz-courgette":"🍗","dinde-patate-douce-haricots":"🦃","poulet-curry-doux-riz":"🍛",
  "poulet-basilic-pates":"🍝","blanquette-dinde-legumes":"🥘","poulet-roti-herbes":"🍖",
  "cabillaud-vapeur-legumes":"🐟","truite-four-fenouil":"🐠","colin-puree-brocoli":"🐟",
  "sole-meuniere-riz":"🐠","risotto-courgette-basilic":"🍚","gratin-patate-douce-chou-fleur":"🧀",
  "pates-beurre-herbes":"🍝","couscous-legumes":"🥘","galettes-pomme-de-terre":"🥔",
  "boeuf-saute-legumes":"🥩","agneau-pomme-de-terre-romarin":"🐑","boeuf-bourguignon-sans-vin":"🍲",
  "puree-maison":"🥔","legumes-rotis-four":"🥕","riz-pilaf-herbes":"🍚",
  "salade-concombre-herbes":"🥗","compote-pomme-poire":"🍏","mousse-mangue-coco":"🥭",
  "crumble-pomme-amande":"🍎","riz-au-lait-vanille":"🍚","galettes-riz-ricotta-miel":"🍘",
  "smoothie-poire-avoine":"🥤","energy-balls-avoine-coco":"🥥",
  "omelette-fines-herbes":"🥚","pancakes-pomme":"🥞","crepes-nature-miel":"🥞",
  "soupe-panais-cumin":"🥣","veloute-asperges":"🥣","saute-poulet-gingembre":"🍗",
  "wok-dinde-courgettes":"🦃","tajine-poulet-legumes":"🍲","papillote-cabillaud-herbes":"🐟",
  "truite-amandes":"🐠","poelee-legumes-thym":"🥒","gratin-courgettes-chevre":"🧀",
  "riz-saute-legumes":"🍚","hachis-parmentier-dinde":"🥧","puree-patate-douce-curcuma":"🍠",
  "gratin-dauphinois":"🥔","poelee-champignons-persil":"🍄","salade-quinoa-herbes":"🥗",
  "cake-pommes-amandes":"🍰","panna-cotta-coco-vanille":"🍮","muffins-pomme-cannelle":"🧁",
  "batonnets-legumes-ricotta":"🥕","quiche-courgettes-ricotta":"🥧","soupe-patate-douce-coco":"🍠",
  "poulet-miel-romarin":"🍯","saumon-four-aneth":"🐟","pates-poulet-brocoli":"🍝",
  "taboulé-herbes-fraiches":"🌿","galettes-lentilles-carottes":"🥕","wraps-dinde-crudites":"🌯",
  "veloute-fenouil":"🥣","poulet-coco-patate-douce":"🥥","gratin-pates-legumes":"🍝",
  "boulettes-dinde-herbes":"🦃","salade-poire-ricotta":"🍐","soupe-celeri-pomme":"🥒",
  "fondant-patate-douce":"🍠","tartare-mangue-avocat":"🥭","bowl-riz-poulet-legumes":"🍚",
  "veloute-petit-pois-menthe":"🟢","filet-mignon-miel-thym":"🍖","poelee-gnocchis-legumes":"🥟",
  "soupe-lentilles-carottes":"🥕","puree-brocoli-ail":"🥦","gratin-fenouil-creme":"🧀",
  "poulet-pommes-four":"🍎","cake-sale-courgettes":"🧀","salade-lentilles-herbes":"🌿",
  "veloute-champignons":"🍄","dinde-moutarde-douce":"🦃","riz-cantonnais-maison":"🍚",
  "soupe-oignon-douce":"🧅","tarte-poireaux-ricotta":"🥧","poulet-cacahuete-doux":"🥜",
  "buddha-bowl-quinoa":"🥗","filet-bar-legumes":"🐟","crumble-poire-noisette":"🍐",
  "soupe-chou-fleur-curry":"🥣","brochettes-poulet-legumes":"🍢",
  "granola-maison-pomme":"🥣","chia-pudding-mangue":"🥭","muesli-bircher-poire":"🍐",
  "toast-ricotta-peche":"🍑","agneau-carottes-cumin":"🐑",
  "gratin-dauphinois-leger":"🥔","puree-patate-douce":"🍠","haricots-verts-ail-persil":"🫛",
  "carottes-glacees-miel":"🥕","quinoa-herbes-fraiches":"🌿","poêlee-courgettes-basilic":"🥒",
  "ecrase-petits-pois-menthe":"🟢","fenouil-braise-huile-olive":"🌿","gratin-chou-fleur-ricotta":"🧀",
  "semoule-beurre-raisins":"🍚","gateau-pomme-amande":"🍰","panna-cotta-coco-mangue":"🍮",
  "clafoutis-poire-vanille":"🍐","sorbet-mangue-maison":"🍧","gateau-carotte-coco":"🥕",
  "pommes-au-four-miel":"🍎","far-breton-poire":"🍮","mousse-ricotta-myrtilles":"🫐",
  "crêpes-fines-sucre":"🥞","gateau-semoule-vanille":"🍮","muffins-myrtilles-avoine":"🧁",
  "tartine-pomme-ricotta":"🍎","porridge-poire-amande":"🍐","compote-peche-vanille":"🍑",
  "bouchees-coco-avoine":"🥥","smoothie-myrtille-coco":"🫐","galettes-patate-douce-coco":"🍠",
  "bol-quinoa-pomme-cannelle":"🍎",
  "pancakes-avoine-myrtilles":"🫐","crepes-sarrasin-miel-poire":"🥞",
  "tartines-pomme-ricotta-miel":"🍎","bowl-avoine-peche-coco":"🍑",
  "muffins-carotte-pomme":"🧁","smoothie-poire-menthe-coco":"🍐",
  "galettes-patate-douce-avoine":"🍠","overnight-oats-cerise-amande":"🍒",
  "soupe-fenouil-pomme-de-terre":"🌿","soupe-patate-douce-cumin":"🍠",
  "soupe-courgette-basilic":"🥒","soupe-navet-poireau-thym":"🥬",
  "soupe-potimarron-coco":"🎃",
  "poulet-roti-miel-thym":"🍯","escalope-dinde-creme-champignons":"🍄",
  "poulet-basquaise-sans-tomate":"🍗","emince-dinde-poireaux":"🥬",
  "poulet-romarin-butternut":"🎃","dinde-curry-riz-brocoli":"🍛",
  "poulet-grille-herbes-quinoa":"🌿","cabillaud-beurre-persil-carottes":"🐟",
  "truite-aneth-pommes-vapeur":"🐠","colin-papillote-courgettes":"🐟",
  "sole-meuniere-asperges":"🐠","saumon-frais-gingembre-riz":"🐟",
  "quinoa-legumes-rotis-curcuma":"🥗","pates-petits-pois-ricotta-basilic":"🍝",
  "semoule-legumes-epices-douces":"🥘","galettes-sarrasin-legumes":"🥞",
  "boeuf-carottes-thym":"🥕","agneau-cumin-patate-douce":"🍠",
  "steak-boeuf-ecrase-pommes-terre":"🥩","navarin-agneau-printanier":"🐑",
  "boeuf-gingembre-haricots-verts":"🥩","poulet-fenouil-braise":"🍗",
  "one-pot-pates-dinde-courgettes":"🍝","wok-poulet-brocoli-coco":"🥦"
};

function getRecipeEmoji(recipe) {
  if (recipe.emoji) return recipe.emoji;
  if (RECIPE_EMOJIS[recipe.id]) return RECIPE_EMOJIS[recipe.id];
  const fallbacks = {'petit-dej':'🌅','soupe':'🥣','plat':'🍽️','accompagnement':'🥗','dessert':'🍰','collation':'🍪'};
  return fallbacks[recipe.category] || '🍽️';
}

function getCategoryGradient(category) {
  const g = {
    'petit-dej':'linear-gradient(135deg, #2d1b4e 0%, #1a1040 100%)',
    'soupe':'linear-gradient(135deg, #1b3a2a 0%, #0f2218 100%)',
    'plat':'linear-gradient(135deg, #3a1b2a 0%, #280f18 100%)',
    'accompagnement':'linear-gradient(135deg, #1b2e3a 0%, #0f1c28 100%)',
    'dessert':'linear-gradient(135deg, #3a2e1b 0%, #281c0f 100%)',
    'collation':'linear-gradient(135deg, #2a1b3a 0%, #180f28 100%)'
  };
  return g[category] || 'linear-gradient(135deg, #1a1a3e, #0f0f2a)';
}

// ═══ RECIPE PHOTOS ═══
// Curated Unsplash photo pools by category — picked by hash of recipe ID for consistency
const RECIPE_PHOTO_POOLS = {
  'petit-dej': [
    'photo-1517673400267-0251440c45dc', // porridge bowl
    'photo-1484723091739-30990fd42e53', // toast/tartines
    'photo-1490914327627-9fe8d52f4d90', // granola bowl
    'photo-1528207776546-365bb710ee93', // pancakes
    'photo-1525351484163-7529414344d8', // breakfast bowl
    'photo-1546069901-ba9599a7e63c',    // fruit bowl
    'photo-1607532941433-304659e8198a', // smoothie bowl
    'photo-1494597564530-871f2b93ac55', // overnight oats
    'photo-1551504734-5ee1c4a1479b', // cereal/muesli bowl
  ],
  'soupe': [
    'photo-1547592166-23ac45744acd', // vegetable soup
    'photo-1534939561126-855b8675edd7', // broth soup
    'photo-1476718406336-bb5a9690ee2a', // pumpkin soup
    'photo-1455619452474-d2be8b1e70cd', // bowl of soup
    'photo-1603105037880-880cd4edfb0d', // creamy soup
    'photo-1547592180-85f173990554', // lentil soup
    'photo-1544025162-d76538ef12f7',    // chicken broth
    'photo-1516684732162-798a0062be99', // rice soup
  ],
  'plat': [
    'photo-1504674900247-0877df9cc836', // food spread
    'photo-1563379926898-05f4575a45d8', // pasta
    'photo-1544025162-d76538ef12f7',    // grilled chicken
    'photo-1519708227418-c8fd9a32b7a2', // salmon
    'photo-1546069901-5ec6a79120b0',    // rice bowl
    'photo-1512621776951-a57141f2eefd', // colorful bowl
    'photo-1585325701165-2303cccb4e36', // stew/casserole
    'photo-1511690656952-34342bb7c2f2', // stir fry
    'photo-1432139555190-58524dae6a55', // roast chicken
    'photo-1565299585323-38d6b0865b47', // pasta dish
    'photo-1529692236671-f1f6cf9683ba', // chicken with veggies
    'photo-1604908177453-7462950a6a3b', // rice & veggies
    'photo-1512058533999-0e1a5f79a8dc', // rice dish
    'photo-1432139509613-5c4255815697', // vegetables plate
    'photo-1482049016688-2d3e1b311543', // toast plate
    'photo-1558642452-9d2a7deb7f62',    // fish fillet
    'photo-1540189549336-e6e99c3679fe', // grain bowl
  ],
  'accompagnement': [
    'photo-1512621776951-a57141f2eefd', // salad
    'photo-1498837167922-ddd27525d352', // roasted vegetables
    'photo-1467003909585-2f8a72700288', // green vegetables
    'photo-1576045057995-568f588f82fb', // steamed veggies
    'photo-1414235077428-338989a2e8c0', // gratin
    'photo-1543352634-a1c51d9f1fa7', // mashed potato
    'photo-1540189549336-e6e99c3679fe', // grain salad
  ],
  'dessert': [
    'photo-1488477304112-4944851de03d', // panna cotta
    'photo-1569864358642-9d1684040f43', // fruit tart
    'photo-1587314168485-3236d6710814', // cake slice
    'photo-1548365328-8c6db3220e4c', // fruit crumble
    'photo-1563729784474-d77dbb933a9e', // cookies
    'photo-1565958011703-44f9829ba187', // dessert plate
    'photo-1541599540903-216a46ca1dc0', // apple cake
    'photo-1499636136210-6f4ee915583e', // baked goods
    'photo-1504674900247-0877df9cc836', // colorful dessert
  ],
  'collation': [
    'photo-1558961363-fa8fdf82db35', // snacks
    'photo-1490645935967-10de6ba17061', // energy balls
    'photo-1550583724-b2692b85b150', // smoothie
    'photo-1553530666-ba11a7da3888', // smoothie bowl
    'photo-1505253468034-514d2507d914', // nuts and fruits
    'photo-1571748982800-fa51082c2224', // biscuits
    'photo-1470124182917-cc6e71b22ecc', // fruit snack
  ]
};

function getRecipePhotoUrl(recipe) {
  if (recipe.photo) return recipe.photo;
  if (typeof RECIPE_PHOTOS !== 'undefined' && RECIPE_PHOTOS[recipe.id]) return RECIPE_PHOTOS[recipe.id];
  return null;
}

// ═══ PEXELS AUTO-PHOTO ═══
const PEXELS_KEY = 'XFz9YAlbSWPWcrd9hVQTvrZ2KGkDENFb4BSCHFaXCYaKNYqpvTSKReFR';
async function fetchPexelsPhoto(recipeName) {
  try {
    const query = encodeURIComponent('food ' + recipeName);
    const resp = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=3&orientation=landscape`,
      { headers: { Authorization: PEXELS_KEY } }
    );
    if (!resp.ok) return null;
    const data = await resp.json();
    const photo = data.photos?.[0];
    if (!photo) return null;
    const base = photo.src.large.split('?')[0];
    return `${base}?auto=compress&cs=tinysrgb&w=640&h=400&fit=crop`;
  } catch(_) { return null; }
}

// ═══ STATE ═══
let entries = [];
let customFoods = [];
let toleranceData = {};
let customRecipes = [];

function loadState() {
  try { entries = normalizeLoadedEntries(JSON.parse(localStorage.getItem('ht_entries') || '[]')); } catch(_) { entries = []; }
  try { customFoods = JSON.parse(localStorage.getItem('ht_custom_foods') || '[]').map(toFoodRecord).filter(Boolean); } catch(_) { customFoods = []; }
  try { toleranceData = JSON.parse(localStorage.getItem('ht_tolerance') || '{}'); } catch(_) { toleranceData = {}; }
  try { customRecipes = JSON.parse(localStorage.getItem('ht_custom_recipes') || '[]'); } catch(_) { customRecipes = []; }
  mergeCustomFoodsIntoDb();
}

function saveEntries()      { localStorage.setItem('ht_entries',        JSON.stringify(entries));       if (typeof HC_SYNC !== 'undefined') HC_SYNC.schedulePush(); }
function saveCustomFoods() { localStorage.setItem('ht_custom_foods',   JSON.stringify(customFoods));   if (typeof HC_SYNC !== 'undefined') HC_SYNC.schedulePush(); }
function saveTolerance()   { localStorage.setItem('ht_tolerance',      JSON.stringify(toleranceData)); if (typeof HC_SYNC !== 'undefined') HC_SYNC.schedulePush(); }
function saveCustomRecipes(){ localStorage.setItem('ht_custom_recipes', JSON.stringify(customRecipes)); if (typeof HC_SYNC !== 'undefined') HC_SYNC.schedulePush(); }

function toFoodRecord(food) {
  if (!food || !food.name) return null;
  const name = String(food.name).trim();
  if (!name) return null;
  const score = clampScore(food.score);
  return { name, cat: food.cat || "Personnalisé", score, level: food.level || levelFromScore(score), tip: food.tip || "Aliment personnalisé", isCustom: true };
}

function mergeCustomFoodsIntoDb() {
  const seen = new Set(FOOD_DB.map(f => normalizeFoodName(f.name)));
  customFoods.forEach(food => { const key = normalizeFoodName(food.name); if (!key || seen.has(key)) return; FOOD_DB.push(food); seen.add(key); });
}

function normalizeLoadedEntries(rawEntries) {
  if (!Array.isArray(rawEntries)) return [];
  return rawEntries.map((entry, index) => {
    const symptoms = entry && entry.symptoms ? entry.symptoms : {};
    const totalSymptoms = Number.isFinite(Number(entry && entry.totalSymptoms))
      ? Number(entry.totalSymptoms)
      : SYMPTOM_CATEGORIES.reduce((sum, s) => sum + (Number(symptoms[s.id]) || 0), 0);
    return {
      id: entry && entry.id != null ? entry.id : `entry-${Date.now()}-${index}`,
      date: entry && entry.date ? entry.date : new Date().toISOString().split('T')[0],
      mealTime: entry && entry.mealTime ? entry.mealTime : '',
      symptomTime: entry && entry.symptomTime ? entry.symptomTime : '',
      meal: entry && entry.meal ? entry.meal : 'Repas',
      foods: Array.isArray(entry && entry.foods) ? entry.foods : [],
      symptoms, totalSymptoms,
      contexts: Array.isArray(entry && entry.contexts) ? entry.contexts : [],
      notes: entry && entry.notes ? entry.notes : ''
    };
  });
}

function upsertCustomFood(name, category, score) {
  const normalizedName = normalizeFoodName(name);
  if (!normalizedName) return {ok: false};
  const existing = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizedName);
  if (existing) return {ok: true, created: false, food: existing};
  const safeScore = clampScore(score);
  const customFood = toFoodRecord({ name: String(name).trim(), cat: (category || "Personnalisé").trim() || "Personnalisé", score: safeScore, level: levelFromScore(safeScore), tip: "Ajouté par l'utilisateur" });
  if (!customFood) return {ok: false};
  customFoods.push(customFood);
  FOOD_DB.push(customFood);
  saveCustomFoods();
  return {ok: true, created: true, food: customFood};
}

// ═══ TOLERANCE ═══
function getToleranceStatus(foodName) {
  const key = normalizeFoodName(foodName);
  return toleranceData[key] ? toleranceData[key].status : 'untested';
}

function setToleranceStatus(foodName, status) {
  const key = normalizeFoodName(foodName);
  toleranceData[key] = { status, source: 'manual', date: new Date().toISOString().split('T')[0] };
  saveTolerance();
}

function autoSuggestTolerance() {
  // foods eaten 3+ times with avg symptom score < 3 → suggest tolerated
  const foodStats = {};
  entries.forEach(e => {
    e.foods.forEach(f => {
      const key = normalizeFoodName(f.name);
      if (!foodStats[key]) foodStats[key] = { name: f.name, count: 0, totalSym: 0 };
      foodStats[key].count++;
      foodStats[key].totalSym += e.totalSymptoms;
    });
  });

  Object.values(foodStats).forEach(stat => {
    const key = normalizeFoodName(stat.name);
    if (toleranceData[key] && toleranceData[key].source === 'manual') return; // don't override manual
    const avg = stat.totalSym / stat.count;
    if (stat.count >= 3 && avg < 3) {
      toleranceData[key] = { status: 'tolerated', source: 'journal', date: new Date().toISOString().split('T')[0] };
    } else if (stat.count >= 2 && avg > 15) {
      toleranceData[key] = { status: 'not_tolerated', source: 'journal', date: new Date().toISOString().split('T')[0] };
    }
  });
  saveTolerance();
}

// ═══ TOLERANCE HELPERS ═══
function getToleranceStatusFuzzy(foodName) {
  const key = normalizeFoodName(foodName);
  // 1. Exact match
  if (toleranceData[key]) return toleranceData[key].status;

  // Helper: do two foods have similar histamine scores? Avoids matching "saumon frais" (score 0) with "saumon fume" (score 3)
  function sameRiskLevel(nameA, nameB) {
    const fa = FOOD_DB.find(f => normalizeFoodName(f.name) === nameA);
    const fb = FOOD_DB.find(f => normalizeFoodName(f.name) === nameB);
    if (!fa || !fb) return true; // unknown → allow fuzzy
    return Math.abs(fa.score - fb.score) <= 1;
  }

  // 2. Prefix match: "Poulet" ↔ "Poulet frais"
  let best = null, bestLen = 0;
  for (const [tk, tv] of Object.entries(toleranceData)) {
    if (tk.startsWith(key) || key.startsWith(tk)) {
      const len = Math.min(tk.length, key.length);
      if (len > bestLen && sameRiskLevel(key, tk)) { bestLen = len; best = tv.status; }
    }
  }
  if (best) return best;

  // 3. First-word match: "Sole meunière" ↔ "Sole fraîche" (only if same risk level)
  const firstWord = key.split(' ')[0];
  if (firstWord.length >= 4) {
    for (const [tk, tv] of Object.entries(toleranceData)) {
      if (tk.split(' ')[0] === firstWord && sameRiskLevel(key, tk)) return tv.status;
    }
  }

  // 4. Substring match (min 5 chars, same risk level)
  let subBest = null, subBestLen = 0;
  for (const [tk, tv] of Object.entries(toleranceData)) {
    if (tk.length >= 5 && key.includes(tk) && sameRiskLevel(key, tk)) {
      if (tk.length > subBestLen) { subBestLen = tk.length; subBest = tv.status; }
    }
  }
  if (subBest) return subBest;
  return 'untested';
}

function isPantryFuzzy(foodName) {
  const key = normalizeFoodName(foodName);
  const pantry = PANTRY_STAPLES.map(normalizeFoodName);
  if (pantry.includes(key)) return true;
  // First-word fuzzy: "Sel fin" → "sel" matches "sel" from "Sel"
  // "Poivre blanc" → "poivre" matches "poivre" from "Poivre noir"
  const kFirst = key.split(' ')[0];
  if (kFirst.length >= 3) {
    return pantry.some(p => p.split(' ')[0] === kFirst);
  }
  return false;
}

function isFullyTolerated(recipe) {
  return recipe.ingredients.every(ing => {
    if (ing.optional) return true;
    if (isPantryFuzzy(ing.food)) return true;
    // If explicitly not tolerated → block
    const status = getToleranceStatusFuzzy(ing.food);
    if (status === 'not_tolerated') return false;
    // If explicitly tolerated → allow
    if (status === 'tolerated') return true;
    // Everything else (untested, unknown) → block. Must be explicitly tolerated.
    return false;
  });
}

function getAlmostTolerated(allRecipes) {
  const fullyOk = new Set(allRecipes.filter(r => isFullyTolerated(r)).map(r => r.id));
  const byFood = {};
  const result = [];

  allRecipes.forEach(recipe => {
    if (fullyOk.has(recipe.id)) return;

    // Skip recipes with any not_tolerated ingredient
    const hasBlocked = recipe.ingredients.some(ing =>
      !ing.optional && getToleranceStatusFuzzy(ing.food) === 'not_tolerated'
    );
    if (hasBlocked) return;

    // Find blocking ingredients (anything not explicitly tolerated)
    const blocking = recipe.ingredients.filter(ing => {
      if (ing.optional) return false;
      if (isPantryFuzzy(ing.food)) return false;
      const status = getToleranceStatusFuzzy(ing.food);
      if (status === 'tolerated') return false;
      // Everything else → blocking
      return true;
    });

    if (blocking.length === 1) {
      const foodName = blocking[0].food;
      const key = normalizeFoodName(foodName);
      if (!byFood[key]) byFood[key] = { name: foodName, recipes: [] };
      byFood[key].recipes.push(recipe);
      result.push({ ...recipe, _missingFood: foodName });
    }
  });

  const sorted = Object.values(byFood).sort((a, b) => b.recipes.length - a.recipes.length);
  return { byFood: sorted, allRecipes: result };
}

// ═══ NAVIGATION ═══
let currentPage = 'recipes';

function goToPage(pageName) {
  currentPage = pageName;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.page === pageName));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageName);
  if (page) page.classList.add('active');
  if (pageName === 'recipes') HC.recipes.render();
  if (pageName === 'introduce') HC.introduce.render();
  if (pageName === 'tolerance') HC.tolerance.render();
  if (pageName === 'history') HC.history.render();
  if (pageName === 'dashboard') HC.dashboard.render();
  if (pageName === 'journal') HC.journal.renderToday();
}

// ═══ RECIPES MODULE ═══
HC.recipes = (() => {
  let selectedIngredients = [];
  let viewMode = 'finder'; // finder | detail | addForm
  let currentRecipe = null;
  let currentPortions = 2;
  let filterCategory = 'all';
  let filterSearch = '';
  let filterGlutenFree = localStorage.getItem('filterGlutenFree') === 'true';
  let displayLimit = 32; // lazy-load more recipes
  let selectedMissingFood = null; // filter section 2 by missing ingredient
  let displayLimitAlmost = 16; // lazy-load section 2

  function getDefaultMealFilter() {
    const h = new Date().getHours();
    if (h < 11) return 'petit-dej';
    if (h < 14) return 'dejeuner';
    if (h < 17) return 'gouter';
    return 'diner';
  }
  function getTimeTitle() {
    const h = new Date().getHours();
    if (h < 11) return 'Recettes du matin';
    if (h < 14) return 'Recettes du midi';
    if (h < 17) return "Recettes de l'après-midi";
    return 'Recettes du soir';
  }
  let filterMealType = getDefaultMealFilter();

  function recipeHasGluten(recipe) {
    return recipe.ingredients.some(ing => {
      if (ing.optional) return false;
      const db = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizeFoodName(ing.food));
      return db && db.gluten;
    });
  }

  function getAllRecipes() {
    const batches = [
      typeof RECIPE_DB !== 'undefined' ? RECIPE_DB : [],
      typeof RECIPES_BATCH_1 !== 'undefined' ? RECIPES_BATCH_1 : [],
      typeof RECIPES_BATCH_2 !== 'undefined' ? RECIPES_BATCH_2 : [],
      typeof RECIPES_BATCH_3 !== 'undefined' ? RECIPES_BATCH_3 : [],
      typeof RECIPES_BATCH_4 !== 'undefined' ? RECIPES_BATCH_4 : [],
      typeof RECIPES_BATCH_5 !== 'undefined' ? RECIPES_BATCH_5 : [],
      typeof RECIPES_BATCH_6 !== 'undefined' ? RECIPES_BATCH_6 : [],
      typeof RECIPES_BATCH_7 !== 'undefined' ? RECIPES_BATCH_7 : [],
      typeof RECIPES_BATCH_8 !== 'undefined' ? RECIPES_BATCH_8 : [],
      typeof RECIPES_BATCH_9 !== 'undefined' ? RECIPES_BATCH_9 : [],
      ...customRecipes,
    ];
    // Deduplicate by id
    const seen = new Set();
    return batches.flat().filter(r => { if (!r.id || seen.has(r.id)) return false; seen.add(r.id); return true; });
  }

  function matchRecipe(recipe) {
    const requiredIngredients = recipe.ingredients.filter(i => !i.optional);
    const stapleNames = PANTRY_STAPLES.map(normalizeFoodName);
    const selectedNames = selectedIngredients.map(normalizeFoodName);
    const availableNames = [...selectedNames, ...stapleNames];

    let matched = 0;
    let missing = [];
    requiredIngredients.forEach(ing => {
      const ingKey = normalizeFoodName(ing.food);
      if (availableNames.includes(ingKey)) matched++;
      else missing.push(ing.food);
    });

    const score = requiredIngredients.length > 0 ? Math.round((matched / requiredIngredients.length) * 100) : 100;

    // Check tolerance
    let hasIntolerant = false;
    recipe.ingredients.forEach(ing => {
      if (getToleranceStatus(ing.food) === 'not_tolerated') hasIntolerant = true;
    });

    return { score, missing, hasIntolerant, matched, total: requiredIngredients.length };
  }

  function render() {
    const cont = document.getElementById('recipesContent');
    if (viewMode === 'detail' && currentRecipe) { renderDetail(cont); return; }
    if (viewMode === 'addForm') { renderAddForm(cont); return; }
    renderFinder(cont);
  }

  function renderFinder(cont) {
    const mealTypes = ['all', 'petit-dej', 'dejeuner', 'gouter', 'diner'];
    const mealLabels = { all: 'Tous', 'petit-dej': 'Petit-déj', dejeuner: 'Déjeuner', gouter: 'Goûter', diner: 'Dîner' };
    const catLabels = { all: 'Toutes', 'petit-dej': 'Petit-déj', soupe: 'Soupes', plat: 'Plats', accompagnement: 'Accompagnements', dessert: 'Desserts', collation: 'Collations' };

    // Only fully-tolerated recipes
    const allSource = getAllRecipes();
    const allTolerated = allSource.filter(r => isFullyTolerated(r));
    const almostData = getAlmostTolerated(allSource);
    const allCategories = new Set([...allTolerated.map(r => r.category), ...almostData.allRecipes.map(r => r.category)]);
    const categories = ['all', ...allCategories];

    let html = `<h2 style="font-size:18px;margin-bottom:12px;">${getTimeTitle()}</h2>`;

    // Empty state: no tolerated recipes yet (and no almost-tolerated either)
    if (allTolerated.length === 0 && almostData.allRecipes.length === 0) {
      html += `<div style="text-align:center;padding:40px 20px;">
        <div style="font-size:52px;margin-bottom:16px;">🍽️</div>
        <p style="font-size:16px;font-weight:500;margin-bottom:8px;">Aucune recette disponible</p>
        <p style="font-size:13px;color:var(--text3);margin-bottom:20px;line-height:1.6;">
          Les recettes n'apparaissent que quand<br>
          <strong style="color:var(--text2);">tous leurs ingrédients sont tolérés</strong>.<br>
          Commence par configurer ta tolérance.
        </p>
        <button class="btn-primary" onclick="goToPage('tolerance')" style="margin-bottom:12px;">Configurer mes tolérances →</button>
        <br>
        <button class="btn-ghost" onclick="HC.recipes.starterKit()" style="font-size:12px;color:var(--text3);">
          🚀 Kit démarrage (aliments courants)
        </button>
      </div>`;
      cont.innerHTML = html;
      return;
    }

    // Ingredient selector (what do you have on hand tonight?)
    const toleratedFoods = FOOD_DB.filter(f => getToleranceStatus(f.name) === 'tolerated' && !selectedIngredients.includes(f.name));

    const mealQ = {'petit-dej':"Qu'est-ce que tu as ce matin ?", 'dejeuner':"Qu'est-ce que tu as pour le déjeuner ?", 'gouter':"Qu'est-ce que tu as pour le goûter ?", 'diner':"Qu'est-ce que tu as ce soir ?"};
    html += `<div style="font-size:12px;color:var(--text3);margin-bottom:6px;">${mealQ[getDefaultMealFilter()] || "Qu'est-ce que tu as ce soir ?"}</div>`;
    html += `<div class="food-search-wrap" style="margin-bottom:8px;">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" class="food-search" id="recipeIngSearch" placeholder="Chercher parmi tes tolérés..." autocomplete="off">
      <div class="food-suggestions" id="recipeIngSuggestions"></div>
    </div>`;

    // Selected ingredients chips
    if (selectedIngredients.length > 0) {
      html += `<div class="selected-foods" style="margin-bottom:14px;">`;
      selectedIngredients.forEach((name, i) => {
        const db = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizeFoodName(name));
        const score = db ? db.score : 0;
        html += `<div class="food-tag level-${score}" onclick="HC.recipes.removeIngredient(${i})">${escapeHtml(name)}${db && db.gluten ? ' 🌾' : ''} <span class="remove">×</span></div>`;
      });
      html += `<div class="food-tag" style="background:var(--bg3);color:var(--text3);cursor:pointer;" onclick="HC.recipes.clearIngredients()">Tout effacer ×</div>`;
      html += `</div>`;
    }

    // Quick shortcuts to tolerated foods (only when nothing selected yet)
    if (toleratedFoods.length > 0 && selectedIngredients.length === 0) {
      html += `<div style="margin-bottom:14px;"><div style="display:flex;flex-wrap:wrap;gap:4px;">`;
      toleratedFoods.slice(0, 16).forEach(f => {
        html += `<div class="ing-chip tolerated" onclick="HC.recipes.addIngredient('${escapeJs(f.name)}')" style="font-size:11px;padding:4px 8px;">${escapeHtml(f.name)}${f.gluten ? ' 🌾' : ''}</div>`;
      });
      if (toleratedFoods.length > 16) html += `<span style="font-size:11px;color:var(--text3);padding:4px;">+${toleratedFoods.length - 16}</span>`;
      html += `</div></div>`;
    }

    // Recipe name search
    html += `<div class="food-search-wrap" style="margin-bottom:8px;position:relative;">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" class="food-search" id="recipeNameSearch" placeholder="Chercher une recette par nom..." autocomplete="off" value="${escapeHtml(filterSearch)}" oninput="HC.recipes.setSearch(this.value)" style="${filterSearch ? 'padding-right:36px;' : ''}">
      ${filterSearch ? `<button onclick="HC.recipes.setSearch('')" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text3);cursor:pointer;font-size:18px;line-height:1;padding:0;">×</button>` : ''}
    </div>`;

    // Meal type filter
    html += `<div class="filter-row">`;
    mealTypes.forEach(mt => {
      html += `<button class="filter-chip ${filterMealType === mt ? 'active' : ''}" onclick="HC.recipes.setMealFilter('${mt}')">${mealLabels[mt] || mt}</button>`;
    });
    html += `</div>`;

    // Category filter
    html += `<div class="filter-row">`;
    categories.forEach(c => {
      html += `<button class="filter-chip ${filterCategory === c ? 'active' : ''}" onclick="HC.recipes.setCatFilter('${c}')">${catLabels[c] || c}</button>`;
    });
    html += `</div>`;

    // Gluten-free toggle
    html += `<div style="margin:6px 0 2px 0;">
      <button class="filter-chip ${filterGlutenFree ? 'active' : ''}" onclick="HC.recipes.toggleGlutenFree()" style="${filterGlutenFree ? 'border-color:var(--accent);' : ''}">🌾 Sans gluten</button>
    </div>`;

    // Apply filters: category + meal type + name search
    let recipes = allTolerated;
    if (filterCategory !== 'all') recipes = recipes.filter(r => r.category === filterCategory);
    if (filterMealType !== 'all') recipes = recipes.filter(r => r.mealType && r.mealType.includes(filterMealType));
    if (filterSearch) {
      const q = filterSearch.toLowerCase();
      recipes = recipes.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.ingredients.some(i => i.food.toLowerCase().includes(q)) ||
        (r.tips && r.tips.toLowerCase().includes(q))
      );
    }
    if (filterGlutenFree) recipes = recipes.filter(r => !recipeHasGluten(r));

    // If ingredients selected, compute match and sort; otherwise sort by histamine
    if (selectedIngredients.length > 0) {
      recipes = recipes.map(r => ({ ...r, _match: matchRecipe(r) }));
      recipes.sort((a, b) => b._match.score - a._match.score || a.histamineScore - b.histamineScore);
    } else {
      recipes = recipes.map(r => ({ ...r, _match: null }));
      recipes.sort((a, b) => a.histamineScore - b.histamineScore);
    }

    const total = recipes.length;
    const visible = recipes.slice(0, displayLimit);

    // Render section 1 header
    html += `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
      <span style="font-size:13px;color:var(--text3);">✅ ${total} recette${total !== 1 ? 's' : ''} disponible${total !== 1 ? 's' : ''}</span>
      <button class="btn-secondary" style="font-size:12px;padding:6px 12px;" onclick="HC.recipes.showAddForm()">+ Ma recette</button>
    </div>`;
    html += `<div class="recipe-grid">`;

    if (total === 0) {
      html += `<div class="empty-state"><p>Aucune recette pour ces filtres</p></div>`;
    } else {
      visible.forEach(r => {
        const emoji = getRecipeEmoji(r);
        const gradient = getCategoryGradient(r.category);
        const photoUrl = getRecipePhotoUrl(r);
        const photoHtml = photoUrl
          ? `<img src="${escapeHtml(photoUrl)}" alt="${escapeHtml(r.name)}" class="recipe-card-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling&&(this.nextElementSibling.style.display='none');this.parentElement.querySelector('.recipe-card-emoji').style.display=''"><div class="recipe-card-img-overlay"></div><span class="recipe-card-emoji" style="display:none">${emoji}</span>`
          : `<span class="recipe-card-emoji">${emoji}</span>`;

        let matchBadge = '';
        if (r._match && selectedIngredients.length > 0) {
          const mc = r._match.score === 100 ? 'match-100' : 'match-75';
          const ml = r._match.score === 100 ? '✓ Complet' : `${r._match.matched}/${r._match.total}`;
          matchBadge = `<div class="recipe-card-match ${mc}">${ml}${r._match.missing.length > 0 ? ` · manque ${r._match.missing.length}` : ''}</div>`;
        }

        html += `<div class="recipe-card" onclick="HC.recipes.openDetail('${r.id}')">
          <div class="recipe-card-visual" style="background:${gradient}">
            ${photoHtml}
            <span class="level-badge l${r.histamineScore}" style="position:absolute;top:8px;right:8px;z-index:2;">${levelFromScore(r.histamineScore)}</span>
          </div>
          <div class="recipe-card-body">
            <div class="recipe-card-name">${escapeHtml(r.name)}${r.isCustom ? ' <span style="font-size:10px;color:var(--accent2);">perso</span>' : ''}</div>
            <div class="recipe-card-meta">
              <span>⏱ ${r.prepTime + r.cookTime} min</span>
              <span>👤 ${r.servings}</span>
              <span>${r.difficulty}</span>
            </div>
            ${matchBadge}
          </div>
        </div>`;
      });
    }
    html += `</div>`;

    // "Load more" button
    if (total > displayLimit) {
      html += `<div style="text-align:center;margin-top:16px;">
        <button class="btn-secondary" onclick="HC.recipes.loadMore()" style="padding:10px 24px;">
          Voir plus (${total - displayLimit} restantes)
        </button>
      </div>`;
    }

    // ═══ SECTION 2: Almost tolerated (test +1 ingredient) ═══
    if (almostData.allRecipes.length > 0) {
      // Apply same filters to section 2
      let almostRecipes = almostData.allRecipes;
      if (filterCategory !== 'all') almostRecipes = almostRecipes.filter(r => r.category === filterCategory);
      if (filterMealType !== 'all') almostRecipes = almostRecipes.filter(r => r.mealType && r.mealType.includes(filterMealType));
      if (filterSearch) {
        const q = filterSearch.toLowerCase();
        almostRecipes = almostRecipes.filter(r =>
          r.name.toLowerCase().includes(q) ||
          r.ingredients.some(i => i.food.toLowerCase().includes(q)) ||
          (r.tips && r.tips.toLowerCase().includes(q))
        );
      }
      if (selectedMissingFood) {
        almostRecipes = almostRecipes.filter(r => normalizeFoodName(r._missingFood) === normalizeFoodName(selectedMissingFood));
      }

      // Recompute byFood counts after filters
      const filteredByFood = {};
      almostRecipes.forEach(r => {
        const key = normalizeFoodName(r._missingFood);
        if (!filteredByFood[key]) filteredByFood[key] = { name: r._missingFood, count: 0 };
        filteredByFood[key].count++;
      });
      const sortedChips = Object.values(filteredByFood).sort((a, b) => b.count - a.count);

      if (almostRecipes.length > 0) {
        html += `<div style="margin-top:32px;padding-top:24px;border-top:1px solid var(--border);">`;
        html += `<h3 style="font-size:16px;margin-bottom:6px;">🧪 Teste +1 ingrédient</h3>`;
        html += `<p style="font-size:12px;color:var(--text3);margin-bottom:14px;line-height:1.5;">
          ${almostRecipes.length} recette${almostRecipes.length !== 1 ? 's' : ''} accessibles en ajoutant <strong>1 seul</strong> aliment non testé
        </p>`;

        // Missing food chips
        html += `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">`;
        if (selectedMissingFood) {
          html += `<button class="filter-chip active" onclick="HC.recipes.clearMissingFood()" style="background:var(--accent);color:#fff;font-size:11px;">
            ${escapeHtml(selectedMissingFood)} ×
          </button>`;
        }
        sortedChips.forEach(item => {
          if (selectedMissingFood && normalizeFoodName(item.name) === normalizeFoodName(selectedMissingFood)) return;
          const fd = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizeFoodName(item.name));
          const score = fd ? fd.score : 1;
          html += `<button class="filter-chip" onclick="HC.recipes.selectMissingFood('${escapeJs(item.name)}')" style="font-size:11px;border-color:var(--level${score}-bg);">
            + ${escapeHtml(item.name)} <span style="opacity:0.6">(${item.count})</span>
          </button>`;
        });
        html += `</div>`;

        // Sort and limit
        almostRecipes.sort((a, b) => a.histamineScore - b.histamineScore);
        const totalAlmost = almostRecipes.length;
        const visibleAlmost = almostRecipes.slice(0, displayLimitAlmost);

        html += `<div class="recipe-grid">`;
        visibleAlmost.forEach(r => {
          const emoji = getRecipeEmoji(r);
          const gradient = getCategoryGradient(r.category);
          const photoUrl = getRecipePhotoUrl(r);
          const photoHtml = photoUrl
            ? `<img src="${escapeHtml(photoUrl)}" alt="${escapeHtml(r.name)}" class="recipe-card-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling&&(this.nextElementSibling.style.display='none');this.parentElement.querySelector('.recipe-card-emoji').style.display=''"><div class="recipe-card-img-overlay"></div><span class="recipe-card-emoji" style="display:none">${emoji}</span>`
            : `<span class="recipe-card-emoji">${emoji}</span>`;

          const missingBadge = `<div class="recipe-card-match" style="background:rgba(124,111,247,0.15);color:var(--accent);font-size:11px;">+ ${escapeHtml(r._missingFood)}</div>`;

          html += `<div class="recipe-card" onclick="HC.recipes.openDetail('${r.id}')" style="opacity:0.85;">
            <div class="recipe-card-visual" style="background:${gradient}">
              ${photoHtml}
              <span class="level-badge l${r.histamineScore}" style="position:absolute;top:8px;right:8px;z-index:2;">${levelFromScore(r.histamineScore)}</span>
            </div>
            <div class="recipe-card-body">
              <div class="recipe-card-name">${escapeHtml(r.name)}${r.isCustom ? ' <span style="font-size:10px;color:var(--accent2);">perso</span>' : ''}</div>
              <div class="recipe-card-meta">
                <span>⏱ ${r.prepTime + r.cookTime} min</span>
                <span>👤 ${r.servings}</span>
                <span>${r.difficulty}</span>
              </div>
              ${missingBadge}
            </div>
          </div>`;
        });
        html += `</div>`;

        if (totalAlmost > displayLimitAlmost) {
          html += `<div style="text-align:center;margin-top:16px;">
            <button class="btn-secondary" onclick="HC.recipes.loadMoreAlmost()" style="padding:10px 24px;">
              Voir plus (${totalAlmost - displayLimitAlmost} restantes)
            </button>
          </div>`;
        }
        html += `</div>`; // close section 2 container
      }
    }

    cont.innerHTML = html;

    // Setup ingredient search (tolerated foods only)
    setupIngredientSearch(true);
  }

  function setupIngredientSearch(toleratedOnly = false) {
    const input = document.getElementById('recipeIngSearch');
    const suggestions = document.getElementById('recipeIngSuggestions');
    if (!input || !suggestions) return;

    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      if (q.length < 1) { suggestions.classList.remove('show'); return; }
      let pool = FOOD_DB.filter(f => !selectedIngredients.includes(f.name));
      if (toleratedOnly) pool = pool.filter(f => getToleranceStatus(f.name) === 'tolerated');
      const results = pool.filter(f =>
        f.name.toLowerCase().includes(q) || f.cat.toLowerCase().includes(q)
      ).slice(0, 8);
      if (results.length === 0) { suggestions.classList.remove('show'); return; }
      suggestions.innerHTML = results.map(f =>
        `<div class="food-sug-item" onclick="HC.recipes.addIngredient('${escapeJs(f.name)}')">
          <div><div class="food-sug-name">${escapeHtml(f.name)}</div><div class="food-sug-cat">${f.cat}</div></div>
          <span>${f.gluten ? '<span style="font-size:11px;margin-right:4px;" title="Contient du gluten">🌾</span>' : ''}<span class="level-badge l${f.score}">${f.level}</span></span>
        </div>`
      ).join('');
      suggestions.classList.add('show');
    });
    input.addEventListener('blur', () => setTimeout(() => suggestions.classList.remove('show'), 200));
  }

  function renderDetail(cont) {
    const r = currentRecipe;
    const ratio = currentPortions / r.servings;

    let html = `<button class="back-btn" onclick="HC.recipes.backToFinder()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Retour
    </button>`;

    const emoji = getRecipeEmoji(r);
    const gradient = getCategoryGradient(r.category);

    const photoUrl = getRecipePhotoUrl(r);
    const detailPhotoHtml = photoUrl
      ? `<img src="${escapeHtml(photoUrl)}" alt="${escapeHtml(r.name)}" class="recipe-detail-hero-img" onerror="this.style.display='none';this.nextElementSibling.style.display='none';this.parentElement.querySelector('.recipe-detail-hero-emoji').style.display=''"><div class="recipe-detail-hero-overlay"></div><span class="recipe-detail-hero-emoji" style="display:none">${emoji}</span>`
      : `<span class="recipe-detail-hero-emoji">${emoji}</span>`;
    html += `<div class="recipe-detail">
      <div class="recipe-detail-hero" style="background:${gradient}">
        ${detailPhotoHtml}
      </div>
      <div class="recipe-detail-header">
        <div class="recipe-detail-title">${escapeHtml(r.name)}</div>
        <div class="recipe-detail-meta">
          <span>⏱ Prépa ${r.prepTime} min</span>
          <span>🔥 Cuisson ${r.cookTime} min</span>
          <span class="level-badge l${r.histamineScore}" style="margin-left:4px;">${levelFromScore(r.histamineScore)}</span>
        </div>
      </div>`;

    // Portions adjuster
    html += `<div class="portions-row">
      <label>Portions :</label>
      <button class="portions-btn" onclick="HC.recipes.adjustPortions(-1)">−</button>
      <span class="portions-val" id="portionsVal">${currentPortions}</span>
      <button class="portions-btn" onclick="HC.recipes.adjustPortions(1)">+</button>
    </div>`;

    // Ingredients
    html += `<div class="recipe-section"><h3>Ingrédients</h3><ul class="ingredient-list">`;
    r.ingredients.forEach(ing => {
      const tol = getToleranceStatus(ing.food);
      const tolStyle = tol === 'not_tolerated' ? 'color:var(--red);' : tol === 'tolerated' ? 'color:var(--green);' : '';
      const qty = ing.qty ? Math.round(ing.qty * ratio * 10) / 10 : '';
      const dbF = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizeFoodName(ing.food));
      const glutenIcon = dbF && dbF.gluten ? ' <span style="font-size:11px;" title="Contient du gluten">🌾</span>' : '';
      html += `<li style="${tolStyle}">
        <span>${escapeHtml(ing.food)}${glutenIcon}${ing.optional ? ' <em style="font-size:11px;color:var(--text3);">(optionnel)</em>' : ''}</span>
        <span class="ingredient-qty">${qty} ${ing.unit || ''}</span>
      </li>`;
    });
    html += `</ul></div>`;

    // Steps
    html += `<div class="recipe-section"><h3>Préparation</h3><ol class="step-list">`;
    r.steps.forEach(step => { html += `<li>${escapeHtml(step)}</li>`; });
    html += `</ol></div>`;

    // Nutrition
    if (r.nutrition) {
      const n = r.nutrition;
      html += `<div class="recipe-section"><h3>Nutrition (par portion)</h3>
        <div class="nutrition-grid">
          <div class="nutrition-item"><div class="nutrition-val" style="color:var(--accent2);">${Math.round(n.calories * ratio / currentPortions * r.servings)}</div><div class="nutrition-label">kcal</div></div>
          <div class="nutrition-item"><div class="nutrition-val" style="color:var(--green);">${Math.round(n.protein * ratio / currentPortions * r.servings)}</div><div class="nutrition-label">Prot.</div></div>
          <div class="nutrition-item"><div class="nutrition-val" style="color:var(--yellow);">${Math.round(n.carbs * ratio / currentPortions * r.servings)}</div><div class="nutrition-label">Gluc.</div></div>
          <div class="nutrition-item"><div class="nutrition-val" style="color:var(--orange);">${Math.round(n.fat * ratio / currentPortions * r.servings)}</div><div class="nutrition-label">Lip.</div></div>
          <div class="nutrition-item"><div class="nutrition-val" style="color:var(--text2);">${Math.round(n.fiber * ratio / currentPortions * r.servings)}</div><div class="nutrition-label">Fibres</div></div>
        </div>
      </div>`;
    }

    // Tips
    if (r.tips) {
      html += `<div class="histamine-tip">💡 ${escapeHtml(r.tips)}</div>`;
    }

    // Prepare button
    html += `<button class="prepare-btn" onclick="HC.recipes.prepareRecipe()">🍳 Préparer ce soir</button>`;
    html += `</div>`;
    cont.innerHTML = html;
  }

  function renderAddForm(cont) {
    let html = `<button class="back-btn" onclick="HC.recipes.backToFinder()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Retour
    </button>
    <h2 style="font-size:18px;margin-bottom:16px;">Ajouter une recette</h2>`;

    html += `<div class="form-group"><label>Nom de la recette</label><input class="input" id="newRecipeName" placeholder="Ex: Poulet aux herbes"></div>`;
    html += `<div class="form-row">
      <div class="form-group"><label>Catégorie</label><select class="input" id="newRecipeCat">
        <option value="petit-dej">Petit-déj</option><option value="soupe">Soupe</option>
        <option value="plat" selected>Plat</option><option value="accompagnement">Accompagnement</option>
        <option value="dessert">Dessert</option><option value="collation">Collation</option>
      </select></div>
      <div class="form-group"><label>Difficulté</label><select class="input" id="newRecipeDiff">
        <option value="facile">Facile</option><option value="moyen">Moyen</option>
      </select></div>
    </div>`;
    html += `<div class="form-row">
      <div class="form-group"><label>Prépa (min)</label><input type="number" class="input" id="newRecipePrep" value="15"></div>
      <div class="form-group"><label>Cuisson (min)</label><input type="number" class="input" id="newRecipeCook" value="20"></div>
      <div class="form-group"><label>Portions</label><input type="number" class="input" id="newRecipeServ" value="2"></div>
    </div>`;

    // Ingredients (dynamic add)
    html += `<div class="form-group"><label>Ingrédients</label>
      <div id="newRecipeIngList"></div>
      <div style="display:flex;gap:8px;margin-top:8px;">
        <input class="input" id="newRecipeIngName" placeholder="Nom" style="flex:2;">
        <input type="number" class="input" id="newRecipeIngQty" placeholder="Qté" style="flex:1;">
        <input class="input" id="newRecipeIngUnit" placeholder="Unité" style="flex:1;">
        <button class="btn-secondary" onclick="HC.recipes.addIngToForm()">+</button>
      </div>
    </div>`;

    // Steps
    html += `<div class="form-group"><label>Étapes (une par ligne)</label>
      <textarea class="input" id="newRecipeSteps" rows="5" placeholder="Étape 1...\nÉtape 2..."></textarea>
    </div>`;

    html += `<button class="btn-primary" onclick="HC.recipes.saveNewRecipe()" style="margin-top:8px;">Enregistrer la recette</button>`;
    cont.innerHTML = html;
  }

  let formIngredients = [];

  function addIngToForm() {
    const name = document.getElementById('newRecipeIngName').value.trim();
    const qty = parseFloat(document.getElementById('newRecipeIngQty').value) || 0;
    const unit = document.getElementById('newRecipeIngUnit').value.trim();
    if (!name) return;
    formIngredients.push({ food: name, qty, unit, optional: false });
    document.getElementById('newRecipeIngName').value = '';
    document.getElementById('newRecipeIngQty').value = '';
    document.getElementById('newRecipeIngUnit').value = '';
    renderFormIngredients();
  }

  function removeFormIng(idx) { formIngredients.splice(idx, 1); renderFormIngredients(); }

  function renderFormIngredients() {
    const cont = document.getElementById('newRecipeIngList');
    if (!cont) return;
    cont.innerHTML = formIngredients.map((ing, i) =>
      `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.03);">
        <span style="flex:1;font-size:13px;">${escapeHtml(ing.food)}</span>
        <span style="font-size:12px;color:var(--text2);">${ing.qty} ${ing.unit}</span>
        <button style="background:none;border:none;color:var(--red);cursor:pointer;font-size:16px;" onclick="HC.recipes.removeFormIng(${i})">×</button>
      </div>`
    ).join('');
  }

  function saveNewRecipe() {
    const name = document.getElementById('newRecipeName').value.trim();
    if (!name) { showToast("Donne un nom à la recette", "var(--orange)"); return; }
    if (formIngredients.length === 0) { showToast("Ajoute au moins un ingrédient", "var(--orange)"); return; }

    const maxScore = Math.max(0, ...formIngredients.map(i => {
      const db = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizeFoodName(i.food));
      return db ? db.score : 1;
    }));

    const recipe = {
      id: 'custom-' + Date.now(),
      name,
      category: document.getElementById('newRecipeCat').value,
      mealType: ['dejeuner', 'diner'],
      prepTime: parseInt(document.getElementById('newRecipePrep').value) || 15,
      cookTime: parseInt(document.getElementById('newRecipeCook').value) || 20,
      servings: parseInt(document.getElementById('newRecipeServ').value) || 2,
      difficulty: document.getElementById('newRecipeDiff').value,
      histamineScore: maxScore,
      ingredients: [...formIngredients],
      steps: document.getElementById('newRecipeSteps').value.split('\n').filter(s => s.trim()),
      nutrition: null,
      tips: '',
      isCustom: true
    };

    customRecipes.push(recipe);
    saveCustomRecipes();
    formIngredients = [];
    viewMode = 'finder';
    render();
    showToast("Recette ajoutée !");
    // Fetch a matching photo from Pexels in the background
    fetchPexelsPhoto(name).then(url => {
      if (url) {
        recipe.photo = url;
        saveCustomRecipes();
        render();
      }
    });
  }

  return {
    render,
    getAll: getAllRecipes,
    addIngredient(name) {
      if (!selectedIngredients.includes(name)) selectedIngredients.push(name);
      render();
    },
    removeIngredient(idx) { selectedIngredients.splice(idx, 1); render(); },
    clearIngredients() { selectedIngredients = []; render(); },
    setCatFilter(cat) { filterCategory = cat; displayLimit = 32; displayLimitAlmost = 16; render(); },
    setMealFilter(mt) { filterMealType = mt; displayLimit = 32; displayLimitAlmost = 16; render(); },
    setSearch(val) { filterSearch = val; displayLimit = 32; displayLimitAlmost = 16; render(); },
    toggleGlutenFree() { filterGlutenFree = !filterGlutenFree; localStorage.setItem('filterGlutenFree', filterGlutenFree); displayLimit = 32; displayLimitAlmost = 16; render(); },
    loadMore() { displayLimit += 32; render(); },
    loadMoreAlmost() { displayLimitAlmost += 16; render(); },
    selectMissingFood(name) { selectedMissingFood = name; displayLimitAlmost = 16; render(); },
    clearMissingFood() { selectedMissingFood = null; displayLimitAlmost = 16; render(); },
    starterKit() {
      const starters = [
        // Proteins (all common fresh cuts)
        'Poulet frais','Poulet','Dinde fraîche','Dinde','Boeuf frais','Boeuf','Agneau frais','Veau frais',
        'Blancs de poulet','Escalope de poulet','Cuisses de poulet','Filet de poulet',
        'Escalope de dinde','Filet de dinde','Filet mignon',
        // Fish (fresh)
        'Cabillaud','Colin','Truite fraîche','Saumon frais','Sole fraîche',
        'Tilapia','Bar frais','Daurade fraîche','Lieu noir',
        // Eggs & dairy
        'Oeufs','Oeuf frais','Oeufs frais','Beurre','Lait frais','Lait',
        'Crème fraîche','Crème liquide','Ricotta fraîche','Ricotta','Mozzarella fraîche','Mozzarella',
        'Fromage blanc','Chèvre frais','Mascarpone','Feta fraîche',
        // Grains, flours & carbs
        'Riz','Riz jasmin','Riz basmati','Quinoa','Flocons d\'avoine','Avoine',
        'Farine','Farine de riz','Farine de sarrasin','Farine d\'épeautre',
        'Pâtes fraîches','Pâtes','Semoule','Couscous','Polenta',
        'Pomme de terre','Patate douce','Pain de mie frais',
        // Vegetables
        'Courgette','Carotte','Poireau','Fenouil','Brocoli','Chou-fleur','Oignon','Ail','Échalote',
        'Haricots verts','Petits pois','Asperges','Céleri','Céleri-rave','Panais','Navet','Betterave',
        'Champignons de Paris','Poivron','Poivron vert','Poivron jaune','Épinards','Concombre',
        'Chou blanc','Chou rouge','Chou vert','Chou de Bruxelles','Bok choy','Chou napa',
        'Butternut','Courge','Potimarron','Endive','Artichaut',
        // Legumes
        'Lentilles','Lentilles vertes','Lentilles corail','Pois chiches','Haricots blancs',
        // Herbs
        'Persil','Thym','Romarin','Basilic frais','Aneth','Ciboulette','Menthe fraîche',
        'Coriandre fraîche','Herbes fraîches','Laurier','Estragon','Sauge fraîche',
        'Sauge','Cerfeuil','Cerfeuil frais','Origan frais',
        // Spices & seasonings
        'Gingembre frais','Curcuma','Cumin','Cannelle','Paprika doux','Curry doux',
        'Noix de muscade','Cardamome','Safran','Poudre de vanille','Vanille',
        'Levure chimique','Bicarbonate de soude','Fécule de pomme de terre',
        // Nuts & seeds (tolerated ones)
        'Amandes','Noix de coco','Noix de coco râpée','Graines de sésame','Graines de chia',
        // Fruits
        'Pomme','Poire','Myrtilles','Pêche','Mangue','Cerise','Abricot','Melon',
        'Pastèque','Figue fraîche','Raisin frais',
        // Condiments & liquids
        'Bouillon maison','Bouillon','Lait de coco','Huile de coco','Huile de sésame',
        'Maïzena','Miel','Sirop d\'érable','Sucre de coco','Coconut aminos',
        'Tahini','Pâte de sésame',
      ];
      starters.forEach(food => {
        const key = normalizeFoodName(food);
        if (!toleranceData[key]) toleranceData[key] = { status: 'tolerated', source: 'starter', date: new Date().toISOString().split('T')[0] };
      });
      saveTolerance();
      render();
      showToast("🚀 Kit démarrage appliqué ! Adaptez au fil de vos tests.", "var(--green)");
    },
    openDetail(id) {
      currentRecipe = getAllRecipes().find(r => r.id === id);
      if (!currentRecipe) return;
      currentPortions = currentRecipe.servings;
      viewMode = 'detail';
      render();
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    backToFinder() { viewMode = 'finder'; currentRecipe = null; render(); },
    adjustPortions(delta) {
      currentPortions = Math.max(1, Math.min(12, currentPortions + delta));
      const el = document.getElementById('portionsVal');
      if (el) el.textContent = currentPortions;
      render();
    },
    prepareRecipe() {
      if (!currentRecipe) return;
      // Pre-fill journal with recipe ingredients
      HC.journal.prefillFromRecipe(currentRecipe, currentPortions);
      goToPage('journal');
      showToast("Ingrédients ajoutés au journal !", "var(--accent)");
    },
    showAddForm() { viewMode = 'addForm'; formIngredients = []; render(); },
    addIngToForm, removeFormIng, saveNewRecipe
  };
})();

// ═══ TOLERANCE MODULE ═══
HC.tolerance = (() => {
  let searchQuery = '';
  let filterCat = 'all';
  let filterStatus = 'all';
  let filterScore = 'all';

  function render() {
    autoSuggestTolerance();
    renderList();
    setupEvents();
  }

  function renderList() {
    const cats = ['all', ...new Set(FOOD_DB.map(f => f.cat))];
    const catCont = document.getElementById('toleranceCatFilters');
    catCont.innerHTML = cats.map(c =>
      `<button class="filter-chip ${filterCat === c ? 'active' : ''}" data-tol-cat="${c}">${c === 'all' ? 'Toutes' : c}</button>`
    ).join('');

    let foods = [...FOOD_DB];
    if (filterCat !== 'all') foods = foods.filter(f => f.cat === filterCat);
    if (searchQuery) foods = foods.filter(f => f.name.toLowerCase().includes(searchQuery));
    if (filterStatus !== 'all') foods = foods.filter(f => getToleranceStatus(f.name) === filterStatus);
    if (filterScore !== 'all') foods = foods.filter(f => f.score === Number(filterScore));
    foods.sort((a, b) => a.name.localeCompare(b.name));

    const list = document.getElementById('toleranceList');
    if (foods.length === 0) {
      list.innerHTML = '<div class="empty-state"><p>Aucun aliment trouvé</p></div>';
      return;
    }

    list.innerHTML = foods.map(f => {
      const status = getToleranceStatus(f.name);
      const safeName = escapeHtml(f.name);
      const safeNameAttr = escapeJs(f.name);
      return `<div class="tolerance-item">
        <div style="flex:1;">
          <div class="fli-name">${safeName}</div>
          <div class="fli-cat">${f.cat} · <span class="level-badge l${f.score}" style="padding:2px 6px;font-size:10px;">${f.level}</span>${f.gluten ? ' <span style="font-size:11px;" title="Contient du gluten">🌾</span>' : ''}</div>
        </div>
        <div class="tolerance-toggle">
          <button class="tol-btn ${status === 'tolerated' ? 'active-ok' : ''}" onclick="HC.tolerance.set('${safeNameAttr}','tolerated')" title="Toléré">✓</button>
          <button class="tol-btn ${status === 'untested' ? 'active-unknown' : ''}" onclick="HC.tolerance.set('${safeNameAttr}','untested')" title="Non testé">?</button>
          <button class="tol-btn ${status === 'not_tolerated' ? 'active-no' : ''}" onclick="HC.tolerance.set('${safeNameAttr}','not_tolerated')" title="Non toléré">✗</button>
        </div>
      </div>`;
    }).join('');
  }

  function setupEvents() {
    document.getElementById('toleranceSearch').oninput = e => { searchQuery = e.target.value.toLowerCase(); renderList(); };
    document.getElementById('toleranceCatFilters').onclick = e => {
      const chip = e.target.closest('[data-tol-cat]');
      if (!chip) return;
      filterCat = chip.dataset.tolCat;
      renderList();
    };
    document.getElementById('toleranceStatusFilters').onclick = e => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      document.getElementById('toleranceStatusFilters').querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterStatus = chip.dataset.status;
      renderList();
    };
    document.getElementById('toleranceScoreFilters').onclick = e => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      document.getElementById('toleranceScoreFilters').querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterScore = chip.dataset.score;
      renderList();
    };
  }

  return {
    render,
    set(name, status) { setToleranceStatus(name, status); renderList(); }
  };
})();

// ═══ INTRODUCE MODULE ═══
HC.introduce = (() => {
  let selectedTestFood = null;

  function getAllRecs() {
    return HC.recipes.getAll ? HC.recipes.getAll() : (typeof RECIPE_DB !== 'undefined' ? RECIPE_DB : []);
  }

  function getTestableFoods() {
    const pantry = PANTRY_STAPLES.map(normalizeFoodName);
    const candidates = {};

    getAllRecs().forEach(recipe => {
      const nonPantry = recipe.ingredients.filter(i => !i.optional && !pantry.includes(normalizeFoodName(i.food)));
      const untested = nonPantry.filter(i => getToleranceStatusFuzzy(i.food) === 'untested');
      const notTolerated = nonPantry.filter(i => getToleranceStatusFuzzy(i.food) === 'not_tolerated');

      // Testable: exactly 1 untested ingredient, zero not_tolerated
      if (notTolerated.length === 0 && untested.length === 1) {
        const food = untested[0].food;
        const key = normalizeFoodName(food);
        if (!candidates[key]) candidates[key] = { name: food, recipes: [] };
        candidates[key].recipes.push(recipe.id);
      }
    });

    return Object.values(candidates).sort((a, b) => b.recipes.length - a.recipes.length);
  }

  function renderRecipeCard(r) {
    const emoji = getRecipeEmoji(r);
    const gradient = getCategoryGradient(r.category);
    const photoUrl = getRecipePhotoUrl(r);
    const photoHtml = photoUrl
      ? `<img src="${escapeHtml(photoUrl)}" alt="${escapeHtml(r.name)}" class="recipe-card-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling&&(this.nextElementSibling.style.display='none');this.parentElement.querySelector('.recipe-card-emoji').style.display=''"><div class="recipe-card-img-overlay"></div><span class="recipe-card-emoji" style="display:none">${emoji}</span>`
      : `<span class="recipe-card-emoji">${emoji}</span>`;
    return `<div class="recipe-card" onclick="HC.recipes.openDetail('${r.id}');goToPage('recipes');">
      <div class="recipe-card-visual" style="background:${gradient}">
        ${photoHtml}
        <span class="level-badge l${r.histamineScore}" style="position:absolute;top:8px;right:8px;z-index:2;">${levelFromScore(r.histamineScore)}</span>
      </div>
      <div class="recipe-card-body">
        <div class="recipe-card-name">${escapeHtml(r.name)}</div>
        <div class="recipe-card-meta"><span>⏱ ${r.prepTime + r.cookTime} min</span><span>👤 ${r.servings}</span></div>
        <div class="recipe-card-match match-75">🧪 Test : ${escapeHtml(selectedTestFood || '')}</div>
      </div>
    </div>`;
  }

  function render() {
    const cont = document.getElementById('introduceContent');
    if (!cont) return;
    const testable = getTestableFoods();

    let html = `<h2 style="font-size:18px;margin-bottom:8px;">🧪 Tester un aliment</h2>
    <div style="font-size:13px;color:var(--text2);margin-bottom:16px;line-height:1.5;">
      Ces recettes utilisent tous tes aliments tolérés + <strong>exactement 1 aliment</strong> inconnu — pour une introduction en toute sécurité.
    </div>`;

    if (testable.length === 0) {
      html += `<div style="text-align:center;padding:40px 20px;">
        <div style="font-size:52px;margin-bottom:16px;">🔬</div>
        <p style="font-size:16px;font-weight:500;margin-bottom:8px;">Aucun aliment testable</p>
        <p style="font-size:13px;color:var(--text3);margin-bottom:20px;line-height:1.6;">
          Pour qu'un aliment apparaisse ici, il faut<br>
          que toutes les <strong style="color:var(--text2);">autres recettes</strong> ne contiennent<br>
          que des aliments <strong style="color:var(--green);">tolérés</strong>.
        </p>
        <button class="btn-primary" onclick="goToPage('tolerance')">Configurer mes tolérances →</button>
      </div>`;
      cont.innerHTML = html;
      return;
    }

    if (!selectedTestFood) {
      html += `<div style="font-size:13px;color:var(--text3);margin-bottom:12px;">
        ${testable.length} aliment${testable.length > 1 ? 's' : ''} testable${testable.length > 1 ? 's' : ''} — choisis-en un :
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">`;

      testable.forEach(item => {
        const fd = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizeFoodName(item.name));
        const score = fd ? fd.score : 1;
        html += `<div class="card" style="cursor:pointer;" onclick="HC.introduce.selectFood('${escapeJs(item.name)}')">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-weight:500;margin-bottom:3px;">${escapeHtml(item.name)}</div>
              <div style="font-size:12px;color:var(--text3);">${item.recipes.length} recette${item.recipes.length > 1 ? 's' : ''} éligible${item.recipes.length > 1 ? 's' : ''}</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              ${fd && fd.gluten ? '<span style="font-size:11px;" title="Contient du gluten">🌾</span>' : ''}<span class="level-badge l${score}">${levelFromScore(score)}</span>
              <svg style="width:16px;height:16px;color:var(--text3);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>
        </div>`;
      });
      html += `</div>`;

    } else {
      const item = testable.find(t => normalizeFoodName(t.name) === normalizeFoodName(selectedTestFood));
      const recipes = item ? getAllRecs().filter(r => item.recipes.includes(r.id)) : [];
      const fd = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizeFoodName(selectedTestFood));
      const score = fd ? fd.score : 1;

      html += `<button class="back-btn" onclick="HC.introduce.clearSelection()" style="margin-bottom:16px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Tous les testables
      </button>

      <div class="card" style="margin-bottom:16px;background:rgba(124,111,247,0.08);border-color:var(--accent);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="font-size:36px;">🧪</div>
          <div style="flex:1;">
            <div style="font-weight:600;font-size:15px;margin-bottom:4px;">${escapeHtml(selectedTestFood)}</div>
            <div style="font-size:12px;color:var(--text2);">Niveau : <span class="level-badge l${score}">${levelFromScore(score)}</span>${fd && fd.gluten ? ' <span style="font-size:11px;" title="Contient du gluten">🌾</span>' : ''}</div>
            <div style="font-size:12px;color:var(--text3);margin-top:3px;">${recipes.length} recette${recipes.length !== 1 ? 's' : ''} disponible${recipes.length !== 1 ? 's' : ''}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <button class="btn-secondary" style="font-size:11px;padding:5px 12px;white-space:nowrap;" onclick="HC.introduce.markTolerated()">✓ Toléré</button>
            <button class="btn-ghost" style="font-size:11px;padding:5px 12px;color:var(--red);white-space:nowrap;" onclick="HC.introduce.markNotTolerated()">✗ Réaction</button>
          </div>
        </div>
      </div>

      <div class="recipe-grid">${recipes.map(renderRecipeCard).join('')}</div>`;
    }

    cont.innerHTML = html;
  }

  return {
    render,
    selectFood(food) { selectedTestFood = food; render(); },
    clearSelection() { selectedTestFood = null; render(); },
    markTolerated() {
      if (!selectedTestFood) return;
      setToleranceStatus(selectedTestFood, 'tolerated');
      showToast(`${selectedTestFood} toléré ! 🎉`, "var(--green)");
      selectedTestFood = null;
      render();
    },
    markNotTolerated() {
      if (!selectedTestFood) return;
      setToleranceStatus(selectedTestFood, 'not_tolerated');
      showToast(`${selectedTestFood} noté comme non toléré`, "var(--orange)");
      selectedTestFood = null;
      render();
    }
  };
})();

// ═══ JOURNAL MODULE ═══
HC.journal = (() => {
  let selectedMeal = "Petit-déj";
  let selectedFoods = [];
  let activeContexts = [];
  let editingEntryId = null;

  function init() {
    setupMealChips();
    setupFoodSearch();
    setupCustomFoodInput();
    setupSymptomSliders();
    setupContextChips();
    setDefaultTime();
    updateEditorState();
    renderToday();
  }

  function setupMealChips() {
    document.querySelectorAll('.meal-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        selectedMeal = chip.dataset.meal;
        document.querySelectorAll('.meal-chip').forEach(c => c.classList.toggle('active', c.dataset.meal === selectedMeal));
      });
    });
  }

  function setupFoodSearch() {
    const input = document.getElementById('foodSearch');
    const suggestions = document.getElementById('foodSuggestions');
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      if (q.length < 1) { suggestions.classList.remove('show'); return; }
      const results = FOOD_DB.filter(f => f.name.toLowerCase().includes(q) || f.cat.toLowerCase().includes(q)).slice(0, 8);
      if (results.length === 0) { suggestions.classList.remove('show'); return; }
      suggestions.innerHTML = results.map(f =>
        `<div class="food-sug-item" onclick="HC.journal.selectFood('${escapeJs(f.name)}')">
          <div><div class="food-sug-name">${f.name}</div><div class="food-sug-cat">${f.cat}</div></div>
          <span>${f.gluten ? '<span style="font-size:11px;margin-right:4px;" title="Contient du gluten">🌾</span>' : ''}<span class="level-badge l${f.score}">${f.level}</span></span>
        </div>`
      ).join('');
      suggestions.classList.add('show');
    });
    input.addEventListener('blur', () => setTimeout(() => suggestions.classList.remove('show'), 200));
  }

  function setupCustomFoodInput() {
    document.getElementById('customFood').addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      addCustomFood();
    });
  }

  function setupSymptomSliders() {
    document.getElementById('symptomSliders').innerHTML = SYMPTOM_CATEGORIES.map(s =>
      `<div class="symptom-row">
        <span class="symptom-label">${s.emoji} ${s.label}</span>
        <div class="symptom-slider-wrap"><input type="range" class="symptom-slider" id="sym_${s.id}" min="0" max="10" value="0" oninput="document.getElementById('val_${s.id}').textContent=this.value"></div>
        <span class="symptom-val" id="val_${s.id}">0</span>
      </div>`
    ).join('');
  }

  function setupContextChips() {
    document.querySelectorAll('.ctx-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const ctx = chip.dataset.ctx;
        if (ctx.startsWith('stress-')) {
          document.querySelectorAll('.ctx-chip[data-ctx^="stress-"]').forEach(c => { c.classList.remove('active'); activeContexts = activeContexts.filter(x => !x.startsWith('stress-')); });
        }
        chip.classList.toggle('active');
        if (chip.classList.contains('active')) activeContexts.push(ctx);
        else activeContexts = activeContexts.filter(x => x !== ctx);
      });
    });
  }

  function setDefaultTime() {
    const now = new Date();
    document.getElementById('mealTime').value = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  }

  function selectFood(name) {
    const key = normalizeFoodName(name);
    if (!key || selectedFoods.find(f => normalizeFoodName(f.name) === key)) return;
    const dbFood = FOOD_DB.find(f => normalizeFoodName(f.name) === key);
    selectedFoods.push(dbFood ? {name: dbFood.name, score: clampScore(dbFood.score), cat: dbFood.cat, level: dbFood.level} : {name, cat: "Personnalisé", score: 1, level: "Modéré"});
    renderSelectedFoods();
    document.getElementById('foodSearch').value = '';
    document.getElementById('foodSuggestions').classList.remove('show');
  }

  function addCustomFood() {
    const input = document.getElementById('customFood');
    const name = input.value.trim();
    if (!name) return;
    const result = upsertCustomFood(name, "Personnalisé", 1);
    if (!result.ok) return;
    selectFood(result.food.name);
    showToast(result.created ? "Aliment personnalisé ajouté" : "Aliment déjà présent", "var(--accent)");
    input.value = '';
  }

  function renderSelectedFoods() {
    document.getElementById('selectedFoods').innerHTML = selectedFoods.map((f, i) => {
      const dbF = FOOD_DB.find(d => normalizeFoodName(d.name) === normalizeFoodName(f.name));
      return `<div class="food-tag level-${f.score}" onclick="HC.journal.removeFood(${i})">${escapeHtml(f.name)}${dbF && dbF.gluten ? ' 🌾' : ''} <span class="remove">×</span></div>`;
    }).join('');
  }

  function removeFood(idx) { selectedFoods.splice(idx, 1); renderSelectedFoods(); }

  function saveEntry() {
    if (selectedFoods.length === 0) { showToast("Ajoute au moins un aliment !", "var(--orange)"); return; }
    const symptoms = {};
    let totalSym = 0;
    SYMPTOM_CATEGORIES.forEach(s => { const val = parseInt(document.getElementById('sym_' + s.id).value); symptoms[s.id] = val; totalSym += val; });

    const existingEntry = editingEntryId ? entries.find(e => String(e.id) === String(editingEntryId)) : null;
    const entry = {
      id: existingEntry ? existingEntry.id : Date.now(),
      date: existingEntry ? existingEntry.date : new Date().toISOString().split('T')[0],
      mealTime: document.getElementById('mealTime').value,
      symptomTime: document.getElementById('symptomTime').value,
      meal: selectedMeal,
      foods: selectedFoods.map(f => ({name: f.name, score: clampScore(f.score), cat: f.cat})),
      symptoms, totalSymptoms: totalSym,
      contexts: [...new Set(activeContexts)],
      notes: document.getElementById('mealNotes').value.trim()
    };

    if (existingEntry) entries = entries.map(e => String(e.id) === String(editingEntryId) ? entry : e);
    else entries.push(entry);
    saveEntries();
    showToast(existingEntry ? "Repas mis à jour !" : "Repas enregistré !");
    resetForm();
    renderToday();
  }

  function resetForm() {
    editingEntryId = null;
    selectedFoods = [];
    activeContexts = [];
    document.querySelectorAll('.meal-chip').forEach((c, i) => c.classList.toggle('active', i === 0));
    selectedMeal = "Petit-déj";
    renderSelectedFoods();
    SYMPTOM_CATEGORIES.forEach(s => { document.getElementById('sym_' + s.id).value = 0; document.getElementById('val_' + s.id).textContent = '0'; });
    document.querySelectorAll('.ctx-chip').forEach(c => c.classList.remove('active'));
    document.getElementById('mealNotes').value = '';
    document.getElementById('customFood').value = '';
    setDefaultTime();
    document.getElementById('symptomTime').value = '';
    updateEditorState();
  }

  function updateEditorState() {
    const isEditing = editingEntryId !== null;
    document.getElementById('saveEntryBtn').textContent = isEditing ? "Mettre à jour le repas" : "Enregistrer le repas";
    document.getElementById('cancelEditBtn').classList.toggle('show', isEditing);
    document.getElementById('journalTitle').textContent = isEditing ? "Modifier le repas" : "Nouveau repas";
  }

  function editEntry(id) {
    const entry = entries.find(e => String(e.id) === String(id));
    if (!entry) return;
    editingEntryId = String(entry.id);
    selectedMeal = entry.meal || "Petit-déj";
    document.querySelectorAll('.meal-chip').forEach(c => c.classList.toggle('active', c.dataset.meal === selectedMeal));
    selectedFoods = (entry.foods || []).map(food => {
      const known = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizeFoodName(food.name));
      return known ? {name: known.name, score: clampScore(known.score), cat: known.cat, level: known.level} : {name: food.name, score: clampScore(food.score), cat: food.cat || "Personnalisé", level: levelFromScore(food.score)};
    });
    renderSelectedFoods();
    activeContexts = Array.isArray(entry.contexts) ? [...new Set(entry.contexts)] : [];
    document.querySelectorAll('.ctx-chip').forEach(chip => chip.classList.toggle('active', activeContexts.includes(chip.dataset.ctx)));
    const symptoms = entry.symptoms || {};
    SYMPTOM_CATEGORIES.forEach(s => { const val = Math.max(0, Math.min(10, Number(symptoms[s.id]) || 0)); document.getElementById('sym_' + s.id).value = val; document.getElementById('val_' + s.id).textContent = String(val); });
    document.getElementById('mealTime').value = entry.mealTime || '';
    document.getElementById('symptomTime').value = entry.symptomTime || '';
    document.getElementById('mealNotes').value = entry.notes || '';
    updateEditorState();
    goToPage('journal');
    window.scrollTo({top: 0, behavior: 'smooth'});
    showToast("Mode modification activé", "var(--accent)");
  }

  function cancelEdit() { if (editingEntryId === null) return; resetForm(); showToast("Modification annulée", "var(--orange)"); }

  function deleteEntry(id) {
    const targetId = String(id);
    if (!entries.find(e => String(e.id) === targetId)) { showToast("Entrée introuvable", "var(--red)"); return; }
    if (!confirm('Supprimer cette entrée ?')) return;
    entries = entries.filter(e => String(e.id) !== targetId);
    if (editingEntryId && String(editingEntryId) === targetId) resetForm();
    saveEntries();
    renderToday();
    if (currentPage === 'history') HC.history.render();
    if (currentPage === 'dashboard') HC.dashboard.render();
  }

  function renderEntryHtml(e) {
    const safeSymptoms = e.symptoms || {};
    const safeFoods = Array.isArray(e.foods) ? e.foods : [];
    const safeContexts = Array.isArray(e.contexts) ? e.contexts : [];
    const totalSymptoms = Number.isFinite(Number(e.totalSymptoms)) ? Number(e.totalSymptoms) : SYMPTOM_CATEGORIES.reduce((sum, s) => sum + (Number(safeSymptoms[s.id]) || 0), 0);
    const sc = getScoreColor(totalSymptoms);
    const foodTags = safeFoods.map(f => {
      const dbF = FOOD_DB.find(d => normalizeFoodName(d.name) === normalizeFoodName(f.name));
      return `<span class="he-food-tag level-badge l${clampScore(f.score)}">${escapeHtml(f.name)}${dbF && dbF.gluten ? ' 🌾' : ''}</span>`;
    }).join('');
    const timeBits = [];
    if (e.mealTime) timeBits.push(`Repas ${e.mealTime}`);
    if (e.symptomTime) timeBits.push(`Symptômes ${e.symptomTime}`);
    const symDetails = SYMPTOM_CATEGORIES.filter(s => Number(safeSymptoms[s.id]) > 0).map(s => `${s.emoji}${safeSymptoms[s.id]}`).join('  ');

    return `<div class="history-entry">
      <div class="he-header">
        <div><span class="he-meal">${escapeHtml(e.meal)}</span> <span class="he-time">${timeBits.join(' · ')}</span></div>
        <div class="he-actions">
          <span class="he-score-badge" style="background:${sc.bg};color:${sc.color};">${sc.label} ${totalSymptoms}/60</span>
          <button class="he-edit" onclick="HC.journal.editEntry('${e.id}')">Modifier</button>
          <button class="he-delete" onclick="HC.journal.deleteEntry('${e.id}')">×</button>
        </div>
      </div>
      <div class="he-foods">${foodTags}</div>
      ${symDetails ? `<div class="he-symptoms">${symDetails}</div>` : ''}
      ${e.notes ? `<div class="he-notes">${escapeHtml(e.notes)}</div>` : ''}
      ${safeContexts.length ? `<div style="margin-top:4px;font-size:11px;color:var(--text3);">${safeContexts.join(', ')}</div>` : ''}
    </div>`;
  }

  function renderToday() {
    const today = new Date().toISOString().split('T')[0];
    const todayEntries = entries.filter(e => e.date === today).reverse();
    const cont = document.getElementById('todayHistory');
    if (todayEntries.length === 0) {
      cont.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12h14"/></svg><p>Aucun repas enregistré aujourd'hui</p></div>`;
      return;
    }
    cont.innerHTML = '<div class="card">' + todayEntries.map(renderEntryHtml).join('') + '</div>';
  }

  function prefillFromRecipe(recipe, portions) {
    const ratio = portions / recipe.servings;
    selectedFoods = recipe.ingredients.filter(i => !i.optional).map(ing => {
      const dbFood = FOOD_DB.find(f => normalizeFoodName(f.name) === normalizeFoodName(ing.food));
      return dbFood ? {name: dbFood.name, score: clampScore(dbFood.score), cat: dbFood.cat, level: dbFood.level} : {name: ing.food, score: 0, cat: "Personnalisé", level: "Faible"};
    });

    // Set meal type to dinner by default
    selectedMeal = "Dîner";
    document.querySelectorAll('.meal-chip').forEach(c => c.classList.toggle('active', c.dataset.meal === selectedMeal));
    renderSelectedFoods();
    setDefaultTime();
    document.getElementById('mealNotes').value = `Recette : ${recipe.name} (${portions} portions)`;
    updateEditorState();
  }

  return {
    init, saveEntry, cancelEdit, selectFood, addCustomFood, removeFood,
    editEntry, deleteEntry, renderToday, prefillFromRecipe, renderEntryHtml
  };
})();

// ═══ HISTORY MODULE ═══
HC.history = (() => {
  function render() {
    const cont = document.getElementById('fullHistory');
    if (entries.length === 0) { cont.innerHTML = `<div class="empty-state"><p>Aucune donnée enregistrée</p></div>`; return; }
    const byDate = {};
    entries.forEach(e => { if (!byDate[e.date]) byDate[e.date] = []; byDate[e.date].push(e); });
    const dates = Object.keys(byDate).sort().reverse();
    const opts = {weekday:'long', day:'numeric', month:'long'};
    cont.innerHTML = dates.map(d => {
      const dateLabel = new Date(d + 'T12:00:00').toLocaleDateString('fr-FR', opts);
      const dayEntries = byDate[d].reverse();
      const dayTotal = dayEntries.reduce((s, e) => s + e.totalSymptoms, 0);
      const sc = getScoreColor(dayTotal / dayEntries.length);
      return `<div class="day-header">${dateLabel}<span style="float:right;font-size:11px;color:${sc.color};">moy. ${Math.round(dayTotal/dayEntries.length)}/60</span></div>
        <div class="card">${dayEntries.map(e => HC.journal.renderEntryHtml(e)).join('')}</div>`;
    }).join('');
  }
  return { render };
})();

// ═══ DASHBOARD MODULE ═══
HC.dashboard = (() => {
  function render() {
    renderStats(); renderSymptomTimeline(); renderTopFoods(); renderCorrelations(); renderSymptomCategories();
  }

  function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); days.push(d.toISOString().split('T')[0]); }
    return days;
  }

  function renderStats() {
    const today = new Date().toISOString().split('T')[0];
    const todayEntries = entries.filter(e => e.date === today);
    const avgSym = entries.length > 0 ? Math.round(entries.reduce((s,e) => s + e.totalSymptoms, 0) / entries.length * 10) / 10 : 0;
    const uniqueFoods = new Set();
    entries.forEach(e => e.foods.forEach(f => uniqueFoods.add(f.name)));
    document.getElementById('statsGrid').innerHTML = `
      <div class="stat-card"><div class="stat-val" style="color:var(--accent2);">${todayEntries.length}</div><div class="stat-label">Repas aujourd'hui</div></div>
      <div class="stat-card"><div class="stat-val" style="color:var(--green);">${entries.length}</div><div class="stat-label">Total repas</div></div>
      <div class="stat-card"><div class="stat-val" style="color:${avgSym > 10 ? 'var(--orange)' : 'var(--yellow)'};">${avgSym}</div><div class="stat-label">Moy. symptômes /60</div></div>
      <div class="stat-card"><div class="stat-val" style="color:var(--accent2);">${uniqueFoods.size}</div><div class="stat-label">Aliments testés</div></div>`;
  }

  function renderSymptomTimeline() {
    const days = getLast7Days();
    const data = days.map(d => {
      const de = entries.filter(e => e.date === d);
      return {date: d, avg: de.length === 0 ? 0 : de.reduce((s,e) => s + e.totalSymptoms, 0) / de.length};
    });
    const maxVal = Math.max(...data.map(d => d.avg), 1);
    document.getElementById('symptomTimeline').innerHTML = data.map(d => {
      const h = Math.max(2, (d.avg / maxVal) * 100);
      let color = 'var(--green)';
      if (d.avg > 5) color = 'var(--yellow)';
      if (d.avg > 15) color = 'var(--orange)';
      if (d.avg > 25) color = 'var(--red)';
      return `<div class="timeline-bar" style="height:${h}%;background:${color};" title="${Math.round(d.avg)}"></div>`;
    }).join('');
    const dayNames = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
    document.getElementById('timelineLabels').innerHTML = data.map(d => `<div class="timeline-label">${dayNames[new Date(d.date + 'T12:00:00').getDay()]}</div>`).join('');
  }

  function renderTopFoods() {
    const counts = {};
    entries.forEach(e => e.foods.forEach(f => { counts[f.name] = (counts[f.name] || 0) + 1; }));
    const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0, 8);
    const max = sorted.length > 0 ? sorted[0][1] : 1;
    document.getElementById('topFoodsChart').innerHTML = sorted.length === 0
      ? '<div class="empty-state"><p>Pas encore de données</p></div>'
      : sorted.map(([name, count]) => {
        const db = FOOD_DB.find(f => f.name === name);
        const score = db ? db.score : 1;
        const colors = ['var(--green)','var(--yellow)','var(--orange)','var(--red)'];
        return `<div class="bar-row"><span class="bar-label">${escapeHtml(name)}</span><div class="bar-track"><div class="bar-fill" style="width:${(count/max)*100}%;background:${colors[score]};"></div></div><span class="bar-val">${count}x</span></div>`;
      }).join('');
  }

  function renderCorrelations() {
    const foodSym = {};
    entries.forEach(e => e.foods.forEach(f => {
      if (!foodSym[f.name]) foodSym[f.name] = {total: 0, count: 0, score: f.score};
      foodSym[f.name].total += e.totalSymptoms;
      foodSym[f.name].count += 1;
    }));
    const sorted = Object.entries(foodSym).map(([name, d]) => ({name, avg: d.total / d.count, count: d.count})).filter(x => x.count >= 2).sort((a,b) => b.avg - a.avg).slice(0, 10);
    document.getElementById('correlationList').innerHTML = sorted.length === 0
      ? '<div class="empty-state"><p>Au moins 2 expositions par aliment nécessaires</p></div>'
      : sorted.map(item => {
        const sc = getScoreColor(item.avg);
        return `<div class="corr-item"><span class="corr-food">${escapeHtml(item.name)}</span><span class="corr-count">${item.count}x</span><span class="corr-score" style="color:${sc.color};">moy. ${item.avg.toFixed(1)}</span></div>`;
      }).join('');
  }

  function renderSymptomCategories() {
    if (entries.length === 0) { document.getElementById('symptomCatChart').innerHTML = '<div class="empty-state"><p>Pas encore de données</p></div>'; return; }
    const catTotals = {};
    SYMPTOM_CATEGORIES.forEach(s => catTotals[s.id] = 0);
    entries.forEach(e => SYMPTOM_CATEGORIES.forEach(s => { catTotals[s.id] += e.symptoms[s.id] || 0; }));
    const max = Math.max(...Object.values(catTotals), 1);
    const colors = {digestif:'#34d399',peau:'#f87171',neuro:'#a78bfa',respOrl:'#38bdf8',cardio:'#fb923c',autres:'#94a3b8'};
    document.getElementById('symptomCatChart').innerHTML = SYMPTOM_CATEGORIES.map(s =>
      `<div class="bar-row"><span class="bar-label">${s.emoji} ${s.label}</span><div class="bar-track"><div class="bar-fill" style="width:${(catTotals[s.id]/max)*100}%;background:${colors[s.id]};"></div></div><span class="bar-val">${catTotals[s.id]}</span></div>`
    ).join('');
  }

  return { render };
})();

// ═══ SETTINGS MODULE ═══
HC.settings = {
  exportData() {
    const data = { version: 3, exportDate: new Date().toISOString(), entries, customFoods, toleranceData, customRecipes };
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `histachef_export_${new Date().toISOString().split('T')[0]}.json`; a.click();
    URL.revokeObjectURL(url);
    showToast("Export téléchargé !");
  },

  importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.entries && Array.isArray(data.entries)) {
          const imported = normalizeLoadedEntries(data.entries);
          entries = [...entries, ...imported];
          const seen = new Set();
          entries = entries.filter(e => { const key = String(e.id); if (seen.has(key)) return false; seen.add(key); return true; });

          if (Array.isArray(data.customFoods)) {
            const known = new Set(customFoods.map(f => normalizeFoodName(f.name)));
            data.customFoods.forEach(item => {
              const food = toFoodRecord(item);
              if (!food) return;
              const key = normalizeFoodName(food.name);
              if (!key || known.has(key)) return;
              known.add(key); customFoods.push(food); FOOD_DB.push(food);
            });
            saveCustomFoods();
          }

          if (data.toleranceData && typeof data.toleranceData === 'object') {
            Object.assign(toleranceData, data.toleranceData);
            saveTolerance();
          }

          if (Array.isArray(data.customRecipes)) {
            const recipeIds = new Set(customRecipes.map(r => r.id));
            data.customRecipes.forEach(r => { if (!recipeIds.has(r.id)) { customRecipes.push(r); recipeIds.add(r.id); } });
            saveCustomRecipes();
          }

          saveEntries();
          showToast(`${imported.length} entrées importées !`);
          HC.journal.renderToday();
        }
      } catch (err) { showToast("Erreur de format", "var(--red)"); }
    };
    reader.readAsText(file);
    event.target.value = '';
  },

  confirmClear() {
    if (!confirm('Effacer TOUTES les données ? Cette action est irréversible.')) return;
    if (!confirm('Vraiment sûr(e) ? Dernière chance...')) return;
    entries = [];
    customFoods = [];
    toleranceData = {};
    customRecipes = [];
    FOOD_DB.splice(0, FOOD_DB.length, ...FOOD_DB.filter(f => !f.isCustom));
    localStorage.removeItem('ht_custom_foods');
    localStorage.removeItem('ht_tolerance');
    localStorage.removeItem('ht_custom_recipes');
    saveEntries();
    HC.journal.renderToday();
    showToast("Données effacées", "var(--orange)");
  },

  // ── Sync / Foyer ────────────────────────────────────────
  renderSyncSection() {
    const sync = typeof HC_SYNC !== 'undefined' ? HC_SYNC : null;
    const configured = sync && sync.isConfigured();
    const code = sync ? sync.getCode() : '';
    const el = document.getElementById('syncSection');
    if (!el) return;

    if (!configured) {
      el.innerHTML = `
        <div class="settings-section">
          <h3>☁️ Synchronisation multi-navigateur</h3>
          <p style="color:var(--text2);font-size:13px;margin-bottom:12px">
            Partage tes données avec ta compagne ou accède depuis plusieurs appareils.<br>
            Nécessite un compte Supabase gratuit.
          </p>
          <div style="margin-bottom:8px">
            <label style="font-size:12px;color:var(--text2);display:block;margin-bottom:4px">URL Supabase</label>
            <input id="supaUrl" type="text" placeholder="https://xxxx.supabase.co"
              style="width:100%;padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:var(--bg3);color:var(--text);font-size:14px"
              value="${localStorage.getItem('hc_supa_url') || ''}">
          </div>
          <div style="margin-bottom:12px">
            <label style="font-size:12px;color:var(--text2);display:block;margin-bottom:4px">Clé anon Supabase</label>
            <input id="supaKey" type="text" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
              style="width:100%;padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:var(--bg3);color:var(--text);font-size:14px"
              value="${localStorage.getItem('hc_supa_key') || ''}">
          </div>
          <button class="setting-btn" onclick="HC.settings.saveSupaConfig()" style="background:var(--accent);color:white;border:none;border-radius:10px;padding:12px;width:100%;font-size:15px;cursor:pointer">
            Connecter Supabase →
          </button>
        </div>`;
    } else if (!code) {
      el.innerHTML = `
        <div class="settings-section">
          <h3>☁️ Synchronisation</h3>
          <p style="color:var(--text2);font-size:13px;margin-bottom:12px">Supabase connecté ✅ — Crée ou rejoins un foyer pour partager tes données.</p>
          <button class="setting-btn" onclick="HC.settings.createHousehold()" style="background:var(--accent);color:white;border:none;border-radius:10px;padding:12px;width:100%;font-size:15px;cursor:pointer;margin-bottom:8px">
            🏠 Créer un nouveau foyer
          </button>
          <div style="display:flex;gap:8px;align-items:center">
            <input id="joinCode" type="text" placeholder="Code foyer de ta compagne..."
              style="flex:1;padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:var(--bg3);color:var(--text);font-size:14px">
            <button onclick="HC.settings.joinHousehold()" style="background:var(--bg3);color:var(--accent);border:1px solid var(--accent);border-radius:10px;padding:10px 16px;cursor:pointer;white-space:nowrap">
              Rejoindre →
            </button>
          </div>
        </div>`;
    } else {
      el.innerHTML = `
        <div class="settings-section">
          <h3>☁️ Synchronisation <span id="syncDot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#34d399;margin-left:6px;vertical-align:middle"></span></h3>
          <p style="color:var(--text2);font-size:13px;margin-bottom:8px">Foyer actif — données synchronisées automatiquement.</p>
          <div style="background:var(--bg3);border-radius:10px;padding:12px;margin-bottom:12px">
            <div style="font-size:11px;color:var(--text3);margin-bottom:4px">TON CODE FOYER</div>
            <div style="font-family:monospace;font-size:13px;color:var(--accent2);word-break:break-all">${code}</div>
            <button onclick="navigator.clipboard.writeText('${code}').then(()=>showToast('Code copié !'))"
              style="margin-top:8px;background:var(--accent);color:white;border:none;border-radius:8px;padding:6px 14px;font-size:12px;cursor:pointer">
              📋 Copier le code
            </button>
          </div>
          <button class="setting-btn" onclick="HC.settings.forcePull()" style="margin-bottom:6px">
            🔄 Forcer la synchronisation <span class="arrow">→</span>
          </button>
          <button class="setting-btn" onclick="HC.settings.leaveHousehold()" style="color:var(--red)">
            Quitter ce foyer <span class="arrow">→</span>
          </button>
        </div>`;
      // Affiche le dot de sync
      if (sync) HC_SYNC.setSyncStatus('ok');
    }
  },

  async saveSupaConfig() {
    const url = document.getElementById('supaUrl')?.value?.trim();
    const key = document.getElementById('supaKey')?.value?.trim();
    if (!url || !key) { showToast('Remplis les deux champs', 'var(--orange)'); return; }
    HC_SYNC.configure(url, key);
    showToast('Supabase configuré !');
    this.renderSyncSection();
  },

  async createHousehold() {
    showToast('Création du foyer...', 'var(--accent)');
    try {
      const code = await HC_SYNC.createHousehold();
      showToast('Foyer créé ! Partage le code.');
      this.renderSyncSection();
    } catch(e) { showToast('Erreur: ' + e.message, 'var(--red)'); }
  },

  async joinHousehold() {
    const code = document.getElementById('joinCode')?.value?.trim();
    if (!code) { showToast('Entre un code foyer', 'var(--orange)'); return; }
    showToast('Connexion au foyer...', 'var(--accent)');
    try {
      await HC_SYNC.joinHousehold(code);
      loadState();
      HC.recipes.render();
      HC.journal.renderToday();
      showToast('Foyer rejoint ! Données synchronisées.');
      this.renderSyncSection();
    } catch(e) { showToast('Erreur: ' + e.message, 'var(--red)'); }
  },

  async forcePull() {
    showToast('Synchronisation...', 'var(--accent)');
    const updated = await HC_SYNC.pull();
    if (updated) {
      loadState();
      HC.recipes.render();
      HC.journal.renderToday();
      showToast('Données mises à jour !');
      this.renderSyncSection();
    } else {
      showToast('Déjà à jour ✓');
    }
  },

  leaveHousehold() {
    if (!confirm('Quitter ce foyer ? Tes données locales restent intactes.')) return;
    HC_SYNC.leaveHousehold();
    showToast('Foyer quitté', 'var(--orange)');
    this.renderSyncSection();
  }
};

// ═══ INIT ═══
function initApp() {
  loadState();

  // Date display
  const d = new Date();
  document.getElementById('dateDisplay').textContent = d.toLocaleDateString('fr-FR', {weekday:'long', day:'numeric', month:'long'});

  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => {
    goToPage(btn.dataset.page);
    if (btn.dataset.page === 'settings') HC.settings.renderSyncSection();
  }));

  // Init journal
  HC.journal.init();

  // Init sync (async, ne bloque pas le rendu)
  if (typeof HC_SYNC !== 'undefined') {
    HC_SYNC.init().then(updated => {
      if (updated) {
        loadState();
        HC.recipes.render();
        HC.journal.renderToday();
      }
    });
  }

  // Render initial page
  HC.recipes.render();
}

initApp();
