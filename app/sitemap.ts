import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap { const base='https://acs-website.onrender.com'; return ['','/features','/how-it-works','/pricing','/about','/contact','/privacy','/terms'].map(path=>({url:base+path,lastModified:new Date()})) }
