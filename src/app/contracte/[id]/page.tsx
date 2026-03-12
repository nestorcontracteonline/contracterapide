import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getContractById, CONTRACT_TYPES } from '@/lib/contracts'

export async function generateStaticParams() {
  return CONTRACT_TYPES.map(c => ({ id: c.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const contract = getContractById(id)
  if (!contract) return {}

  return {
    title: `${contract.name} 2026 – Model Complet pentru PFA și Freelanceri | ContracteRapide.ro`,
    description: `${contract.description}. Generat instant, conform legislației române 2026. 15 RON, fără abonament.`,
    keywords: `${contract.name.toLowerCase()}, model ${contract.name.toLowerCase()}, ${contract.name.toLowerCase()} pfa, ${contract.name.toLowerCase()} romania 2026`,
    alternates: { canonical: `https://contracterapide.ro/contracte/${id}` },
    openGraph: {
      title: `${contract.name} – ContracteRapide.ro`,
      description: contract.description,
      type: 'website',
    },
  }
}

export default async function ContractLandingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const contract = getContractById(id)
  if (!contract) notFound()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            ContracteRapide<span className="text-blue-600">.ro</span>
          </Link>
          <Link href={`/genereaza/${contract.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
            Generează acum →
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="mb-10">
          <div className="text-sm text-blue-600 font-medium mb-2">
            {contract.category === 'freelancer' ? '💻 Freelanceri & PFA IT' : contract.category === 'agenti' ? '🏠 Agenți & Intermediari' : '📄 Contracte Generale'}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{contract.name} 2026</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{contract.description}. Model complet, conform legislației române în vigoare.</p>
        </div>

        {/* CTA primary */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900">Generează contractul completat cu datele tale</p>
            <p className="text-sm text-gray-500">Completezi datele → plătești 15 RON → primești .docx + PDF gata de semnat</p>
          </div>
          <Link href={`/genereaza/${contract.id}`} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
            Generează — 15 RON →
          </Link>
        </div>

        {/* Ce conține */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ce conține contractul</h2>
          <ul className="space-y-2">
            {[
              'Identificarea completă a ambelor părți',
              'Obiectul contractului detaliat',
              'Prețul și modalitățile de plată',
              'Durata și condițiile de reziliere',
              'Clauze de forță majoră',
              'Penalități pentru nerespectarea obligațiilor',
              'Prevederi privind confidențialitatea',
              'Clauze de litigii și instanță competentă',
              'Semnătura ambelor părți + data',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="text-green-500 font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Câmpuri formular */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ce date completezi</h2>
          <div className="grid md:grid-cols-2 gap-2">
            {contract.fields.filter(f => f.required).map(field => (
              <div key={field.id} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-500">→</span> {field.label}
              </div>
            ))}
          </div>
        </section>

        {/* Schema Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: contract.name,
              description: contract.description,
              brand: { '@type': 'Brand', name: 'ContracteRapide.ro' },
              offers: {
                '@type': 'Offer',
                price: '15',
                priceCurrency: 'RON',
                availability: 'https://schema.org/InStock',
                url: `https://contracterapide.ro/genereaza/${contract.id}`,
              }
            })
          }}
        />

        {/* CTA final */}
        <div className="mt-10 text-center">
          <Link href={`/genereaza/${contract.id}`} className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
            Generează {contract.name} — 15 RON →
          </Link>
          <p className="text-sm text-gray-400 mt-3">Gata în 5 minute · .docx editabil + PDF · Email instant</p>
        </div>
      </main>
    </div>
  )
}
