import Link from "next/link"
import { BLOG_POSTS } from "@/lib/blog-posts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog – Contracte și Juridic pentru Freelanceri | ContracteRapide.ro",
  description: "Ghiduri practice despre contracte PFA, NDA, colaborare IT și protecție juridică pentru freelanceri și PFA-uri din România.",
  openGraph: {
    title: "Blog – Contracte și Juridic pentru Freelanceri",
    description: "Ghiduri practice despre contracte PFA, NDA, colaborare IT și protecție juridică pentru freelanceri.",
    url: "https://contracterapide.ro/blog",
    siteName: "ContracteRapide.ro",
  },
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold text-gray-900">ContracteRapide</span>
            <span className="text-xl font-bold text-blue-600">.ro</span>
          </Link>
          <nav className="flex gap-4 text-sm text-gray-600 items-center">
            <Link href="/#contracte" className="hidden md:block hover:text-gray-900">Contracte</Link>
            <Link href="/blog" className="hidden md:block font-medium text-blue-600">Blog</Link>
            <Link href="/autentificare" className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Contul meu
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Blog</h1>
        <p className="text-gray-500 mb-12 text-lg">Ghiduri practice despre contracte și protecție juridică pentru freelanceri și PFA-uri.</p>

        <div className="space-y-8">
          {sorted.map(post => (
            <article key={post.slug} className="border border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span>·</span>
                <span>{post.readingTime} min citire</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
              >
                Citește articolul →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Gata să te protejezi juridic?</h2>
          <p className="text-gray-600 mb-6 text-sm">Generează un contract profesional în 5 minute. Fără abonament, plătești doar ce folosești.</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Alege contractul tău
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-100 px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">© 2026 ContracteRapide.ro. Toate drepturile rezervate.</div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/termeni" className="hover:text-gray-600">Termeni</Link>
            <Link href="/confidentialitate" className="hover:text-gray-600">Confidentialitate</Link>
            <a href="mailto:contact@contracterapide.ro" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
