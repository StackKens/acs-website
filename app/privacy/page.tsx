import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { PrivacyPage } from '@/components/pages/privacy'

export default function Page() {
  return (
    <PageShell>
      <PrivacyPage />
      <Footer />
    </PageShell>
  )
}
