import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CTA, coreCapabilities } from './shared'
import { AIMockup } from './ai-mockup'

export default function HomePage() {
  return (
    <>
      <div className="border-y border-[#d6e1e7] bg-[#e7eff3] px-5 py-2.5 text-center text-[11px] text-[#425b6b]">
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
      </section>

      <section className="border-y border-[#e9edef] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">The platform</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-.06em] sm:text-5xl">Everything your school needs. In one place.</h2>
            </div>
            <Link href="/features" className="text-sm font-semibold text-[#2c61cc] hover:underline">
              View all features <ArrowRight className="ml-1 inline" size={14} />
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

      <section className="border-y border-[#e9edef] bg-[#f8fafb]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">Smarter support for teachers</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">Intelligent academic assistance, built in.</h2>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-[#617281]">
                From creating classroom exercises to preparing revision material, ACS gives teachers intelligent assistance designed around primary education.
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-[#617281]">
                AI-generated materials can be reviewed, edited and refined before they are used in the classroom.
              </p>
              <div className="mt-8">
                <Link className="button-primary" href="/features">Explore ACS <ArrowRight className="ml-2 inline" size={15}/></Link>
              </div>
            </div>
            <AIMockup />
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
          <div className="border border-[#dfe6ea] bg-[#f8fafb] p-8">
            <div className="mx-auto max-w-xs text-center">
              <div className="border border-[#cad7df] bg-white px-5 py-4 text-sm font-medium shadow-sm">ACS platform</div>
              <div className="mx-auto h-8 w-px bg-[#cdd9df]"/>
              <div className="grid grid-cols-3 gap-2">
                {['School A','School B','School C'].map(s => (
                  <div className="border border-[#dfe6ea] bg-white px-2 py-3 text-[11px] text-[#617281]" key={s}>{s}</div>
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
