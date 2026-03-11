'use client'

import { useRef, useState, useTransition } from 'react'
import { subscribeNewsletter } from '@/app/actions/newsletter'

export default function NewsletterForm() {
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null)
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await subscribeNewsletter(formData)
      if (result.success) {
        setMessage({ text: result.message!, ok: true })
        formRef.current?.reset()
      } else {
        setMessage({ text: result.error!, ok: false })
      }
    })
  }

  return (
    <form ref={formRef} action={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        name="email"
        required
        placeholder="adresa@email.ro"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        disabled={isPending}
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-60 whitespace-nowrap"
      >
        {isPending ? 'Se trimite...' : 'Primesc modelul'}
      </button>
      {message && (
        <p className={`text-sm mt-2 sm:col-span-2 absolute -bottom-7 left-0 right-0 text-center ${message.ok ? 'text-green-600' : 'text-red-500'}`}>
          {message.text}
        </p>
      )}
    </form>
  )
}
