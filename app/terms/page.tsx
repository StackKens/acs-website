import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { TermsPage } from '@/components/pages/terms'
import { canonical } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: canonical('/terms') },
  title: 'Terms',
  description: 'The terms on which ACS is provided to a school, as a draft for review.',
}

export default function Page() {
  return (
    <PageShell>
      <TermsPage />
      <Footer />
    </PageShell>
  )
}
