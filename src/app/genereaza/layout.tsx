import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generează Contract — ContracteRapide.ro',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
}

export default function GenereazaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
