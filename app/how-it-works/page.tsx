import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import AcsHowItWorks from '@/components/pages/ACSHowItWorks'
import { canonical } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: canonical('/how-it-works') },
  title: 'How it works',
  description:
    'How a school gets started with ACS — the onboarding journey, what administrators can prepare in advance, and answers to the questions schools ask before signing up.',
}

export default function Page() {
  return (
    <PageShell>
      <AcsHowItWorks />
      <Footer />
    </PageShell>
  )
}
