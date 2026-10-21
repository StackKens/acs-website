import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { HowItWorksPage } from '@/components/pages/how-it-works'

export default function Page() {
  return (
    <PageShell>
      <HowItWorksPage />
      <Footer />
    </PageShell>
  )
}
