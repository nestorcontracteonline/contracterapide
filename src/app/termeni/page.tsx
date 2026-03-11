import Link from 'next/link'

export default function TermeniPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Termeni și Condiții</h1>
        <p className="text-gray-500 text-sm mb-8">Ultima actualizare: {today}</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
          
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Despre serviciu</h2>
            <p>ContracteRapide.ro este o platformă digitală care facilitează generarea de modele de documente juridice (contracte, acorduri, convenții) pentru uzul persoanelor fizice autorizate, microîntreprinderilor și profesioniștilor din România.</p>
            <p className="mt-2"><strong>Important:</strong> Documentele generate de ContracteRapide.ro sunt modele orientative. Acestea nu constituie consultanță juridică și nu înlocuiesc serviciile unui avocat sau notar. Verificați întotdeauna documentele cu un specialist înainte de semnare în situații complexe.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Operator</h2>
            <p>Serviciul este operat de o persoană juridică română. Pentru orice solicitare: <a href="mailto:contact@contracterapide.ro" className="text-blue-600 hover:underline">contact@contracterapide.ro</a></p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Utilizarea serviciului</h2>
            <p>Prin utilizarea platformei, acceptați că:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Furnizați date corecte și complete în formularele de generare</li>
              <li>Documentele generate sunt pentru uz propriu, nu pentru redistribuire comercială</li>
              <li>Nu utilizați platforma pentru generarea de documente false sau în scopuri ilegale</li>
              <li>Vă asumați responsabilitatea verificării conformității documentelor cu situația specifică</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Tarife și plăți</h2>
            <p>Tarifele afișate includ TVA, dacă este cazul. Plata se efectuează prin card bancar via Stripe (procesator de plăți certificat PCI-DSS). ContracteRapide.ro nu stochează datele cardului dumneavoastră.</p>
            <p className="mt-2">Documentul generat vă este livrat imediat după confirmarea plății, pe adresa de email furnizată.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Drept de retragere</h2>
            <p>Conform OUG 34/2014, dreptul de retragere de 14 zile nu se aplică serviciilor digitale prestate integral înainte de expirarea termenului, cu acordul dumneavoastră explicit. Prin inițierea generării documentului, vă exprimați acordul pentru prestarea imediată a serviciului și renunțați la dreptul de retragere.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Limitarea răspunderii</h2>
            <p>ContracteRapide.ro nu răspunde pentru:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Consecințele utilizării documentelor generate fără verificare juridică</li>
              <li>Erori rezultate din date incorecte furnizate de utilizator</li>
              <li>Modificări legislative ulterioare generării documentului</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Proprietate intelectuală</h2>
            <p>Structura platformei, designul și codul sursă sunt proprietatea operatorului. Modelele de contracte generate pot fi utilizate liber de utilizatori în scopuri proprii.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Legea aplicabilă</h2>
            <p>Prezentii termeni sunt guvernați de legea română. Orice litigiu se soluționează de instanțele judecătorești competente din România.</p>
          </section>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link href="/" className="text-sm text-blue-600 hover:underline">Inapoi la pagina principala</Link>
        </div>
      </div>
    </div>
  )
}
