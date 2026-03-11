'use client'

import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: Props) {
  const allItems = [{ label: 'Acasă', href: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://contracterapide.ro${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="breadcrumb" className="text-sm text-gray-400 mb-8">
        {allItems.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="mx-2">/</span>}
            {item.href && index < allItems.length - 1 ? (
              <Link href={item.href} className="hover:text-gray-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-600">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
