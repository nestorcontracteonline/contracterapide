import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politica Cookies — ContracteRapide.ro',
  description: 'Informații despre cookie-urile folosite pe ContracteRapide.ro',
  robots: 'noindex',
}

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
            ContracteRapide<span className="text-blue-600">.ro</span>
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Politica privind Cookie-urile</h1>
        
        <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed text-gray-700">
          <p><strong>Ultima actualizare:</strong> 12 martie 2026</p>

          <h2 className="text-lg font-semibold text-gray-900">1. Ce sunt cookie-urile?</h2>
          <p>Cookie-urile sunt fișiere text mici stocate pe dispozitivul dumneavoastră când vizitați un site web. Ele permit site-ului să vă recunoască și să rețină preferințele dumneavoastră.</p>

          <h2 className="text-lg font-semibold text-gray-900">2. Ce cookie-uri folosim?</h2>
          
          <h3 className="font-medium text-gray-900">2.1 Cookie-uri strict necesare</h3>
          <p>Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>cookie-consent</strong> — reține preferințele dvs. privind cookie-urile (localStorage)</li>
            <li><strong>next-auth.session-token</strong> — sesiunea de autentificare (dacă aveți cont)</li>
            <li><strong>contract-draft-[id]</strong> — salvează temporar datele formularului (localStorage, nu se trimite la server)</li>
          </ul>

          <h3 className="font-medium text-gray-900">2.2 Cookie-uri analitice (opționale)</h3>
          <p>Folosite pentru a înțelege cum navigați pe site, cu scopul de a îmbunătăți experiența:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Google Analytics 4</strong> (_ga, _ga_*) — statistici anonime de vizitare</li>
          </ul>
          <p>Aceste cookie-uri sunt activate <strong>doar cu consimțământul dvs. explicit</strong>.</p>

          <h3 className="font-medium text-gray-900">2.3 Cookie-uri de marketing (opționale)</h3>
          <p>Momentan nu folosim cookie-uri de marketing/publicitate.</p>

          <h2 className="text-lg font-semibold text-gray-900">3. Cum vă gestionați preferințele?</h2>
          <p>Puteți modifica oricând preferințele privind cookie-urile prin:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bannerul de cookies (apare la prima vizită)</li>
            <li>Ștergând datele site-ului din setările browserului</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900">4. Temeiul legal</h2>
          <p>Prelucrarea datelor prin cookie-uri analitice se realizează pe baza consimțământului dvs. (art. 6(1)(a) RGPD). Cookie-urile necesare sunt procesate în baza interesului legitim (art. 6(1)(f) RGPD).</p>

          <h2 className="text-lg font-semibold text-gray-900">5. Contact</h2>
          <p>Pentru orice întrebări: <a href="mailto:contact@contracterapide.ro" className="text-blue-600">contact@contracterapide.ro</a></p>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-blue-600 hover:underline text-sm">← Înapoi la site</Link>
        </div>
      </main>
    </div>
  )
}
