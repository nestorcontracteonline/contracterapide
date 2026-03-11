import Link from "next/link";
import { CONTRACT_TYPES } from "@/lib/contracts";

export default function AgentiPage() {
  const agentContracts = CONTRACT_TYPES.filter(c => c.category === 'agenti');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold text-gray-900">ContracteRapide</span>
            <span className="text-xl font-bold text-blue-600">.ro</span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            Toate contractele
          </Link>
        </div>
      </header>

      {/* Hero specific for agents */}
      <section className="px-4 py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            Pentru agenti imobiliari si de asigurari
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Inchide contractul<br />pe loc, de pe telefon
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Clientul e in fata ta. Nu pierde momentul. 
            Genereaza contractul in 2 minute, semneaza pe loc.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contracte-agenti" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Genereaza contract acum
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">15 RON per contract. Nicio instalare.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl mb-2">2 min</div>
            <h3 className="font-semibold text-gray-900 mb-1">Contract gata</h3>
            <p className="text-sm text-gray-500">De la zero la PDF semnat in sub 3 minute</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">Mobil</div>
            <h3 className="font-semibold text-gray-900 mb-1">Functioneaza pe telefon</h3>
            <p className="text-sm text-gray-500">Optimizat pentru iPhone si Android, oriunde esti</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">Legal</div>
            <h3 className="font-semibold text-gray-900 mb-1">Valabil legal</h3>
            <p className="text-sm text-gray-500">Conform legislatiei romane. Nu e template de pe Google.</p>
          </div>
        </div>
      </section>

      {/* Agent contracts */}
      <section id="contracte-agenti" className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contracte pentru agenti</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agentContracts.map(contract => (
              <Link key={contract.id} href={`/genereaza/${contract.id}`} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-lg">{contract.name}</h3>
                  <span className="text-blue-600 font-bold whitespace-nowrap ml-2">{contract.price} RON</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{contract.description}</p>
                <span className="text-sm text-blue-600 font-medium group-hover:underline">Genereaza acum</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario */}
      <section className="px-4 py-16 bg-blue-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Scenariul de zi cu zi</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-medium text-gray-900">Esti la client</p>
                <p className="text-sm text-gray-500">A vazut proprietatea, e convins. Momentul e acum.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-medium text-gray-900">Deschizi ContracteRapide pe telefon</p>
                <p className="text-sm text-gray-500">Selectezi tipul de contract, completezi datele clientului</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-medium text-gray-900">Contract generat in 2 minute</p>
                <p className="text-sm text-gray-500">Platesti 15 RON, primesti PDF-ul, trimiteti ambii pe email</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <div>
                <p className="font-medium text-gray-900">Deal inchis. Client fericit.</p>
                <p className="text-sm text-gray-500">Fara sa astepti sa ajungi la birou, fara sa pierzi clientul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2026 ContracteRapide.ro
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-600">Toate contractele</Link>
            <a href="mailto:contact@contracterapide.ro" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
