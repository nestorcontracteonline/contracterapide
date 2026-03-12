'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { getContractById, ContractType, generateContractText } from '@/lib/contracts'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function GeneratePage() {
  const params = useParams()
  const router = useRouter()
  const [contract, setContract] = useState<ContractType | null>(null)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [step, setStep] = useState<'form' | 'email' | 'preview' | 'payment' | 'done'>('form')
  const [preview, setPreview] = useState<string>('')
  const [email, setEmail] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [contractNumber, setContractNumber] = useState('')

  useEffect(() => {
    const c = getContractById(params.id as string)
    if (!c) { router.push('/'); return }
    setContract(c)
    const init: Record<string, string> = {}
    c.fields.forEach(f => { init[f.id] = '' })
    setFormData(init)
  }, [params.id, router])

  // Restaurează din localStorage
  useEffect(() => {
    if (!contract) return
    const saved = localStorage.getItem(`contract-draft-${contract.id}`)
    if (saved) {
      try {
        const { formData: savedData, email: savedEmail, step: savedStep } = JSON.parse(saved)
        if (savedData) setFormData(prev => ({ ...prev, ...savedData }))
        if (savedEmail) setEmail(savedEmail)
        if (savedStep && savedStep !== 'payment' && savedStep !== 'done') {
          setStep(savedStep)
        }
      } catch {}
    }
  }, [contract])

  // Salvează în localStorage la orice modificare
  useEffect(() => {
    if (!contract || step === 'done') return
    localStorage.setItem(`contract-draft-${contract.id}`, JSON.stringify({
      formData, email, customerName, step
    }))
  }, [formData, email, customerName, step, contract])

  if (!contract) return (
    <div className="min-h-screen flex items-center justify-center text-gray-500">Se incarca...</div>
  )

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = generateContractText(contract, formData)
    setPreview(text)
    setStep('email')
    window.scrollTo(0, 0)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('preview')
    window.scrollTo(0, 0)
  }

  const handlePayment = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contractId: contract.id,
          formData,
          email,
          name: customerName,
        })
      })
      const data = await res.json()
      if (data.url) {
        // Redirecționăm la Stripe Checkout
        window.location.href = data.url
      } else {
        setError(data.error || 'Eroare la inițializarea plății')
      }
    } catch {
      setError('Eroare de conexiune. Încearcă din nou.')
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadDocx = async () => {
    try {
      const res = await fetch('/api/contract/docx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contractId: contract?.id, formData, contractNumber }),
      })
      if (!res.ok) throw new Error('Failed')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${contract?.id}-${contractNumber}.docx`
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      alert('Eroare la descărcare. Încearcă din nou.')
    }
  }

  const handlePrint = () => {
    const printWindow = window.open('', '_blank')
    if (!printWindow) return
    printWindow.document.write(`
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="utf-8">
  <title>${contract?.name || 'Contract'} — ContracteRapide.ro</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 11pt;
      line-height: 1.8;
      color: #000;
      background: #fff;
    }
    .page {
      max-width: 21cm;
      margin: 0 auto;
      padding: 2.5cm 2.5cm 3cm 2.5cm;
    }
    .header {
      text-align: center;
      margin-bottom: 28px;
      padding-bottom: 16px;
      border-bottom: 2px solid #1a1a2e;
    }
    .header h1 {
      font-size: 15pt;
      font-weight: bold;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .header .nr {
      font-size: 10pt;
      color: #555;
    }
    .contract-body {
      white-space: pre-wrap;
      font-size: 11pt;
      line-height: 1.9;
      text-align: justify;
      hyphens: auto;
    }
    .footer {
      margin-top: 40px;
      padding-top: 12px;
      border-top: 1px solid #ccc;
      text-align: center;
      font-size: 8pt;
      color: #888;
    }
    @media print {
      body { font-size: 10.5pt; }
      .page { padding: 0; }
      .no-print { display: none !important; }
      @page { margin: 2cm 2.5cm; }
    }
    .print-btn {
      display: block;
      margin: 0 auto 24px auto;
      padding: 12px 32px;
      background: #1a1a2e;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      font-family: -apple-system, sans-serif;
    }
    .print-hint {
      text-align: center;
      font-size: 9pt;
      color: #888;
      margin-bottom: 24px;
      font-family: -apple-system, sans-serif;
    }
  </style>
</head>
<body>
  <div class="no-print" style="background:#f0f9ff;padding:16px;text-align:center;border-bottom:1px solid #bae6fd;">
    <button class="print-btn" onclick="window.print()">⬇ Salvează ca PDF / Printează</button>
    <p class="print-hint">Chrome/Edge: în dialogul de printare alege "Salvare în PDF" ca destinație</p>
  </div>
  <div class="page">
    <div class="header">
      <h1>${contract?.name || 'Contract'}</h1>
      <div class="nr">Nr. ${contractNumber} &nbsp;·&nbsp; ContracteRapide.ro</div>
    </div>
    <div class="contract-body">${preview.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
    <div class="footer">
      Generat prin ContracteRapide.ro — Contracte legale pentru profesioniști români | contact@contracterapide.ro
    </div>
  </div>
</body>
</html>
    `)
    printWindow.document.close()
  }

  const lookupCif = async (fieldId: string, cifValue: string) => {
    const clean = cifValue.replace(/[^0-9]/g, '')
    if (clean.length < 6) return
    try {
      const res = await fetch(`/api/anaf?cif=${clean}`)
      if (!res.ok) return
      const company = await res.json()
      if (company.denumire) {
        // Auto-fill related fields
        const updates: Record<string, string> = {}
        if (fieldId.includes('prestator_cui')) {
          updates['prestator_cui'] = company.cif
          updates['prestator_nume'] = updates['prestator_nume'] || company.denumire
          updates['prestator_adresa'] = updates['prestator_adresa'] || company.adresa
        } else if (fieldId.includes('beneficiar_cui') || fieldId.includes('client_cui') || fieldId.includes('cumparator_cui') || fieldId.includes('locatar_cui')) {
          const prefix = fieldId.replace('_cui', '')
          updates[fieldId] = company.cif
          updates[`${prefix}_nume`] = company.denumire
          updates[`${prefix}_adresa`] = company.adresa
        } else if (fieldId.includes('parte1_cui')) {
          updates['parte1_cui'] = company.cif
          updates['parte1_nume'] = company.denumire
          updates['parte1_adresa'] = company.adresa
        } else if (fieldId.includes('parte2_cui')) {
          updates['parte2_cui'] = company.cif
          updates['parte2_nume'] = company.denumire
          updates['parte2_adresa'] = company.adresa
        } else {
          updates[fieldId] = company.cif
        }
        setFormData(prev => ({ ...prev, ...updates }))
      }
    } catch { /* ignore */ }
  }

  const allRequiredFilled = contract.fields
    .filter(f => f.required)
    .every(f => formData[f.id]?.trim())

  const stepNum = { form: 1, email: 2, preview: 3, payment: 3, done: 4 }[step]

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-4 py-4 sticky top-0 bg-white z-10">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-lg font-bold text-gray-900">ContracteRapide</span>
            <span className="text-lg font-bold text-blue-600">.ro</span>
          </Link>
          {step !== 'done' && (
            <button onClick={() => router.back()} className="text-sm text-gray-500 hover:text-gray-700">
              Inapoi
            </button>
          )}
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Contracte', href: '/contracte' },
          { label: contract.name },
        ]} />

        {/* Progress bar */}
        {step !== 'done' && (
          <div className="flex items-center mb-8">
            {['Date', 'Email', 'Preview + Plata'].map((label, i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className={`flex items-center gap-1.5 text-xs whitespace-nowrap ${stepNum > i+1 ? 'text-green-600' : stepNum === i+1 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                    ${stepNum > i+1 ? 'bg-green-100 text-green-600' : stepNum === i+1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {stepNum > i+1 ? '✓' : i+1}
                  </div>
                  <span className="hidden sm:block">{label}</span>
                </div>
                {i < 2 && <div className={`flex-1 h-px mx-2 ${stepNum > i+1 ? 'bg-green-300' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>
        )}

        {/* STEP 1: Form */}
        {step === 'form' && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{contract.name}</h1>
              <p className="text-gray-500 mt-1 text-sm">{contract.description}</p>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {contract.fields.map(field => (
                <div key={field.id}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-0.5">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder={field.placeholder} required={field.required} value={formData[field.id] || ''} onChange={e => setFormData(p => ({ ...p, [field.id]: e.target.value }))} />
                  ) : field.type === 'select' ? (
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" required={field.required} value={formData[field.id] || ''} onChange={e => setFormData(p => ({ ...p, [field.id]: e.target.value }))}>
                      <option value="">Selecteaza...</option>
                      {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <div className="relative">
                      <input
                        type={field.type === 'phone' ? 'tel' : field.type} inputMode={field.type === 'number' || field.id.includes('cui') || field.id.includes('cnp') ? 'numeric' : undefined}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16"
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.id] || ''}
                        onChange={e => {
                          setFormData(p => ({ ...p, [field.id]: e.target.value }))
                          if (field.id.includes('cui') || field.id.includes('cif')) {
                            lookupCif(field.id, e.target.value)
                          }
                        }}
                      />
                      {(field.id.includes('cui') || field.id.includes('cif')) && (
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-medium">ANAF</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 pb-4">
                <button type="submit" disabled={!allRequiredFilled} className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-base">
                  Continua
                </button>
              </div>
            </form>
          </>
        )}

        {/* STEP 2: Email collection */}
        {step === 'email' && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Unde trimitem contractul?</h1>
              <p className="text-gray-500 mt-1 text-sm">Primesti contractul complet pe email dupa plata</p>
            </div>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Numele tau <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ex: Ion Popescu" required value={customerName} onChange={e => setCustomerName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresa de email <span className="text-red-500">*</span>
                </label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="adresa@email.ro" required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="text-xs text-gray-400 mt-1">Trimitem contractul imediat dupa confirmare. Fara spam.</p>
              </div>
              <div className="pt-2 pb-4 space-y-3">
                <button type="submit" disabled={!email || !customerName} className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40 text-base">
                  Vizualizeaza contractul
                </button>
                <button type="button" onClick={() => setStep('form')} className="w-full text-sm text-gray-500 hover:text-gray-700 py-2">
                  Modifica datele
                </button>
              </div>
            </form>
          </>
        )}

        {/* STEP 3: Preview + Payment */}
        {step === 'preview' && (
          <>
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Previzualizare contract</h1>
              <p className="text-gray-500 mt-1 text-sm">Primele 3 clauze sunt vizibile. Dupa plata primesti contractul complet.</p>
            </div>

            {/* Contract teaser — first 3 clauses visible, rest blurred */}
            {(() => {
              // Split contract text into clauses (Art. X or Roman numerals sections)
              const lines = preview.split('\n')
              const clauseStarts: number[] = []
              lines.forEach((line, i) => {
                if (/^(Art\.|Articolul|ARTICOLUL|Clauza|CLAUZA)\s+\d+/i.test(line.trim()) || /^[IVX]+\.\s+/i.test(line.trim())) {
                  clauseStarts.push(i)
                }
              })
              // Show up to the end of clause 3 (or ~40 lines if no clauses detected)
              const cutoffLine = clauseStarts.length >= 4 ? clauseStarts[3] : Math.min(40, Math.floor(lines.length * 0.35))
              const visibleText = lines.slice(0, cutoffLine).join('\n')
              const hiddenText = lines.slice(cutoffLine).join('\n')

              return (
                <div className="border border-gray-200 rounded-xl bg-white mb-5 overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{contract.name}</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">Previzualizare gratuita</span>
                  </div>
                  <div className="p-4">
                    {/* Visible clauses */}
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">{visibleText}</pre>
                    {/* Blurred/locked section */}
                    {hiddenText && (
                      <div className="relative mt-0">
                        <pre className="text-xs text-gray-500 whitespace-pre-wrap font-mono leading-relaxed blur-sm select-none pointer-events-none line-clamp-6 max-h-24 overflow-hidden">
                          {hiddenText.split('\n').slice(0, 8).join('\n')}
                        </pre>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white flex flex-col items-center justify-end pb-2">
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
                            <span>🔒</span>
                            <span>{clauseStarts.length > 3 ? `+${clauseStarts.length - 3} clauze` : 'Restul contractului'} disponibile dupa plata</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })()}

            {/* Price box */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{contract.name}</p>
                  <p className="text-sm text-gray-500">Trimis la: {email}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{contract.price} RON</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="text-green-500">🔒</span>
                <span>Plata securizata prin Stripe. Datele cardului nu sunt stocate.</span>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">{error}</div>
            )}

            <div className="space-y-3 pb-6">
              <button onClick={handlePayment} disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 text-base flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Se proceseaza...
                  </>
                ) : (
                  `Plateste ${contract.price} RON si primeste contractul`
                )}
              </button>
              <button onClick={() => setStep('email')} className="w-full text-sm text-gray-500 hover:text-gray-700 py-2">
                Modifica emailul
              </button>
            </div>
          </>
        )}

        {/* STEP 4: Done */}
        {step === 'done' && (
          <>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Contract generat!</h1>
              <p className="text-gray-500 mb-1">Nr. {contractNumber}</p>
              <p className="text-gray-600">L-am trimis la <strong>{email}</strong></p>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{contract.name}</span>
                <button onClick={handlePrint} className="text-xs text-blue-600 hover:underline font-medium">
                  Salveaza PDF
                </button>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto">
                <pre className="text-xs text-gray-600 whitespace-pre-wrap font-mono leading-relaxed">{preview}</pre>
              </div>
            </div>

            <div className="space-y-3 pb-6">
              <button onClick={handleDownloadDocx} className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <span>⬇</span> Descarcă .docx (Word)
              </button>
              <button onClick={handlePrint} className="w-full border border-gray-200 text-gray-600 py-3 rounded-xl font-medium hover:border-gray-300 transition-colors text-sm">
                Salvează ca PDF
              </button>
              <Link href="/" className="block w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:border-gray-300 transition-colors text-center text-sm">
                Genereaza alt contract
              </Link>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800">
              <strong>Important:</strong> Verifica toate datele inainte de semnare. ContracteRapide genereaza documente model — nu inlocuieste consultanta juridica pentru situatii complexe.
            </div>
          </>
        )}
      </div>
    </div>
  )
}
