import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ACSMark } from '@/components/acs-mark'
import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/primitives'

const suggestions = [
  { href: '/features', label: 'Features', detail: 'What ACS does, group by group.' },
  { href: '/pricing', label: 'Pricing', detail: 'Plans per term, by school size.' },
  { href: '/how-it-works', label: 'How it works', detail: 'Getting your school set up.' },
  { href: '/user-guide', label: 'User guide', detail: 'How the platform behaves, in detail.' },
]

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center bg-page">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-10 nav:grid-cols-[1.1fr_0.9fr] nav:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <ACSMark size={32} className="shrink-0" title={null} />
                <span className="text-[26px] font-bold lowercase tracking-[-0.02em] text-ink">acs</span>
              </div>
              <p className="t-eyebrow mt-10 text-brand">Error 404</p>
              <h1 className="t-display mt-3 max-w-[14ch] text-ink">This page is not here.</h1>
              <p className="t-lead mt-5 max-w-lg text-copy">
                The link may be out of date, or the page may have moved. Here is where you were
                probably heading.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/">
                  Back to home <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button href="/contact" variant="ghost">
                  Contact us
                </Button>
              </div>
            </div>

            <nav aria-label="Suggested pages" className="nav:pt-4">
              <ul className="card divide-y divide-line overflow-hidden">
                {suggestions.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-surface"
                    >
                      <span>
                        <span className="block text-[15px] font-semibold text-ink">{item.label}</span>
                        <span className="mt-0.5 block text-[13px] text-copy">{item.detail}</span>
                      </span>
                      <ArrowRight className="size-4 shrink-0 text-brand" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
