import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { FeaturesPage } from '@/components/pages/features'

export default function Page() {
  return (
    <PageShell>
      <FeaturesPage />
      <Footer />
    </PageShell>
  )
}
