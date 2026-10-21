import Link from 'next/link'

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="container-page pb-12 pt-14 md:pb-16 md:pt-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="t-display mt-4 max-w-3xl text-ink">{title}</h1>
      <p className="t-body mt-6 max-w-2xl text-copy">{description}</p>
    </section>
  )
}

export function CTA() {
  return (
    <section className="border-t border-line bg-ink text-white">
      <div className="container-page flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div>
          <h2 className="t-title text-white">Ready to simplify your school management?</h2>
          <p className="t-body mt-3 text-white/75">The first 20 schools receive 2 months free.</p>
        </div>
        <Link href="/get-started" className="btn-on-dark shrink-0">
          Get Started
        </Link>
      </div>
    </section>
  )
}
