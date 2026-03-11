import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">📄</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
        <p className="text-lg text-gray-600 mb-2">Pagina nu a fost găsită</p>
        <p className="text-sm text-gray-400 mb-8">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Înapoi acasă
        </Link>
      </div>
    </div>
  )
}
