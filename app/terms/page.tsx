import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { TermsPage } from '@/components/pages/terms'

export default function Page() {
  return (
    <PageShell>
      <TermsPage />
      <Footer />
    </PageShell>
  )
}
