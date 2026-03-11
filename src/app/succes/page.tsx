'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function SuccesContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')

  useEffect(() => {
    if (sessionId) {
      // Sesiunea există => plata a reușit (Stripe redirecționează doar după succes)
      setStatus('ok')
    } else {
      setStatus('error')
    }
  }, [sessionId])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Se verifică plata...
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Ceva nu a mers</h1>
          <p className="text-gray-500 mb-6">Nu am putut confirma plata ta.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
            Înapoi acasă
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Plată confirmată!</h1>
        <p className="text-gray-600 mb-2">Contractul tău a fost generat și trimis pe email.</p>
        <p className="text-sm text-gray-400 mb-8">Verifică și folderul Spam dacă nu găsești emailul în câteva minute.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-3">Ce urmează?</h3>
          <ol className="text-sm text-gray-600 space-y-2">
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span>Deschide emailul cu contractul</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span>Salvează-l ca PDF (File → Print → Save as PDF)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span>Trimite-l clientului pentru semnat</span>
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <Link href="/contul-meu" className="block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Vezi contractul în dashboard →
          </Link>
          <Link href="/" className="block w-full border border-blue-200 text-blue-600 py-3 rounded-xl text-sm font-medium hover:bg-blue-50 transition-colors">
            Generează alt contract
          </Link>
          <a
            href="mailto:contact@contracterapide.ro"
            className="block w-full border border-gray-200 text-gray-400 py-3 rounded-xl text-sm hover:border-gray-300 transition-colors"
          >
            Ai completat greșit? Contactează-ne în 24h
          </a>
        </div>
      </div>
    </div>
  )
}

export default function SuccesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Se încarcă...</div>}>
      <SuccesContent />
    </Suspense>
  )
}
