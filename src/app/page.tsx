import Link from "next/link";
import { CONTRACT_TYPES } from "@/lib/contracts";

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
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#contracte" className="hover:text-gray-900">Contracte</a>
            <a href="#preturi" className="hover:text-gray-900">Prețuri</a>
            <Link href="/agenti" className="hover:text-gray-900">Pentru agenți</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-16 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Contracte legale<br />în 5 minute
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Completezi un formular, primești contractul gata de semnat. 
            Perfect pentru PFA-uri, freelanceri și agenți.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contracte" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Alege contractul tău
            </a>
            <Link href="/agenti" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">
              Sunt agent imobiliar/asigurări
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            15 RON per contract. Fara abonament.
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

      {/* Contracts */}
      <section id="contracte" className="px-4 py-16">
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

      {/* Footer */}
      <footer className="border-t border-gray-100 px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2026 ContracteRapide.ro. Toate drepturile rezervate.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/termeni" className="hover:text-gray-600">Termeni</a>
            <a href="/confidentialitate" className="hover:text-gray-600">Confidentialitate</a>
            <a href="mailto:contact@contracterapide.ro" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
