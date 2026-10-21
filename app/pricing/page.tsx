import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { PricingPage } from '@/components/pages/pricing'
import { canonical } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: canonical('/pricing') },
  title: 'Pricing',
  description:
    'ACS pricing for Ugandan primary schools — Starter, Growth and Professional plans billed per academic term, by school size. The first 20 schools get 2 months free.',
}

export default function Page() {
  return (
    <PageShell>
      <PricingPage />
      <Footer />
    </PageShell>
  )
}
