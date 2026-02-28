import { source } from '@/lib/source'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rwagsu.top'
  
  return source.getPages().map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.data.lastModified || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
}