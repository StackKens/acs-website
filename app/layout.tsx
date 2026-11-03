import type { Metadata } from 'next'
import { Geist, Manrope } from 'next/font/google'
import './globals.css'
import { MotionProvider } from '@/components/motion-provider'
import { SITE_URL } from '@/lib/site'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

const TITLE = 'ACS | Modern School Management'
const DESCRIPTION =
  'Academic Cloud System. A simple, connected platform for managing your school, with intelligent tools that help teachers and administrators work more effectively.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | ACS',
  },
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: SITE_URL,
    siteName: 'ACS',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/acs-share-wide.png',
        width: 1200,
        height: 630,
        alt: 'ACS | Modern School Management. Your school. Better organized.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/acs-share-wide.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${manrope.variable}`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
