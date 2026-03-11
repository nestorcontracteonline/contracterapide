import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTRACT_TYPES } from '@/lib/contracts'
import ContracteSearch from './ContracteSearch'

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

export default function ContractePage() {
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

        {/* Client-side search + list */}
        <ContracteSearch />

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Nu găsești ce cauți?</h2>
          <p className="text-blue-100 mb-6">Contactează-ne și îți creăm un contract personalizat.</p>
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
