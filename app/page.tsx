import Footer from '@/components/footer'
import { PageShell } from '@/components/header'
import HomePage from '@/components/pages/home'

export default function Home() {
  return (
    <PageShell>
      <HomePage />
      <Footer />
    </PageShell>
  )
}
