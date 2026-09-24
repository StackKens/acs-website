import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CTA, coreCapabilities } from './shared'

function PlatformOverview() {
  const summary = [
    { label: 'Pupils managed', value: '640', note: 'Across 24 classes' },
    { label: 'Term attendance', value: '94.8%', note: 'Updated this morning' },
    { label: 'Fees collected', value: '82%', note: 'Term 2 collection rate' }
  ]
  const essentials = ['Pupil records', 'Attendance', 'Exams & reports', 'Fees & SMS']

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Platform overview</p>
          <p className="mt-2 text-sm text-[#71808d]">The essentials of daily school management, in one clear view.</p>
        </div>
        <Link href="/features" className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#516b7d] transition-colors hover:text-[#152b3c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7891a1]">
          Explore features <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#d9e1e6] bg-white shadow-[0_4px_16px_rgba(21,43,60,0.05)]">
        <div className="flex items-center justify-between border-b border-[#e6ecef] px-5 py-4 sm:px-6">
          <div>
            <p className="text-sm font-semibold text-[#172638]">School overview</p>
            <p className="mt-1 text-xs text-[#8a98a4]">Term 2 · 2026</p>
          </div>
          <span className="text-xs font-medium text-[#617889]">Sample overview</span>
        </div>

        <div className="grid divide-y divide-[#e6ecef] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {summary.map((item) => (
            <div className="px-5 py-5 sm:px-6" key={item.label}>
              <p className="text-xs text-[#71808d]">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#172638]">{item.value}</p>
              <p className="mt-1 text-xs text-[#8a98a4]">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[#e6ecef] bg-[#f8fafb] px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold text-[#526676]">Core modules</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#617889]">
              {essentials.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <div className="border-b border-[#e8edef] bg-[#f4f7f8] px-5 py-2.5 text-center text-[11px] text-[#526b7b]">
        Launching ACS — <strong className="text-[#152b3c]">first 20 schools get 2 months free.</strong> <Link className="ml-1 underline underline-offset-4" href="/get-started">Claim your free trial</Link>
      </div>

      <section className="mx-auto max-w-[1180px] px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32">
        <p className="eyebrow">Academic Cloud System</p>
        <h1 className="mt-5 max-w-3xl text-[clamp(3.4rem,8vw,6.5rem)] font-semibold leading-[.92] tracking-[-.08em]">Manage your school. Simply.</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-[#617281] sm:text-lg">ACS brings essential school management tools together in one connected platform.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link className="button-primary" href="/get-started">Start free trial <ArrowRight className="ml-2 inline" size={15}/></Link>
          <Link className="text-sm font-medium text-[#516b7d]" href="/features">Explore features <ArrowRight className="ml-1 inline" size={15}/></Link>
        </div>
        <div className="mt-16 sm:mt-20"><PlatformOverview /></div>
      </section>

      <section className="border-y border-[#e9edef] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">The platform</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-.06em] sm:text-5xl">Everything your school needs. In one place.</h2>
            </div>
            <Link href="/features" className="text-sm font-semibold text-[#2c61cc] hover:underline">
              See all feature details & previews <ArrowRight className="ml-1 inline" size={14} />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((item) => (
              <div key={item.id} className="group border-t border-[#dfe6ea] pt-5 transition-colors hover:border-[#2c61cc]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7891a1]">{item.badge}</span>
                <h3 className="mt-2 text-base font-semibold text-[#172638] group-hover:text-[#2c61cc] transition-colors">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#667787]">{item.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">Your school. Your workspace.</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">One platform. Every school has its own space.</h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-[#617281]">Each school operates in its own workspace with its own users, pupil records, and daily information.</p>
          </div>
          <div className="rounded-lg border border-[#dfe6ea] bg-[#f8fafb] p-8">
            <div className="mx-auto max-w-xs text-center">
              <div className="rounded-md border border-[#cad7df] bg-white px-5 py-4 text-sm font-medium shadow-sm">ACS platform</div>
              <div className="mx-auto h-8 w-px bg-[#cdd9df]"/>
              <div className="grid grid-cols-3 gap-2">
                {['School A','School B','School C'].map(s => (
                  <div className="rounded-md border border-[#dfe6ea] bg-white px-2 py-3 text-[11px] text-[#617281]" key={s}>{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA/>
    </>
  )
}
