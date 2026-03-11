'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

export default function AuthPage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleSignIn = async (provider: string) => {
    setLoading(provider)
    await signIn(provider, { callbackUrl: '/contul-meu' })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-md mx-auto">
          <Link href="/">
            <span className="text-lg font-bold text-gray-900">ContracteRapide</span>
            <span className="text-lg font-bold text-blue-600">.ro</span>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Contul tau</h1>
            <p className="text-gray-500 text-sm">Acces la toate contractele tale, oricand</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => handleSignIn('google')}
              disabled={loading !== null}
              className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3.5 px-4 font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all disabled:opacity-50"
            >
              {loading === 'google' ? (
                <span className="animate-spin text-gray-400">⟳</span>
              ) : (
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#4285F4" d="M47.5 24.5c0-1.6-.1-3.1-.4-4.6H24v8.7h13.2c-.6 3-2.3 5.5-4.9 7.2v6h7.9c4.6-4.3 7.3-10.6 7.3-17.3z"/>
                  <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.9-6c-2.1 1.4-4.8 2.3-8 2.3-6.1 0-11.3-4.1-13.2-9.7H2.6v6.2C6.6 42.5 14.7 48 24 48z"/>
                  <path fill="#FBBC05" d="M10.8 28.8C10.3 27.4 10 25.7 10 24s.3-3.4.8-4.8v-6.2H2.6C1 16.6 0 20.2 0 24s1 7.4 2.6 10.8l8.2-6z"/>
                  <path fill="#EA4335" d="M24 9.5c3.4 0 6.5 1.2 8.9 3.5l6.6-6.6C35.9 2.6 30.5.5 24 .5 14.7.5 6.6 6 2.6 13.2l8.2 6.2C12.7 13.6 17.9 9.5 24 9.5z"/>
                </svg>
              )}
              Continua cu Google
            </button>

          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              Prin autentificare accepti{' '}
              <a href="/termeni" className="underline hover:text-gray-600">Termenii</a>
              {' '}si{' '}
              <a href="/confidentialitate" className="underline hover:text-gray-600">Politica de Confidentialitate</a>
            </p>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-4">
            <p className="text-sm font-medium text-blue-900 mb-2">De ce cont?</p>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>Toate contractele salvate intr-un loc</li>
              <li>Regenereaza oricand, fara reintroducerea datelor</li>
              <li>Istoric complet cu numere de contract</li>
              <li>Acces de pe orice dispozitiv</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
