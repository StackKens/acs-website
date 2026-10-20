'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PageIntro, CTA } from './shared'
import { pricingPlans, largeSchoolsPlan, comparisonCategories, billingSteps, faqs } from '@/lib/pricing'
import { appContactUrl } from '@/lib/site'

export { FeaturesPage } from './features'

const formatPrice = (price: number | null) =>
  price === null
    ? 'Custom pricing'
    : `UGX ${new Intl.NumberFormat('en-UG', { maximumFractionDigits: 0 }).format(price)}`

export function PricingPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Pricing"
        title="Simple pricing for better school management."
        description="Choose the ACS plan that fits your school and get the tools you need to manage your everyday school operations in one place."
      />

      <section className="container-page pb-16 md:pb-20">
        <div className="mb-10 flex flex-col gap-2 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] font-semibold text-ink">First 20 schools get 2 months free.</p>
          <p className="text-[14px] text-copy">An introductory offer for schools joining ACS.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col rounded-[10px] border p-6 transition-colors md:p-7 ${
                plan.emphasis ? 'border-brand bg-brand-soft' : 'border-line bg-white'
              }`}
            >
              {plan.emphasis && (
                <p className="mb-4 t-eyebrow text-brand">For growing schools</p>
              )}
              <p className="t-item text-ink">{plan.name}</p>
              <p className="mt-3 min-h-[56px] text-[15px] leading-6 text-copy">{plan.description}</p>

              <div className="mt-7 border-t border-line pt-5">
                <p className="text-[30px] font-semibold leading-none tracking-[-0.03em] text-ink">
                  {formatPrice(plan.price)}
                </p>
                <p className="mt-2 text-[13px] text-copy">{plan.billing}</p>
                <p className="mt-4 text-[15px] font-medium text-ink-soft">{plan.pupilLimit}</p>
              </div>

              <ul className="mt-6 space-y-3 border-t border-line pt-5 text-[14px] leading-6 text-copy">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/get-started" className="btn-primary mt-8 w-full">
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>

        <article className="mt-5 flex flex-col gap-6 rounded-[10px] border border-dashed border-brand-ring bg-surface-raised p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[15px] font-semibold text-ink">{largeSchoolsPlan.pupilLimit}</p>
            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-copy">{largeSchoolsPlan.description}</p>
          </div>
          <Link href="/contact" className="btn-secondary shrink-0">
            {largeSchoolsPlan.cta}
          </Link>
        </article>
      </section>

      <Comparison />
      <Transparency />
      <LaunchOffer />
      <Billing />
      <PlanGrowth />
      <FAQ />

      <section className="border-t border-line bg-surface">
        <div className="container-page py-14 text-center md:py-16">
          <h2 className="t-title mx-auto max-w-2xl text-ink">
            Ready to bring your school management into one place?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-copy">
            Start with ACS and give your school a simpler way to manage everyday operations.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/get-started" className="btn-primary">
              Get Started
            </Link>
            <Link href="/contact" className="btn-secondary">
              Discuss school pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function Comparison() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-page py-14 md:py-16">
        <p className="eyebrow">Compare plans</p>
        <h2 className="t-title mt-3 text-ink">Choose the coverage your school needs.</h2>
        <div className="mt-8 border-t border-line">
          {Object.entries(comparisonCategories).map(([category, items]) => (
            <div className="border-b border-line" key={category}>
              <button
                type="button"
                className="flex w-full items-center justify-between py-5 text-left text-[15px] font-semibold text-ink sm:cursor-default"
                aria-expanded={open === category}
                onClick={() => setOpen(open === category ? null : category)}
              >
                {category}
                <span className="text-xl font-normal text-brand sm:hidden" aria-hidden="true">
                  {open === category ? '−' : '+'}
                </span>
              </button>
              <div className={`${open === category ? 'block' : 'hidden'} pb-5 sm:block`}>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px] text-left text-[14px]">
                    <thead>
                      <tr className="text-copy">
                        <th className="w-2/5 pb-3 font-medium">Feature</th>
                        <th className="pb-3 font-medium">Starter</th>
                        <th className="pb-3 font-medium">Growth</th>
                        <th className="pb-3 font-medium">Professional</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr className="border-t border-line text-copy" key={item}>
                          <td className="py-3">{item}</td>
                          <td className="py-3 text-brand" aria-label="Included">
                            ✓
                          </td>
                          <td className="py-3 text-brand" aria-label="Included">
                            ✓
                          </td>
                          <td className="py-3 text-brand" aria-label="Included">
                            ✓
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Transparency() {
  return (
    <section className="container-page py-14 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Pricing transparency</p>
          <h2 className="t-title mt-3 text-ink">Know what your school is paying for.</h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-copy">
            ACS keeps pricing straightforward. Choose the plan that matches your school&apos;s needs and
            see exactly what is included.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <Point title="Clear plans" text="Know the cost and features before you get started." />
          <Point title="Flexible growth" text="Move to a higher plan as your school grows." />
          <Point title="Simple billing" text="Pricing is presented clearly on a per-term basis." />
        </div>
      </div>
    </section>
  )
}

function LaunchOffer() {
  return (
    <section className="border-y border-line bg-ink">
      <div className="container-page flex flex-col gap-7 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="t-eyebrow text-white/70">Launch offer</p>
          <h2 className="t-title mt-3 text-white">Start with 2 months free.</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/75">
            The first 20 schools to join ACS can use their selected plan for 2 months free. Explore the
            platform, set up your school and experience ACS before moving to the regular pricing.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/get-started" className="btn-on-dark">
            Get Started
          </Link>
          <Link href="/contact" className="btn border border-white/30 bg-transparent text-white hover:bg-white/10">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

function Billing() {
  return (
    <section className="container-page py-14 md:py-20">
      <p className="eyebrow">How school pricing works</p>
      <h2 className="t-title mt-3 text-ink">A clear path from setup to regular billing.</h2>
      <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {billingSteps.map((step) => (
          <div key={step.number}>
            <p className="text-[14px] font-semibold text-brand">0{step.number}</p>
            <p className="mt-4 text-[15px] font-semibold text-ink">{step.title}</p>
            <p className="mt-2 text-[14px] leading-6 text-copy">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function PlanGrowth() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-page py-12">
        <h2 className="t-item text-ink">Growing school? Your plan can grow with you.</h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-7 text-copy">
          Move to a higher plan when your school requires additional capabilities or exceeds its current
          pupil range. Our team can help you choose the right next step.
        </p>
      </div>
    </section>
  )
}

function Point({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="text-[15px] font-semibold text-ink">{title}</p>
      <p className="mt-2 text-[14px] leading-6 text-copy">{text}</p>
    </div>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="container-page max-w-[880px] py-14 md:py-20">
      <p className="eyebrow">Questions</p>
      <h2 className="t-title mt-3 text-ink">A few useful answers.</h2>
      <div className="mt-8 border-t border-line">
        {faqs.map((item, index) => (
          <div className="border-b border-line" key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left text-[15px] font-medium text-ink transition-colors hover:text-brand"
              aria-expanded={open === index}
              onClick={() => setOpen(open === index ? null : index)}
            >
              {item.question}
              <span className="text-xl font-normal text-brand" aria-hidden="true">
                {open === index ? '−' : '+'}
              </span>
            </button>
            {open === index && <p className="max-w-2xl pb-5 pr-8 text-[15px] leading-7 text-copy">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact ACS"
        title="Let’s talk about your school."
        description="Have a question about ACS, pricing, onboarding or how the platform works? Our team is ready to help."
      />
      <section className="container-page grid gap-12 pb-20 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-20">
        <div>
          <h2 className="t-title text-ink">We&apos;re here to help.</h2>
          <p className="mt-4 max-w-sm text-[15px] leading-7 text-copy">
            Contact ACS for product questions, pricing, getting started, onboarding, technical support or
            general enquiries.
          </p>
          <div className="mt-10 space-y-6 border-t border-line pt-6">
            <ContactItem title="Support" text="Questions about using ACS." />
            <ContactItem title="Sales & pricing" text="Questions about plans and getting your school started." />
            <ContactItem title="Onboarding" text="Help setting up your school’s ACS workspace." />
          </div>
          <div className="mt-10 border-t border-line pt-6">
            <p className="text-[13px] font-semibold text-ink">Direct lines</p>
            <p className="mt-2 text-[14px] leading-6 text-copy">
              <a className="link-brand" href="tel:+256755038100">
                +256 755 038 100
              </a>
              <br />
              <a className="link-brand" href="mailto:stackkens@gmail.com">
                stackkens@gmail.com
              </a>
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="border-t border-line bg-surface">
        <div className="container-page flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="t-item text-ink">Not ready to contact us yet?</p>
            <p className="mt-2 text-[15px] text-copy">Explore ACS pricing and see which plan fits your school.</p>
          </div>
          <Link href="/pricing" className="btn-primary">
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  )
}

function ContactItem({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-[15px] font-semibold text-ink">{title}</p>
      <p className="mt-1 text-[14px] leading-6 text-copy">{text}</p>
    </div>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  return (
    <form
      className="rounded-[10px] border border-line bg-white p-6 md:p-8"
      noValidate
      onSubmit={async (e) => {
        e.preventDefault()
        if (busy) return
        const fd = new FormData(e.currentTarget)
        const payload = {
          name: String(fd.get('full-name') ?? '').trim(),
          schoolName: String(fd.get('school-name') ?? '').trim(),
          email: String(fd.get('email-address') ?? '').trim(),
          phone: String(fd.get('phone-number') ?? '').trim(),
          topic: String(fd.get('topic') ?? ''),
          message: String(fd.get('message') ?? '').trim(),
        }
        setBusy(true)
        setError('')
        let res: Response
        try {
          res = await fetch(appContactUrl, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(payload),
          })
        } catch {
          setBusy(false)
          setError('Unable to reach ACS. Check your connection and try again.')
          return
        }
        if (!res.ok) {
          let msg = 'Something went wrong. Please try again.'
          try {
            const body = await res.json()
            if (typeof body?.message === 'string') msg = body.message
          } catch {}
          setBusy(false)
          setError(msg)
          return
        }
        setBusy(false)
        setSent(true)
      }}
    >
      {sent ? (
        <div className="py-8" role="status">
          <p className="t-item text-ink">Message received.</p>
          <p className="mt-3 text-[15px] leading-7 text-copy">
            Our team will review your message and get back to you using the contact details you provided.
          </p>
          <button
            type="button"
            className="mt-6 text-[14px] font-semibold text-brand underline underline-offset-4"
            onClick={() => {
              setSent(false)
              setError('')
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="full-name" required />
            <Field label="School name" name="school-name" required />
            <Field label="Email address" name="email-address" type="email" required />
            <Field label="Phone number" name="phone-number" type="tel" hint="Optional" />
            <label className="block sm:col-span-2">
              <span className="form-label">
                What can we help you with?<span aria-hidden="true"> *</span>
              </span>
              <select required name="topic" defaultValue="" className="form-input">
                <option value="" disabled>
                  Select a topic
                </option>
                <option>Product demonstration</option>
                <option>Pricing and available features</option>
                <option>School onboarding</option>
                <option>Technical support</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="form-label">
                Message<span aria-hidden="true"> *</span>
              </span>
              <textarea required name="message" className="form-input min-h-32 resize-y" />
            </label>
          </div>
          {error && (
            <p className="form-alert mt-4" role="alert">
              {error}
            </p>
          )}
          <button className="btn-primary mt-6 w-full sm:w-auto" type="submit" disabled={busy}>
            {busy ? 'Sending…' : 'Send message'}
          </button>
        </>
      )}
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  hint,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  hint?: string
}) {
  return (
    <label className="block">
      <span className="form-label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <input required={required} type={type} name={name} className="form-input" />
      {hint && <span className="form-hint">{hint}</span>}
    </label>
  )
}
