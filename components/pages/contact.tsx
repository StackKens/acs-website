'use client'

import Link from 'next/link'
import { useState } from 'react'
import { appContactUrl } from '@/lib/site'

const topics = [
  'Product demonstration',
  'Pricing and available features',
  'School onboarding',
  'Technical support',
  'Other',
]

interface Errors {
  name?: string
  schoolName?: string
  email?: string
  topic?: string
  message?: string
}

/** Practical email check — one @, a domain, no spaces. */
function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

export function ContactPage() {
  const [values, setValues] = useState({
    name: '',
    schoolName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  function update(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function validate() {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!values.schoolName.trim()) next.schoolName = 'Enter your school name.'
    if (!values.email.trim()) {
      next.email = 'Enter your email address.'
    } else if (!isValidEmail(values.email.trim())) {
      next.email = 'Enter a valid email address, for example name@school.ac.ug.'
    }
    if (!values.topic) next.topic = 'Choose what your enquiry is about.'
    if (!values.message.trim()) {
      next.message = 'Tell us a little about what you need.'
    } else if (values.message.trim().length < 10) {
      next.message = 'Please add a little more detail.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    if (!validate()) {
      setStatus('idle')
      const firstInvalid = document.querySelector<HTMLElement>('[aria-invalid="true"]')
      firstInvalid?.focus()
      return
    }

    setStatus('sending')
    setServerError('')
    try {
      const res = await fetch(appContactUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          schoolName: values.schoolName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          topic: values.topic,
          message: values.message.trim(),
        }),
      })
      if (!res.ok) {
        let message = 'Something went wrong on our side. Please try again.'
        try {
          const body = await res.json()
          if (typeof body?.message === 'string') message = body.message
        } catch {}
        setServerError(message)
        setStatus('error')
        return
      }
      setStatus('sent')
    } catch {
      setServerError(
        'We could not send your message from this browser. Please call +256 755 038 100 or email stackkens@gmail.com and we will pick it up from there.',
      )
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <main>
        <section className="container-page flex min-h-[60vh] items-center py-16 md:py-24">
          <div className="max-w-xl">
            <p className="eyebrow">Enquiry sent</p>
            <h1 className="t-title mt-3 text-ink">Message received.</h1>
            <p className="t-body mt-4 text-copy">
              Thank you. Our team will review your message and get back to you using the contact
              details you provided — usually within one working day.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-copy">
              If your school is waiting on a request, call{' '}
              <a href="tel:+256755038100" className="link-brand">
                +256 755 038 100
              </a>{' '}
              or email{' '}
              <a href="mailto:stackkens@gmail.com" className="link-brand">
                stackkens@gmail.com
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setValues({ name: '', schoolName: '', email: '', phone: '', topic: '', message: '' })
                  setErrors({})
                  setServerError('')
                  setStatus('idle')
                }}
              >
                Send another message
              </button>
              <Link href="/features" className="btn-secondary">
                Explore the features
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="container-page pb-12 pt-14 md:pt-20">
        <p className="eyebrow">Contact ACS</p>
        <h1 className="t-display mt-4 max-w-[16ch] text-ink">Let’s talk about your school.</h1>
        <p className="t-body mt-6 max-w-2xl text-copy">
          Have a question about ACS, pricing, onboarding or how the platform works? Send us a
          message and the team will get back to you using the details you provide.
        </p>
      </section>

      <section className="container-page grid gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="t-item text-ink">We’re here to help.</h2>
          <p className="mt-3 text-[15px] leading-7 text-copy">
            Ask about the product, pricing, getting started, onboarding, technical support, or
            anything else.
          </p>

          <div className="mt-8 space-y-6 border-t border-line pt-6">
            {[
              { title: 'Product demonstration', text: 'See the platform and how it fits your school.' },
              { title: 'Sales & pricing', text: 'Questions about plans and which one fits.' },
              { title: 'Onboarding', text: 'Help setting up your school’s ACS workspace.' },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-[15px] font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-[14px] leading-6 text-copy">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="text-[13px] font-semibold text-ink">Direct lines</p>
            <p className="mt-2 text-[14px] leading-7 text-copy">
              <a className="link-brand" href="tel:+256755038100">
                +256 755 038 100
              </a>
              <br />
              <a className="link-brand" href="mailto:stackkens@gmail.com">
                stackkens@gmail.com
              </a>
            </p>
            <p className="mt-4 text-[13px] leading-6 text-copy">
              Already using ACS? Signed-in staff can raise a support ticket from the Support section
              of the app.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="card card-pad">
          <h2 className="t-item text-ink">Send an enquiry</h2>
          <p className="mt-2 text-[14px] leading-6 text-copy">
            Fields marked <span aria-hidden="true">*</span>
            <span className="sr-only">with an asterisk</span> are required.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Full name"
              value={values.name}
              onChange={(v) => update('name', v)}
              error={errors.name}
              autoComplete="name"
              required
            />
            <Field
              id="schoolName"
              label="School name"
              value={values.schoolName}
              onChange={(v) => update('schoolName', v)}
              error={errors.schoolName}
              autoComplete="organization"
              required
            />
            <Field
              id="email"
              label="Email address"
              type="email"
              value={values.email}
              onChange={(v) => update('email', v)}
              error={errors.email}
              autoComplete="email"
              required
            />
            <Field
              id="phone"
              label="Phone number"
              type="tel"
              value={values.phone}
              onChange={(v) => update('phone', v)}
              hint="Optional"
              autoComplete="tel"
            />

            <div className="sm:col-span-2">
              <label htmlFor="topic" className="form-label">
                What can we help you with?
                <span aria-hidden="true"> *</span>
              </label>
              <select
                id="topic"
                name="topic"
                required
                value={values.topic}
                onChange={(e) => update('topic', e.target.value)}
                aria-invalid={errors.topic ? 'true' : undefined}
                aria-describedby={errors.topic ? 'topic-error' : undefined}
                className="form-input"
              >
                <option value="" disabled>
                  Select a topic
                </option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              {errors.topic && (
                <p id="topic-error" className="form-error" role="alert">
                  {errors.topic}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="form-label">
                Message
                <span aria-hidden="true"> *</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                aria-invalid={errors.message ? 'true' : undefined}
                aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                className="form-input min-h-32 resize-y"
                placeholder="Tell us about your school, how many pupils it has, and what you are trying to fix."
              />
              {errors.message ? (
                <p id="message-error" className="form-error" role="alert">
                  {errors.message}
                </p>
              ) : (
                <p id="message-hint" className="form-hint">
                  The more we know about your school, the more useful our answer will be.
                </p>
              )}
            </div>
          </div>

          {serverError && (
            <p className="form-alert mt-5" role="alert">
              {serverError}
            </p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'sending'}
              aria-busy={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p className="text-[13px] text-copy">
              We reply using the contact details you provide.
            </p>
          </div>
        </form>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="container-page flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="t-item text-ink">Not ready to contact us yet?</p>
            <p className="mt-2 text-[15px] text-copy">
              Explore ACS pricing and see which plan fits your school.
            </p>
          </div>
          <Link href="/pricing" className="btn-primary shrink-0">
            View pricing
          </Link>
        </div>
      </section>
    </main>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  error,
  hint,
  required = false,
  autoComplete,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  error?: string
  hint?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className="form-input"
      />
      {error ? (
        <p id={`${id}-error`} className="form-error" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="form-hint">
          {hint}
        </p>
      ) : null}
    </div>
  )
}
