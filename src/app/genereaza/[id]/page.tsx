'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { getContractById, ContractType, generateContractText } from '@/lib/contracts'

export default function GeneratePage() {
  const params = useParams()
  const router = useRouter()
  const [contract, setContract] = useState<ContractType | null>(null)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [step, setStep] = useState<'form' | 'preview' | 'payment'>('form')
  const [preview, setPreview] = useState<string>('')

  useEffect(() => {
    const c = getContractById(params.id as string)
    if (!c) {
      router.push('/')
      return
    }
    setContract(c)
    // Init form data
    const init: Record<string, string> = {}
    c.fields.forEach(f => { init[f.id] = '' })
    setFormData(init)
  }, [params.id, router])

  if (!contract) return <div className="min-h-screen flex items-center justify-center">Se incarca...</div>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = generateContractText(contract, formData)
    setPreview(text)
    setStep('preview')
    window.scrollTo(0, 0)
  }

  const allRequiredFilled = contract.fields
    .filter(f => f.required)
    .every(f => formData[f.id]?.trim())

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold text-gray-900">ContracteRapide</span>
            <span className="text-xl font-bold text-blue-600">.ro</span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            Inapoi
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          <div className={`flex items-center gap-2 text-sm ${step === 'form' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 'form' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            Date
          </div>
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className={`flex items-center gap-2 text-sm ${step === 'preview' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 'preview' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            Preview
          </div>
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className={`flex items-center gap-2 text-sm ${step === 'payment' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 'payment' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
            Plata
          </div>
        </div>

        {step === 'form' && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{contract.name}</h1>
              <p className="text-gray-500 mt-1">{contract.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {contract.fields.map(field => (
                <div key={field.id}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={3}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.id] || ''}
                      onChange={e => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      required={field.required}
                      value={formData[field.id] || ''}
                      onChange={e => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                    >
                      <option value="">Selecteaza...</option>
                      {field.options?.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type === 'phone' ? 'tel' : field.type}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.id] || ''}
                      onChange={e => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                    />
                  )}
                </div>
              ))}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!allRequiredFilled}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Genereaza previzualizare
                </button>
              </div>
            </form>
          </>
        )}

        {step === 'preview' && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Previzualizare contract</h1>
              <p className="text-gray-500 mt-1">Verifica datele inainte de plata</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 mb-6">
              <pre className="contract-preview text-xs text-gray-700 overflow-auto max-h-96">{preview}</pre>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{contract.name}</p>
                  <p className="text-sm text-gray-500">Contract complet, descarcare PDF</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">{contract.price} RON</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep('form')}
                className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:border-gray-300 transition-colors"
              >
                Modifica datele
              </button>
              <button
                onClick={() => setStep('payment')}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Plateste {contract.price} RON
              </button>
            </div>
          </>
        )}

        {step === 'payment' && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Plata</h1>
              <p className="text-gray-500 mt-1">Introduceti datele cardului</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-900">{contract.name}</p>
                <p className="font-bold text-blue-600">{contract.price} RON</p>
              </div>
            </div>

            {/* Stripe embed placeholder */}
            <div className="border border-gray-200 rounded-xl p-6 text-center text-gray-500">
              <p className="text-sm mb-2">Procesare plata prin Stripe</p>
              <p className="text-xs text-gray-400">Stripe integration in curand. Contactati contact@contracterapide.ro pentru acces beta gratuit.</p>
              <a 
                href={`mailto:contact@contracterapide.ro?subject=Acces beta - ${contract.name}&body=Vreau sa testez contractul: ${contract.name}`}
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Solicita acces beta gratuit
              </a>
            </div>

            <button
              onClick={() => setStep('preview')}
              className="w-full mt-3 border border-gray-200 text-gray-700 py-2 rounded-lg text-sm hover:border-gray-300 transition-colors"
            >
              Inapoi
            </button>
          </>
        )}
      </div>
    </div>
  )
}
