'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentState = {
  analytics: boolean
  marketing: boolean
  necessary: boolean // always true
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent')
    if (!saved) {
      setTimeout(() => setVisible(true), 500)
    } else {
      const parsed = JSON.parse(saved)
      applyConsent(parsed)
    }
  }, [])

  function applyConsent(c: ConsentState) {
    if (typeof window !== 'undefined') {
      window.gtag?.('consent', 'update', {
        analytics_storage: c.analytics ? 'granted' : 'denied',
        ad_storage: c.marketing ? 'granted' : 'denied',
        ad_user_data: c.marketing ? 'granted' : 'denied',
        ad_personalization: c.marketing ? 'granted' : 'denied',
      })
    }
  }

  function saveConsent(c: ConsentState) {
    localStorage.setItem('cookie-consent', JSON.stringify({
      ...c,
      savedAt: new Date().toISOString(),
    }))
    applyConsent(c)
    setVisible(false)
  }

  function acceptAll() {
    const c = { necessary: true, analytics: true, marketing: true }
    setConsent(c)
    saveConsent(c)
  }

  function acceptNecessary() {
    const c = { necessary: true, analytics: false, marketing: false }
    saveConsent(c)
  }

  function saveCustom() {
    saveConsent(consent)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-2xl p-6">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700 leading-relaxed">
                Folosim cookie-uri pentru a îmbunătăți experiența pe site. Cookie-urile necesare sunt întotdeauna active.{' '}
                <Link href="/politica-cookies" className="text-blue-600 underline hover:text-blue-700">
                  Politica cookies
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Personalizează
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Doar necesare
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Acceptă toate
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Preferințe cookie-uri</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-gray-900">Cookie-uri necesare</p>
                  <p className="text-xs text-gray-500 mt-0.5">Sesiune, autentificare, securitate. Nu pot fi dezactivate.</p>
                </div>
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-lg">Întotdeauna active</span>
              </div>

              <div className="flex items-start justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-gray-900">Cookie-uri analitice</p>
                  <p className="text-xs text-gray-500 mt-0.5">Google Analytics — înțelegem cum e folosit site-ul (pagini vizitate, timp petrecut).</p>
                </div>
                <button
                  onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                  className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                    consent.analytics ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    consent.analytics ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-start justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-gray-900">Cookie-uri de marketing</p>
                  <p className="text-xs text-gray-500 mt-0.5">Reclame relevante, retargeting. Momentan nefolosite.</p>
                </div>
                <button
                  onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                  className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                    consent.marketing ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    consent.marketing ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-end">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Înapoi
              </button>
              <button
                onClick={saveCustom}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Salvează preferințele
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
