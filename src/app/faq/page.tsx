import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Întrebări Frecvente – ContracteRapide.ro',
  description: 'Răspunsuri la cele mai frecvente întrebări despre contractele pentru PFA și freelanceri. Cum funcționează, ce include prețul, cum e valabil legal.',
  alternates: { canonical: 'https://contracterapide.ro/faq' },
  openGraph: {
    title: 'FAQ – ContracteRapide.ro',
    description: 'Totul despre contractele pentru PFA și freelanceri.',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Contractele generate sunt valabile din punct de vedere legal?',
    a: 'Da. Toate contractele sunt redactate conform legislației române în vigoare (Codul Civil, Codul Fiscal) și sunt valabile fără semnătură electronică calificată pentru relațiile contractuale obișnuite. Poți semna olograf (pe hârtie) sau cu o soluție de semnătură electronică.'
  },
  {
    q: 'De ce am nevoie de contract ca PFA sau freelancer?',
    a: 'Un contract te protejează în 3 situații critice: clientul nu plătește (dovadă la executare silită), clientul pretinde că ai livrat altceva decât ce s-a convenit, și în cazul unui control fiscal (contractul dovedește natura colaborării).'
  },
  {
    q: 'Cât durează să generez un contract?',
    a: 'Aproximativ 5 minute. Completezi datele tale, datele clientului și specificul serviciilor. Contractul se generează instant și îl poți descărca imediat după plată.'
  },
  {
    q: 'Ce primesc după plată?',
    a: 'Primești contractul complet în format Word (.docx) și PDF, pe email. Contractul include toate clauzele standard plus datele completate de tine.'
  },
  {
    q: 'Pot modifica contractul după ce îl primesc?',
    a: 'Da, formatul Word poate fi editat oricând. Recomandăm să nu modifici clauzele de bază fără consultarea unui jurist, dar poți adăuga specificații suplimentare.'
  },
  {
    q: 'Ce se întâmplă dacă am completat greșit datele?',
    a: 'Scrie-ne la contact@contracterapide.ro cu datele corecte în maxim 24h și îți regenerăm contractul gratuit.'
  },
  {
    q: 'Funcționează și pentru SRL-uri, nu doar PFA?',
    a: 'Da. Contractele sunt valabile atât pentru PFA, II (Întreprindere Individuală), cât și pentru SRL-uri. Câmpurile permit completarea oricărui tip de entitate juridică.'
  },
  {
    q: 'Este sigur să plătesc online?',
    a: 'Da. Plata se procesează prin Stripe, cel mai sigur procesator de plăți din lume (folosit de Amazon, Google, Booking.com). Datele cardului nu ajung niciodată pe serverele noastre.'
  },
  {
    q: 'Există abonament lunar sau plătesc o singură dată?',
    a: 'Plătești o singură dată per contract, 15 RON. Nu există abonament, nu există taxe ascunse. Generezi când ai nevoie.'
  },
  {
    q: 'Pot folosi același contract pentru mai mulți clienți?',
    a: 'Fiecare contract generat este personalizat cu datele unui client specific. Pentru un client nou, generezi un contract nou (15 RON). Este mai ieftin decât orice avocat și mult mai rapid.'
  },
  {
    q: 'Am nevoie de semnătură electronică?',
    a: 'Nu obligatoriu. Poți tipări contractul și semna olograf (cu stiloul) — este perfect valid legal. Dacă preferi să rămâi 100% digital, poți folosi servicii gratuite ca DocuSign sau Sign.plus.'
  },
  {
    q: 'Ce tipuri de contracte sunt disponibile?',
    a: 'Avem 16 tipuri: prestări servicii, colaborare, agent imobiliar, agent asigurări, acord confidențialitate (NDA), vânzare-cumpărare, închiriere, consultanță, GDPR, telemuncă, antecontract vânzare, cesiune drepturi autor, mandat, subcontractare, parteneriat și servicii IT.'
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            ContracteRapide<span className="text-blue-600">.ro</span>
          </Link>
          <Link href="/" className="text-sm text-blue-600 hover:underline">← Înapoi la contracte</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Întrebări Frecvente</h1>
        <p className="text-gray-500 mb-10 text-lg">Tot ce trebuie să știi înainte să generezi primul contract.</p>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-2">{faq.q}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Schema.org FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a }
              }))
            })
          }}
        />

        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Gata să te protejezi juridic?</h3>
          <p className="text-gray-600 mb-6">Contract complet în 5 minute. 15 RON, fără abonament.</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Generează contract acum →
          </Link>
        </div>
      </main>
    </div>
  )
}
