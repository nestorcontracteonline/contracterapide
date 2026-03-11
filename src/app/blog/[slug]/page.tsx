import Link from "next/link"
import { notFound } from "next/navigation"
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts"
import { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | ContracteRapide.ro`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://contracterapide.ro/blog/${post.slug}`,
      siteName: "ContracteRapide.ro",
      type: "article",
      publishedTime: post.publishedAt,
    },
  }
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{line.replace('## ', '')}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-semibold text-gray-900 mt-8 mb-3">{line.replace('### ', '')}</h3>)
    } else if (line.startsWith('**') && line.endsWith('**') && !line.includes(' ')) {
      elements.push(<p key={i} className="font-semibold text-gray-900 mt-4 mb-1">{line.replace(/\*\*/g, '')}</p>)
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].replace('- ', ''))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1 my-3 text-gray-700">
          {items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />)}
        </ul>
      )
      continue
    } else if (line === '---') {
      elements.push(<hr key={i} className="my-8 border-gray-200" />)
    } else if (line.trim() === '') {
      // skip
    } else {
      const html = line
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 font-medium">$1</a>')
      elements.push(<p key={i} className="text-gray-700 leading-relaxed my-3" dangerouslySetInnerHTML={{ __html: html }} />)
    }
    i++
  }

  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const otherPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3)

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
            <Link href="/blog" className="hidden md:block hover:text-gray-900">Blog</Link>
            <Link href="/autentificare" className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Contul meu
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Acasă</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{post.title.substring(0, 40)}...</span>
        </nav>

        <article>
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>{post.readingTime} min citire</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed border-l-4 border-blue-200 pl-4">{post.excerpt}</p>

          <div className="prose max-w-none">
            {renderContent(post.content)}
          </div>
        </article>

        {/* CTA */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Gata să generezi contractul?</h2>
          <p className="text-gray-600 mb-6 text-sm">5 minute. 15 RON. Document legal conform legislației române 2025.</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Generează contractul tău →
          </Link>
        </div>

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Articole similare</h2>
            <div className="space-y-4">
              {otherPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block border border-gray-100 rounded-lg p-4 hover:border-blue-200 transition-colors">
                  <div className="text-sm font-medium text-gray-900 mb-1">{p.title}</div>
                  <div className="text-xs text-gray-400">{p.readingTime} min citire</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-100 px-4 py-8 mt-8">
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
