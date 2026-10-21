import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { FeaturesPage } from '@/components/pages/features'
import { canonical } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: canonical('/features') },
  title: 'Features',
  description:
    'The full ACS capability catalogue — pupil records, class organisation, attendance, assessments and grading, report cards, school administration, finance, parent communication and AI assistance for teachers.',
}

export default function Page() {
  return (
    <PageShell>
      <FeaturesPage />
      <Footer />
    </PageShell>
  )
}
