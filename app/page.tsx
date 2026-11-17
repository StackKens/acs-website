import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import ACSHome from '@/components/pages/ACSHome'

export default function Home() {
  return (
    <PageShell>
      <ACSHome />
      <Footer />
    </PageShell>
  )
}
