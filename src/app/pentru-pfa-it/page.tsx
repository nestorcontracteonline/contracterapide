import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract PFA IT Freelancer Romania 2026 | ContracteRapide.ro",
  description:
    "Contract de prestări servicii pentru PFA IT și freelanceri din Romania. Conform legislatiei 2026. Completezi formularul, primești PDF gata de semnat în 5 minute. 15 RON.",
  keywords: [
    "contract pfa it freelancer",
    "contract prestari servicii pfa",
    "contract freelancer it romania",
    "contract pfa 2026",
    "contract programator freelancer",
  ],
  openGraph: {
    title: "Contract PFA IT Freelancer — ContracteRapide.ro",
    description:
      "Generează un contract de prestări servicii pentru PFA IT în 5 minute. Legal, complet, descarcabil instant.",
    url: "https://contracterapide.ro/pentru-pfa-it",
  },
};

const FAQ = [
  {
    q: "Are nevoie un PFA IT de contract cu fiecare client?",
    a: "Da. Contractul scris este singurul document care îți garantează plata, definește scopul lucrării și te protejează în caz de litigiu. Fără contract, nu ai nicio pârghie legală dacă clientul refuză să plătească.",
  },
  {
    q: "Contractul generat este valid legal în România?",
    a: "Da. Toate templatele sunt redactate conform Codului Civil român și legislației în vigoare în 2026. Sunt utilizabile de către orice PFA sau SRL înregistrat în România.",
  },
  {
    q: "Ce se întâmplă dacă am nevoie de modificări la contract?",
    a: "Poți adăuga clauze suplimentare manual în PDF sau poți contacta un avocat pentru personalizare avansată. Contractul standard acoperă 95% din situațiile comune ale unui freelancer IT.",
  },
  {
    q: "Pot folosi contractul și pentru clienți din afara României?",
    a: "Da, cu mențiunea că pentru clienți din UE este recomandat să specifici legea aplicabilă și jurisdicția (implicit — instanțele din România). Contractul include această clauză.",
  },
  {
    q: "Cât durează să generez contractul?",
    a: "Aproximativ 5 minute. Completezi formularul cu datele părților și detaliile proiectului, plătești 15 RON și descarci PDF-ul imediat.",
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
    desc: "Template redactat de juriști, actualizat cu modificările legislative recente.",
  },
  {
    icon: "🔒",
    title: "Protecție completă",
    desc: "Clauze privind plata, livrabile, proprietate intelectuală, confidențialitate.",
  },
  {
    icon: "📄",
    title: "PDF descarcabil instant",
    desc: "Primești documentul pe email și îl poți descărca direct din browser.",
  },
];

const USE_CASES = [
  { icon: "💻", title: "Dezvoltare software & web", desc: "Proiecte de programare, aplicații web sau mobile, API-uri." },
  { icon: "🎨", title: "Design UI/UX & grafică", desc: "Logo, identitate vizuală, mockup-uri, ilustrații digitale." },
  { icon: "📊", title: "Consultanță IT & DevOps", desc: "Audit tehnic, cloud, infrastructură, securitate cibernetică." },
  { icon: "📣", title: "Marketing digital & SEO", desc: "Campanii PPC, SEO, social media management, content." },
  { icon: "🤖", title: "AI & automatizări", desc: "Chatboți, scripturi, integrări API, agenți AI." },
  { icon: "📝", title: "Copywriting & content", desc: "Articole, texte publicitare, newslettere, scripturi video." },
];

export default function PentruPfaIt() {
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
            Contract PFA IT Freelancer — Romania 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Contract PFA IT<br />gata în 5 minute
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Ești freelancer IT sau PFA și ai nevoie de un contract profesional cu clientul tău?
            Generezi documentul legal complet online — <strong>15 RON, fără avocat, fără așteptare.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/genereaza/contract-prestari-servicii"
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
            <span>Conform legislației române 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Valabil pentru orice PFA / SRL</span>
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
            Pentru ce tip de proiecte IT folosești contractul?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Contractul de prestări servicii PFA este potrivit pentru orice activitate de freelancing digital
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
            De ce ai nevoie de contract ca freelancer IT?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Cele mai frecvente situații în care un PFA IT rămâne fără protecție juridică
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <div className="text-2xl mb-3">💸</div>
              <h3 className="font-semibold text-gray-900 mb-2">Clientul nu plătește</h3>
              <p className="text-sm text-gray-600">
                Fără contract semnat, nu ai cum să recuperezi banii pe cale legală. Și nici să dovedești că ai prestat serviciul.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Scope creep nelimitat</h3>
              <p className="text-sm text-gray-600">
                Clientul adaugă cerințe noi fără să plătească extra. Un contract cu livrabile clare pune capăt acestei dinamici.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
              <div className="text-2xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Disputele de proprietate</h3>
              <p className="text-sm text-gray-600">
                Cine deține codul sau designul livrat? Contractul clarifică transferul drepturilor de autor și al proprietății intelectuale.
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
            Ce conține contractul PFA IT?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Template complet, redactat de juriști — nu un model generic de pe internet
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Identificarea completă a părților (PFA + client)",
              "Obiectul contractului și livrabilele specifice",
              "Termene de livrare și etape de plată",
              "Modalitatea și termenul de plată",
              "Clauza de proprietate intelectuală / transfer drepturi",
              "Confidențialitate (NDA integrat)",
              "Răspundere și garanții",
              "Clauze de reziliere și notificare",
              "Forța majoră",
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
              href="/genereaza/contract-prestari-servicii"
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
              <p className="text-sm text-gray-500">Date PFA, date client, obiect contract, tarif, termene. ~5 minute.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Plătești 15 RON</h3>
              <p className="text-sm text-gray-500">Card bancar securizat prin Stripe. Fără abonament, fără surprize.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Descarci PDF-ul</h3>
              <p className="text-sm text-gray-500">Contractul tău personalizat, gata de semnat și trimis clientului.</p>
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
          <h2 className="text-3xl font-bold mb-4">Protejează-ți munca acum</h2>
          <p className="text-blue-100 mb-8">
            Nu lăsa un proiect neprotejat din lipsă de timp sau bani. 15 RON și 5 minute — atât costă liniștea juridică.
          </p>
          <Link
            href="/genereaza/contract-prestari-servicii"
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
