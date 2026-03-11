import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'

async function getUserContracts(email: string) {
  try {
    const { data } = await supabaseAdmin
      .from('contracts')
      .select('*')
      .eq('customer_email', email)
      .order('created_at', { ascending: false })
      .limit(50)
    return data || []
  } catch {
    return []
  }
}

export default async function AccountPage() {
  const session = await auth()
  if (!session?.user) redirect('/autentificare')

  const contracts = await getUserContracts(session.user.email!)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-lg font-bold text-gray-900">ContracteRapide</span>
            <span className="text-lg font-bold text-blue-600">.ro</span>
          </Link>
          <div className="flex items-center gap-3">
            {session.user.image && (
              <img src={session.user.image} alt="" className="w-8 h-8 rounded-full" />
            )}
            <span className="text-sm text-gray-600 hidden sm:block">{session.user.name}</span>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Contractele mele</h1>
          <p className="text-gray-500 text-sm mt-1">{contracts.length} contracte generate</p>
        </div>

        {contracts.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="font-semibold text-gray-900 mb-2">Niciun contract inca</h3>
            <p className="text-sm text-gray-500 mb-4">Genereaza primul tau contract si apare automat aici</p>
            <Link href="/" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
              Genereaza contract
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {contracts.map((c: {
              id: string;
              contract_number: string;
              contract_name: string;
              created_at: string;
              status: string;
              customer_email: string;
              contract_type: string;
            }) => (
              <div key={c.id} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{c.contract_name}</p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {c.contract_number} • {new Date(c.created_at).toLocaleDateString('ro-RO')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium
                      ${c.status === 'generated' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {c.status === 'generated' ? 'Generat' : c.status}
                    </span>
                    <Link
                      href={`/genereaza/${c.contract_type}`}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Regenereaza
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href="/api/auth/signout" className="text-sm text-red-500 hover:text-red-700">
            Deconectare
          </Link>
        </div>
      </div>
    </div>
  )
}
