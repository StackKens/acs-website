import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import AcsAbout from '@/components/pages/ACSAbout'
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
      <AcsAbout />
      <Footer />
    </PageShell>
  )
}
