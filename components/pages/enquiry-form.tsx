'use client'

import type { FormEvent } from 'react'

export const ENQUIRY_EMAIL = 'stackkens@gmail.com'

const topics = ['A product demonstration', 'Pricing', 'Onboarding', 'Something else']

/**
 * Homepage enquiry form.
 *
 * Matches the reference: a 2×2 grid that becomes one column below 640px,
 * followed by a full-width message field. Submitting composes a mailto
 * enquiry in the visitor's own email app — no account, no server round
 * trip, and nothing is sent until they review it.
 */
export function EnquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const value = (key: string) => String(data.get(key) ?? '').trim()

    const name = value('name')
    const school = value('school')
    const email = value('email')
    const topic = value('topic')
    const message = value('msg')

    const body = `Name: ${name}\nSchool: ${school}\nEmail: ${email}\nInterested in: ${topic}\n\n${message}`
    const subject = `ACS enquiry: ${topic}`

    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 grid grid-cols-1 gap-x-6 gap-y-4 rounded-hero bg-surface p-[clamp(18px,3vw,22px)] sm:grid-cols-2"
    >
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-[12px] text-copy">
          Your name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Full name"
          autoComplete="name"
          required
          className="form-input text-[13.5px]"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="school" className="text-[12px] text-copy">
          School name
        </label>
        <input
          id="school"
          name="school"
          placeholder="Your primary school"
          required
          className="form-input text-[13.5px]"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="email" className="text-[12px] text-copy">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          className="form-input text-[13.5px]"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="topic" className="text-[12px] text-copy">
          I’m interested in
        </label>
        <select id="topic" name="topic" defaultValue={topics[0]} className="form-input text-[13.5px]">
          {topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-1.5 sm:col-span-2">
        <label htmlFor="msg" className="text-[12px] text-copy">
          Tell us a little about your school
        </label>
        <textarea
          id="msg"
          name="msg"
          placeholder="What would you like to discuss?"
          className="form-input min-h-[104px] resize-y py-3 text-[13.5px]"
        />
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="btn-primary">
          Prepare enquiry email
        </button>
        <span className="text-[12px] text-copy">
          Opens your email app. Review and send your enquiry there.
        </span>
      </div>
    </form>
  )
}
