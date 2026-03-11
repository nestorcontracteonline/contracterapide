'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { CONTRACT_TYPES } from '@/lib/contracts'

const categoryLabels: Record<string, string> = {
  freelancer: '💻 Freelanceri & PFA IT',
  agenti: '🏠 Agenți & Intermediari',
  general: '📄 Contracte Generale',
}

export default function ContracteSearch() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return CONTRACT_TYPES
    return CONTRACT_TYPES.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q)
    )
  }, [query])

  const byCategory = useMemo(() => {
    return filtered.reduce((acc, c) => {
      if (!acc[c.category]) acc[c.category] = []
      acc[c.category].push(c)
      return acc
    }, {} as Record<string, typeof CONTRACT_TYPES>)
  }, [filtered])

  const totalFound = filtered.length

  return (
    <>
      {/* Search bar */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Caută contract (ex: freelancer, NDA, fotograf...)"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              aria-label="Șterge căutare"
            >
              ✕
            </button>
          )}
        </div>
        {query && (
          <p className="mt-2 text-sm text-gray-500 text-center">
            {totalFound > 0
              ? `${totalFound} contract${totalFound === 1 ? '' : 'e'} găsite`
              : 'Niciun contract găsit pentru această căutare.'}
          </p>
        )}
      </div>

      {/* Results */}
      {totalFound === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-medium text-gray-600">Niciun rezultat pentru &ldquo;{query}&rdquo;</p>
          <p className="text-sm mt-2">Încearcă un alt termen sau <button onClick={() => setQuery('')} className="text-blue-500 underline">vezi toate contractele</button>.</p>
        </div>
      ) : (
        ['freelancer', 'general', 'agenti'].map(cat => {
          const contracts = byCategory[cat]
          if (!contracts || contracts.length === 0) return null
          return (
            <div key={cat} className="mb-12">
              <h2 className="text-xl font-semibold text-gray-800 mb-5">{categoryLabels[cat]}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {contracts.map(contract => (
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
          )
        })
      )}
    </>
  )
}
