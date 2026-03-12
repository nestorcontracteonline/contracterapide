import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'
import { CONTRACT_TYPES } from '@/lib/contracts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://contracterapide.ro'
  const lastModified = new Date()

  const contractUrls: MetadataRoute.Sitemap = CONTRACT_TYPES.map(c => ({
    url: `${baseUrl}/contracte/${c.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/agenti`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/autentificare`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termeni`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialitate`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contracte`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pentru-pfa-it`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pentru-agenti-imobiliari`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...contractUrls,
    ...blogUrls,
  ]
}
