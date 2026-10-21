import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { PrivacyPage } from '@/components/pages/privacy'
import { canonical } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: canonical('/privacy') },
  title: 'Privacy',
  description:
    'How ACS handles the school, pupil, staff and parent information held in the platform, and the information this website collects.',
}

export default function Page() {
  return (
    <PageShell>
      <PrivacyPage />
      <Footer />
    </PageShell>
  )
}
