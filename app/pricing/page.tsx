import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { PricingPage } from '@/components/pages/pricing'

export default function Page() {
  return (
    <PageShell>
      <PricingPage />
      <Footer />
    </PageShell>
  )
}
