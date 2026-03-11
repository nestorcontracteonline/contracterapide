import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Agent Imobiliar Romania 2026 | ContracteRapide.ro",
  description:
    "Contract de intermediere imobiliară pentru agenți și agenții imobiliare din Romania. Conform legislatiei 2026. Completezi formularul, primești PDF gata de semnat în 5 minute. 15 RON.",
  keywords: [
    "contract agent imobiliar",
    "contract intermediere imobiliara",
    "contract agentie imobiliara",
    "contract comision agentie",
    "contract mandat imobiliar romania",
    "contract agent imobiliar 2026",
  ],
  openGraph: {
    title: "Contract Agent Imobiliar — ContracteRapide.ro",
    description:
      "Generează un contract de intermediere imobiliară în 5 minute. Legal, complet, descarcabil instant.",
    url: "https://contracterapide.ro/pentru-agenti-imobiliari",
  },
};

const FAQ = [
  {
    q: "Are nevoie un agent imobiliar de contract scris cu clientul?",
    a: "Da, obligatoriu. Contractul de intermediere imobiliară este singurul document care îți garantează dreptul la comision și definește exclusivitatea, dacă există. Fără contract, clientul poate încheia tranzacția direct și tu rămâi fără comision.",
  },
  {
    q: "Contractul generat este valabil legal în România?",
    a: "Da. Template-ul este redactat conform Codului Civil român (art. 2096-2102 — contractul de intermediere) și legislației în vigoare în 2026. Este utilizabil de orice agent sau agenție imobiliară autorizată.",
  },
  {
    q: "Pot folosi contractul atât pentru vânzare, cât și pentru închiriere?",
    a: "Da. Contractul include câmpuri pentru tipul tranzacției (vânzare/închiriere/cumpărare), valoarea proprietății și comisionul agreat — funcționează pentru toate tipurile de tranzacții imobiliare.",
  },
  {
    q: "Ce se întâmplă dacă clientul vinde direct, fără mine?",
    a: "Contractul include clauza de exclusivitate și clauza de comision datorat chiar și la tranzacție directă în perioada de mandat. Aceste clauze sunt executorii în instanță dacă clientul a semnat.",
  },
  {
    q: "Cât durează să generez contractul?",
    a: "Aproximativ 5 minute. Completezi datele tale, datele clientului și detaliile proprietății, plătești 15 RON și descarci PDF-ul imediat.",
  },
];

const BENEFITS = [
  {
    icon: "⚡",
    title: "Gata în 5 minute",
    desc: "Formular simplu, fără jargon juridic. Completezi datele, platești, descarci.",
  },
  {
    icon: "⚖️",
    title: "Conform legislației 2026",
    desc: "Template redactat de juriști, conform Codului Civil — art. 2096-2102.",
  },
  {
    icon: "🔒",
    title: "Comisionul tău protejat",
    desc: "Clauze de exclusivitate, comision datorat, perioadă de mandat și reziliere.",
  },
  {
    icon: "📄",
    title: "PDF descarcabil instant",
    desc: "Primești documentul pe email și îl poți descărca direct din browser.",
  },
];

const USE_CASES = [
  { icon: "🏠", title: "Vânzare apartamente & case", desc: "Mandat de intermediere vânzare, cu sau fără exclusivitate." },
  { icon: "🏢", title: "Spații comerciale & birouri", desc: "Intermediere vânzare sau închiriere spații comerciale, birouri, depozite." },
  { icon: "🔑", title: "Închirieri rezidențiale", desc: "Contract pentru intermediere închiriere apartamente, garsoniere, case." },
  { icon: "🌍", title: "Terenuri & proprietăți rurale", desc: "Intermediere terenuri intravilane, extravilane, agricole." },
  { icon: "🏗️", title: "Proiecte new-build", desc: "Parteneriate cu dezvoltatori imobiliari pentru vânzare proiecte noi." },
  { icon: "📦", title: "Depozite & hale industriale", desc: "Intermediere spații logistice, industriale și hale de producție." },
];

export default function PentruAgentiImobiliari() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold text-gray-900">ContracteRapide</span>
            <span className="text-xl font-bold text-blue-600">.ro</span>
          </Link>
          <nav className="flex gap-4 text-sm text-gray-600 items-center">
            <Link href="/#contracte" className="hidden md:block hover:text-gray-900">Contracte</Link>
            <Link href="/blog" className="hidden md:block hover:text-gray-900">Blog</Link>
            <Link href="/faq" className="hidden md:block hover:text-gray-900">FAQ</Link>
            <Link
              href="/autentificare"
              className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Contul meu
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-16 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Contract Agent Imobiliar — Romania 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Contract agent imobiliar<br />gata în 5 minute
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Ești agent sau agenție imobiliară și ai nevoie de un contract de intermediere profesional?
            Generezi documentul legal complet online — <strong>15 RON, fără avocat, fără așteptare.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/genereaza/contract-intermediere-imobiliara"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              Generează contractul acum →
            </Link>
            <Link
              href="/#contracte"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors"
            >
              Vezi toate contractele
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Fără abonament. Plătești doar ce folosești. PDF descarcabil instant.
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <section className="px-4 py-8 border-y border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Conform Codului Civil român 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Valabil pentru agenți și agenții imobiliare</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>PDF descarcabil instant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Fără cont obligatoriu</span>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Pentru ce tip de tranzacții imobiliare folosești contractul?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Contractul de intermediere imobiliară acoperă toate tipurile de proprietăți și tranzacții
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="border border-gray-100 rounded-xl p-5 hover:border-blue-200 transition-colors">
                <div className="text-2xl mb-3">{uc.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{uc.title}</h3>
                <p className="text-sm text-gray-500">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            De ce ai nevoie de contract ca agent imobiliar?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Cele mai frecvente situații în care un agent imobiliar pierde comisionul fără un contract semnat
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <div className="text-2xl mb-3">💸</div>
              <h3 className="font-semibold text-gray-900 mb-2">Clientul tranzacționează direct</h3>
              <p className="text-sm text-gray-600">
                Ai prezentat proprietatea, ai negociat, ai adus cumpărătorul — dar clientul finalizează tranzacția fără tine. Fără contract, nu ai drept la comision.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <div className="text-2xl mb-3">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Dispute privind comisionul</h3>
              <p className="text-sm text-gray-600">
                Clientul contestă procentul sau baza de calcul a comisionului. Contractul semnat este singurul document care stabilește clar suma datorată.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Rezilierea unilaterală</h3>
              <p className="text-sm text-gray-600">
                Clientul renunță la serviciile tale după ce ai investit timp și resurse. Contractul clarifică condițiile de reziliere și eventualele daune-interese.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            De ce ContracteRapide.ro?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="text-3xl shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-4 py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Ce conține contractul de intermediere imobiliară?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Template complet, redactat de juriști — nu un model generic de pe internet
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Identificarea completă a părților (agent + client)",
              "Obiectul intermedierii (vânzare / închiriere / cumpărare)",
              "Descrierea proprietății vizate",
              "Durata mandatului și condițiile de reînnoire",
              "Clauza de exclusivitate (opțional)",
              "Comisionul: procent, bază de calcul, termen de plată",
              "Comision datorat la tranzacție directă",
              "Obligațiile agentului și ale clientului",
              "Condiții de reziliere și notificare",
              "Legea aplicabilă — instanțele din România",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/genereaza/contract-intermediere-imobiliara"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block text-lg"
            >
              Generează contractul — 15 RON →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Cum funcționează</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Completezi formularul</h3>
              <p className="text-sm text-gray-500">Date agent, date client, detalii proprietate, comision, durată mandat. ~5 minute.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Plătești 15 RON</h3>
              <p className="text-sm text-gray-500">Card bancar securizat prin Stripe. Fără abonament, fără surprize.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Descarci PDF-ul</h3>
              <p className="text-sm text-gray-500">Contractul tău personalizat, gata de semnat și înmânat clientului.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Întrebări frecvente</h2>
          <div className="space-y-6">
            {FAQ.map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-4 py-16 bg-blue-600 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Protejează-ți comisionul acum</h2>
          <p className="text-blue-100 mb-8">
            Nu lăsa o tranzacție neprotejată din lipsă de timp. 15 RON și 5 minute — atât costă siguranța că vei fi plătit.
          </p>
          <Link
            href="/genereaza/contract-intermediere-imobiliara"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-block text-lg"
          >
            Generează contractul tău →
          </Link>
          <p className="mt-4 text-blue-200 text-sm">Fără cont. Fără abonament. PDF instant.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">© 2026 ContracteRapide.ro. Toate drepturile rezervate.</div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/#contracte" className="hover:text-gray-600">Toate contractele</Link>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <Link href="/faq" className="hover:text-gray-600">FAQ</Link>
            <Link href="/termeni" className="hover:text-gray-600">Termeni</Link>
            <Link href="/confidentialitate" className="hover:text-gray-600">Confidențialitate</Link>
            <a href="mailto:contact@contracterapide.ro" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
