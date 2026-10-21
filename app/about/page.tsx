import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import { AboutPage } from '@/components/pages/about'

export default function Page() {
  return (
    <PageShell>
      <AboutPage />
      <Footer />
    </PageShell>
  )
}
