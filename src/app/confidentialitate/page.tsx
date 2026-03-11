import Link from 'next/link'

export default function ConfidentialitatePage() {
  const today = new Date().toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <span className="text-lg font-bold text-gray-900">ContracteRapide</span>
            <span className="text-lg font-bold text-blue-600">.ro</span>
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Politica de Confidențialitate</h1>
        <p className="text-gray-500 text-sm mb-8">Ultima actualizare: {today}</p>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Ce date colectăm</h2>
            <p>Colectăm doar datele necesare furnizării serviciului:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Email și nume</strong> — pentru livrarea documentului și crearea contului opțional</li>
              <li><strong>Date introduse în formulare</strong> — CUI, denumire firmă, adresă, valori contractuale (necesare generării documentului)</li>
              <li><strong>Date de plată</strong> — procesate exclusiv prin Stripe; nu stocăm datele cardului</li>
              <li><strong>Date tehnice</strong> — adresă IP, browser, pagini accesate (via Google Analytics, anonimat)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Cum folosim datele</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Generarea și livrarea documentului solicitat</li>
              <li>Comunicarea privind serviciul (confirmare, suport)</li>
              <li>Îmbunătățirea platformei (statistici agregate, anonime)</li>
              <li>Conformitatea cu obligațiile legale</li>
            </ul>
            <p className="mt-2">Nu vindem, nu închiriem și nu partajăm datele dumneavoastră cu terți în scopuri de marketing.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Temeiul legal (GDPR)</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Executarea contractului</strong> — pentru procesarea comenzii și livrarea documentului</li>
              <li><strong>Interesul legitim</strong> — pentru securitatea platformei și prevenirea fraudei</li>
              <li><strong>Consimțământul</strong> — pentru comunicări de marketing (dacă v-ați abonat)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Drepturile dumneavoastră</h2>
            <p>Conform GDPR, aveți dreptul la:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Acces</strong> — să solicitați o copie a datelor stocate</li>
              <li><strong>Rectificare</strong> — corectarea datelor incorecte</li>
              <li><strong>Ștergere</strong> — „dreptul de a fi uitat"</li>
              <li><strong>Portabilitate</strong> — export date în format structurat</li>
              <li><strong>Opoziție</strong> — împotriva prelucrării în baza interesului legitim</li>
            </ul>
            <p className="mt-2">Exercitați aceste drepturi la: <a href="mailto:contact@contracterapide.ro" className="text-blue-600 hover:underline">contact@contracterapide.ro</a></p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Retenția datelor</h2>
            <p>Datele contului și contractele generate sunt păstrate pe durata utilizării serviciului + 3 ani (obligații contabile). Contul poate fi șters oricând la cerere.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Furnizori terți</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Supabase</strong> (EU — Frankfurt) — stocare date, server</li>
              <li><strong>Vercel</strong> (EU) — hosting platformă</li>
              <li><strong>Stripe</strong> — procesare plăți (certificat PCI-DSS)</li>
              <li><strong>Resend</strong> — trimitere email-uri tranzacționale</li>
              <li><strong>Google Analytics</strong> — statistici anonime de utilizare</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Cookie-uri</h2>
            <p>Folosim cookie-uri strict necesare (sesiune, autentificare) și analitice (Google Analytics, cu anonimizare IP). Nu folosim cookie-uri de tracking pentru publicitate.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Contact</h2>
            <p>Responsabil cu protecția datelor: <a href="mailto:contact@contracterapide.ro" className="text-blue-600 hover:underline">contact@contracterapide.ro</a></p>
            <p className="mt-1">Aveți dreptul să depuneți plângere la <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ANSPDCP</a> (Autoritatea Națională de Supraveghere).</p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link href="/" className="text-sm text-blue-600 hover:underline">Inapoi la pagina principala</Link>
        </div>
      </div>
    </div>
  )
}
