'use client'

export default function BundleButton() {
  const handleClick = async () => {
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageType: 'bundle10', email: '' }),
      })
      const { url } = await res.json()
      if (url) window.location.href = url
    } catch {
      alert('Eroare la inițializarea plății. Încearcă din nou.')
    }
  }

  return (
    <button
      onClick={handleClick}
      className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
    >
      Cumpără pachet — 99 RON →
    </button>
  )
}
