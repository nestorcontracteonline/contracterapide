import Link from "next/link";
import { CONTRACT_TYPES } from "@/lib/contracts";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  const freelancerContracts = CONTRACT_TYPES.filter(c => c.category === 'freelancer');
  const agentContracts = CONTRACT_TYPES.filter(c => c.category === 'agenti');
  const generalContracts = CONTRACT_TYPES.filter(c => c.category === 'general');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-gray-900">ContracteRapide</span>
            <span className="text-xl font-bold text-blue-600">.ro</span>
          </div>
          <nav className="flex gap-4 text-sm text-gray-600 items-center">
            <a href="#contracte" className="hidden md:block hover:text-gray-900">Contracte</a>
            <a href="#preturi" className="hidden md:block hover:text-gray-900">Prețuri</a>
            <Link href="/agenti" className="hidden md:block hover:text-gray-900">Agenti</Link>
            <Link href="/blog" className="hidden md:block hover:text-gray-900">Blog</Link>
            <Link href="/faq" className="hidden md:block hover:text-gray-900">FAQ</Link>
            <Link href="/autentificare" className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Contul meu
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-16 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Conform legislatiei romane 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Protejează-te juridic<br />ca PFA sau freelancer
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Contract de prestări servicii, NDA sau colaborare — completezi un formular,
            primești documentul legal gata de semnat. <strong>5 minute, 15 RON.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contracte" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Alege contractul tau
            </a>
            <Link href="/agenti" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">
              Sunt agent imobiliar / asigurari
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Fara abonament. Platesti doar ce folosesti.
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <section className="px-4 py-8 border-y border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Conforme cu legislatia romana 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Semnatura electronica OTP</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Descarcare PDF instant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Fara cont obligatoriu</span>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">De ce ai nevoie de un contract?</h2>
          <p className="text-gray-500 text-center mb-10">Cele mai comune situatii in care un PFA sau freelancer ramane fara protectie juridica</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <div className="text-2xl mb-3">🚫</div>
              <h3 className="font-semibold text-gray-900 mb-2">Clientul nu plateste</h3>
              <p className="text-sm text-gray-600">Fara contract semnat, nu ai cum sa recuperezi banii pe cale legala. Contractul e singurul document care te protejeaza.</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Scopul proiectului se extinde</h3>
              <p className="text-sm text-gray-600">Clientul adauga cerinte noi fara sa plateasca extra. Contractul cu scope clar definit elimina aceasta problema.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
              <div className="text-2xl mb-3">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Dispute despre confidentialitate</h3>
              <p className="text-sm text-gray-600">Clientul sustine ca ai divulgat informatii sau ca detii drepturile asupra proiectului. Un NDA te protejeaza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contracts */}
      <section id="contracte" className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pentru PFA-uri si freelanceri</h2>
            <p className="text-gray-500 mb-6">IT, design, consultanta, marketing</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {freelancerContracts.map(contract => (
                <Link key={contract.id} href={`/genereaza/${contract.id}`} className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{contract.name}</h3>
                    <span className="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">{contract.price} RON</span>
                  </div>
                  <p className="text-sm text-gray-500">{contract.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pentru agenti</h2>
            <p className="text-gray-500 mb-6">Imobiliari, asigurari, vanzari</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agentContracts.map(contract => (
                <Link key={contract.id} href={`/genereaza/${contract.id}`} className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{contract.name}</h3>
                    <span className="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">{contract.price} RON</span>
                  </div>
                  <p className="text-sm text-gray-500">{contract.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Documente generale</h2>
            <p className="text-gray-500 mb-6">NDA, vanzare-cumparare, inchiriere</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {generalContracts.map(contract => (
                <Link key={contract.id} href={`/genereaza/${contract.id}`} className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{contract.name}</h3>
                    <span className="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">{contract.price} RON</span>
                  </div>
                  <p className="text-sm text-gray-500">{contract.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Cum functioneaza</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Alegi contractul</h3>
              <p className="text-sm text-gray-500">Selectezi tipul de document de care ai nevoie din lista de mai sus</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Completezi datele</h3>
              <p className="text-sm text-gray-500">Formularul simplu cu datele partilor si detaliile contractului</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Primesti PDF-ul</h3>
              <p className="text-sm text-gray-500">Platesti 15 RON si descarci imediat contractul gata de semnat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof — Testimoniale */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ce spun freelancerii care ne-au folosit</h2>
            <p className="text-gray-500">Peste 500 de PFA-uri și liber-profesioniști și-au protejat proiectele cu ContracteRapide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
              <div className="flex gap-1 text-yellow-400 text-sm">
                {"★★★★★"}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                &ldquo;Am folosit ContracteRapide pentru primul meu client enterprise. Contractul a arătat profesional, clientul l-a semnat fără obiecții. 15 RON bine cheltuiți.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm flex-shrink-0">
                  AM
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Alexandru M.</div>
                  <div className="text-gray-500 text-xs">Developer React, PFA Cluj</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
              <div className="flex gap-1 text-yellow-400 text-sm">
                {"★★★★★"}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                &ldquo;Eram obișnuită să lucrez fără contract și am pierdut 3.000 RON de la un client. De când folosesc ContracteRapide, nu am mai avut nicio problemă. Merită de 10 ori prețul.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-sm flex-shrink-0">
                  IC
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Ioana C.</div>
                  <div className="text-gray-500 text-xs">Designer UX/UI, freelancer Iași</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
              <div className="flex gap-1 text-yellow-400 text-sm">
                {"★★★★★"}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                &ldquo;Ca agent imobiliar am nevoie de contracte rapide și corecte. Am luat pachetul de 10 — raport calitate-preț excelent față de ce cereau avocații în cabinet.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center text-sm flex-shrink-0">
                  RP
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Radu P.</div>
                  <div className="text-gray-500 text-xs">Agent imobiliar, București</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">ContracteRapide vs. Avocat tradițional</h2>
          <p className="text-gray-500 text-center mb-10">Pentru contracte standard de prestări servicii, colaborare sau NDA — nu ai nevoie de avocat.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-500 w-1/3"></th>
                  <th className="py-3 px-4 text-center">
                    <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-lg font-semibold text-sm">ContracteRapide</div>
                  </th>
                  <th className="py-3 px-4 text-center text-gray-500 font-semibold">Avocat tradițional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Preț per contract', '15 RON', '300–800 RON'],
                  ['Timp de obținere', '5 minute', '1–5 zile lucrătoare'],
                  ['Disponibil', '24/7, oricând', 'Program de lucru'],
                  ['Conform legislației RO', '✓ Da', '✓ Da'],
                  ['Editabil după livrare', '✓ .docx editabil', '✓ Da'],
                  ['Consultanță pentru speță complexă', '✗ Nu', '✓ Da'],
                  ['Reprezentare în instanță', '✗ Nu', '✓ Da'],
                ].map(([feature, cr, av], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="py-3 px-4 text-gray-700 font-medium">{feature}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={cr.startsWith('✓') ? 'text-green-600 font-semibold' : cr.startsWith('✗') ? 'text-gray-400' : 'text-blue-600 font-bold'}>{cr}</span>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-500">{av}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            💡 Recomandare: folosește ContracteRapide pentru contracte standard. Apelează la un avocat pentru situații complexe, litigii sau acte notariale.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="preturi" className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preturi simple</h2>
          <p className="text-gray-500 mb-12">Platesti doar ce folosesti. Fara surprize.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="border border-gray-200 rounded-xl p-6 text-left">
              <h3 className="font-bold text-gray-900 mb-1">Pay-per-use</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">15 RON</div>
              <p className="text-sm text-gray-500 mb-4">per contract</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Contract complet</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Descarcare PDF</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Fara cont necesar</li>
              </ul>
            </div>
            <div className="border-2 border-blue-600 rounded-xl p-6 text-left relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Popular</div>
              <h3 className="font-bold text-gray-900 mb-1">Pachet 10</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">99 RON</div>
              <p className="text-sm text-gray-500 mb-4">10 contracte = 9.9 RON/buc</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 10 contracte orice tip</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Valabile 12 luni</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Economisesti 51 RON</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="px-4 py-16 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-3xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Primește un model de contract gratuit
          </h2>
          <p className="text-blue-100 mb-8 text-sm">
            Lasă email-ul și îți trimitem un model de Contract de Prestări Servicii — fără nicio plată.
            Fără spam. Dezabonare oricând.
          </p>
          <div className="relative">
            <NewsletterForm />
          </div>
          <p className="text-blue-200 text-xs mt-10">
            Peste 500 de PFA-uri și freelanceri deja abonați
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2026 ContracteRapide.ro. Toate drepturile rezervate.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/contracte" className="hover:text-gray-600">Toate contractele</a>
            <a href="/blog" className="hover:text-gray-600">Blog</a>
            <a href="/faq" className="hover:text-gray-600">FAQ</a>
            <a href="/termeni" className="hover:text-gray-600">Termeni</a>
            <a href="/confidentialitate" className="hover:text-gray-600">Confidentialitate</a>
            <a href="mailto:contact@contracterapide.ro" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
