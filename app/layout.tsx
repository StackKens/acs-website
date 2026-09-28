import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://acs-website.onrender.com'),
  title: {
    default: 'ACS — Modern School Management',
    template: '%s | ACS',
  },
  description: 'Academic Cloud System. A simple, connected platform for managing your school, with intelligent tools that help teachers and administrators work more effectively.',
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://acs-website.onrender.com',
    title: 'ACS — Modern School Management with AI Assistance',
    description: 'Academic Cloud System. A simple, connected platform for managing your school, with intelligent tools that help teachers and administrators work more effectively.',
    siteName: 'ACS',
    images: [{ url: '/acs-share.png', width: 512, height: 512, alt: 'ACS — Academics Cloud System' }],
  },
  twitter: {
    card: 'summary',
    title: 'ACS — Modern School Management',
    description: 'Academic Cloud System. A simple, connected platform for managing your school, with intelligent tools that help teachers and administrators work more effectively.',
    images: ['/acs-share.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
