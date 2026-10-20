import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://acs-website.onrender.com'),
  title: { default: 'ACS — Your school. Better organized.', template: '%s | ACS' },
  description: 'Academic Cloud System brings pupil records, attendance and academic results together for primary schools in Uganda.',
  openGraph: { type: 'website', locale: 'en_UG', title: 'ACS — Your school. Better organized.', description: 'A practical school management platform for primary schools in Uganda.', siteName: 'ACS', images: [{ url: '/acs-share.png', width: 512, height: 512, alt: 'ACS Academic Cloud System' }] },
  twitter: { card: 'summary', title: 'ACS — Your school. Better organized.', description: 'A practical school management platform for primary schools in Uganda.', images: ['/acs-share.png'] },
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${inter.variable} antialiased`}>{children}</body></html> }
