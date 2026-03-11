-- leads table pentru newsletter capture
CREATE TABLE IF NOT EXISTS leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  source text DEFAULT 'newsletter',
  created_at timestamptz DEFAULT now()
);

-- RLS: only service role can read, anyone can insert
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert for all" ON leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow service role full access" ON leads
  USING (auth.role() = 'service_role');
