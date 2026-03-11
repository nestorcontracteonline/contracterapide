import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTRACT_TYPES } from '@/lib/contracts'

export const metadata: Metadata = {
  title: 'Toate Contractele – ContracteRapide.ro | 16 Tipuri pentru PFA și Freelanceri',
  description: 'Catalog complet: 16 tipuri de contracte pentru PFA, freelanceri și antreprenori români. Contract prestări servicii, NDA, colaborare, agent imobiliar și altele. 15 RON, gata în 5 minute.',
  alternates: { canonical: 'https://contracterapide.ro/contracte' },
  keywords: 'contracte pfa freelancer, model contract romania, contract prestari servicii, acord confidentialitate, contract colaborare',
  openGraph: {
    title: 'Catalog Contracte – ContracteRapide.ro',
    description: '16 tipuri de contracte pentru PFA și freelanceri. 15 RON per contract.',
    type: 'website',
  },
}

const categoryLabels: Record<string, string> = {
  freelancer: '💻 Freelanceri & PFA IT',
  agenti: '🏠 Agenți & Intermediari',
  general: '📄 Contracte Generale',
}

export default function ContractePage() {
  const byCategory = CONTRACT_TYPES.reduce((acc, c) => {
    if (!acc[c.category]) acc[c.category] = []
    acc[c.category].push(c)
    return acc
  }, {} as Record<string, typeof CONTRACT_TYPES>)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            ContracteRapide<span className="text-blue-600">.ro</span>
          </Link>
          <div className="flex gap-4 text-sm">
            <Link href="/faq" className="text-gray-500 hover:text-gray-900">FAQ</Link>
            <Link href="/blog" className="text-gray-500 hover:text-gray-900">Blog</Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Toate contractele disponibile
          </h1>
          <p className="text-gray-500 text-lg">
            {CONTRACT_TYPES.length} tipuri de contracte · 15 RON fiecare · Gata în 5 minute
          </p>
        </div>

        {['freelancer', 'general', 'agenti'].map(cat => (
          <div key={cat} className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">{categoryLabels[cat]}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {(byCategory[cat] || []).map(contract => (
                <Link
                  key={contract.id}
                  href={`/genereaza/${contract.id}`}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {contract.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{contract.description}</p>
                    </div>
                    <span className="ml-4 text-blue-600 font-bold text-sm whitespace-nowrap">
                      {contract.price} RON →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-8 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Nu știi ce contract ai nevoie?</h3>
          <p className="text-blue-100 mb-6 text-sm">Scrie-ne și te ajutăm să alegi varianta potrivită.</p>
          <a
            href="mailto:contact@contracterapide.ro"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            contact@contracterapide.ro
          </a>
        </div>

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Contracte pentru PFA și Freelanceri',
              numberOfItems: CONTRACT_TYPES.length,
              itemListElement: CONTRACT_TYPES.map((c, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: c.name,
                description: c.description,
                url: `https://contracterapide.ro/genereaza/${c.id}`,
              }))
            })
          }}
        />
      </main>
    </div>
  )
}
