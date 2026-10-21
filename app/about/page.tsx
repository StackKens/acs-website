import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { AboutPage } from '@/components/pages/about'
import { canonical } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: canonical('/about') },
  title: 'About',
  description:
    'What ACS stands for, what the Academic Cloud System is for, and why it is being built around primary schools in Uganda.',
}

export default function Page() {
  return (
    <PageShell>
      <AboutPage />
      <Footer />
    </PageShell>
  )
}
