-- ═══════════════════════════════════════════════════════════
-- HistaChef — Supabase Setup
-- Exécute ce script dans l'éditeur SQL de Supabase
-- ═══════════════════════════════════════════════════════════

-- Table principale : une ligne par foyer
CREATE TABLE IF NOT EXISTS hc_sync (
  household_id  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entries       jsonb NOT NULL DEFAULT '[]',
  custom_foods  jsonb NOT NULL DEFAULT '[]',
  tolerance_data jsonb NOT NULL DEFAULT '{}',
  custom_recipes jsonb NOT NULL DEFAULT '[]',
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

-- Activer Row Level Security (RLS)
ALTER TABLE hc_sync ENABLE ROW LEVEL SECURITY;

-- Politique : accès libre (le household_id UUID est le "mot de passe")
CREATE POLICY "Open access by household_id" ON hc_sync
  FOR ALL USING (true) WITH CHECK (true);

-- Index sur updated_at pour les polls de sync
CREATE INDEX IF NOT EXISTS idx_hc_sync_updated ON hc_sync (updated_at DESC);

-- Trigger pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER hc_sync_updated_at
  BEFORE UPDATE ON hc_sync
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
