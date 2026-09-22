import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://acs.vexellabs.com'),
  title: {
    default: 'ACS — Modern School Management',
    template: '%s | ACS',
  },
  description: 'Academic Cloud System. A simple, connected platform for managing your school.',
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://acs.vexellabs.com',
    title: 'ACS — Modern School Management',
    description: 'Academic Cloud System. A simple, connected platform for managing your school.',
    siteName: 'ACS',
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
