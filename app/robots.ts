import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The redirect routes and the application itself sit on other origins
      // and have nothing worth indexing here.
      disallow: ['/get-started', '/login'],
    },
    sitemap: 'https://acs-website.onrender.com/sitemap.xml',
  }
}
