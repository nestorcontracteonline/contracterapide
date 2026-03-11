import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contul Meu — ContracteRapide.ro',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ContulMeuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
