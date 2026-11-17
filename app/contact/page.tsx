import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import AcsContact from '@/components/pages/ACSContact'
import { canonical } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: canonical('/contact') },
  title: 'Contact',
  description:
    'Request an ACS demonstration, ask about pricing and available features, or get help with school onboarding. The ACS team responds using the contact details you provide.',
}

export default function Page() {
  return (
    <PageShell>
      <AcsContact />
      <Footer />
    </PageShell>
  )
}
