"use client";
import { useState, type FormEvent } from "react";
import { C, PageHero, primary, shadow, wrap, WA, EMAIL, PHONE } from "@/components/acs/ui";

const TOPICS = ["A product demonstration", "Pricing", "Onboarding", "Something else"];
const field = `mt-2 w-full rounded-xl border px-4 py-3 text-[16px] ${C.line} ${C.surf} ${C.text} placeholder:text-[#667085]/70 focus:border-[#3867F5] focus:outline-none focus:ring-2 focus:ring-[#3867F5]/30`;
const label = `block text-[15px] font-semibold ${C.text}`;

export default function AcsContact() {
  const [f, setF] = useState({ name: "", school: "", email: "", topic: TOPICS[0], message: "" });
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  function submit(e: FormEvent) {
    e.preventDefault();
    const subject = `ACS enquiry: ${f.topic} (${f.school})`;
    const body = `Name: ${f.name}\nSchool: ${f.school}\nEmail: ${f.email}\nInterested in: ${f.topic}\n\n${f.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className={`min-h-screen bg-[#F7F8FA] pt-[env(safe-area-inset-top)] font-[family-name:var(--font-inter),system-ui,-apple-system,'Segoe_UI',sans-serif] text-[17px] font-medium leading-relaxed antialiased dark:bg-[#101C35] ${C.body}`}>
      <PageHero
        eyebrow="Let’s talk about your school"
        title="A more organized school starts with a conversation."
        lead="Request a walkthrough, ask about pricing or discuss onboarding. Your enquiry opens in your email app for you to review and send."
      />

      <section className="pb-20 md:pb-28">
        <div className={`${wrap} grid items-start gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-16`}>
          <div className="grid gap-6">
            <div>
              <h2 className={`text-lg font-semibold ${C.text}`}>Prefer to message us?</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={WA("Hello ACS, I'd like a walkthrough")} className={primary}>Message on WhatsApp</a>
              </div>
            </div>
            <dl className="grid gap-5 text-[15px]">
              <div>
                <dt className={`font-semibold ${C.text}`}>Email ACS directly</dt>
                <dd><a href={`mailto:${EMAIL}`} className={`underline decoration-[#3867F5]/40 underline-offset-4 hover:decoration-[#3867F5]`}>{EMAIL}</a></dd>
              </div>
              <div>
                <dt className={`font-semibold ${C.text}`}>Phone</dt>
                <dd><a href={`tel:${PHONE.replace(/\s/g, "")}`} className="underline decoration-[#3867F5]/40 underline-offset-4 hover:decoration-[#3867F5]">{PHONE}</a></dd>
              </div>
            </dl>
            <p className={`rounded-2xl p-5 text-[15px] ${C.tint}`}>Please do not include sensitive pupil information in an initial enquiry.</p>
          </div>

          <form onSubmit={submit} className={`grid gap-5 rounded-[24px] border p-7 md:p-9 ${C.line} ${C.surf} ${shadow}`}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={label}>Your name
                <input required autoComplete="name" value={f.name} onChange={set("name")} className={field} />
              </label>
              <label className={label}>School name
                <input required autoComplete="organization" value={f.school} onChange={set("school")} className={field} />
              </label>
            </div>
            <label className={label}>Email address
              <input required type="email" autoComplete="email" value={f.email} onChange={set("email")} className={field} />
            </label>
            <label className={label}>I’m interested in
              <select required value={f.topic} onChange={set("topic")} className={field}>
                {TOPICS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className={label}>Tell us a little about your school
              <textarea rows={5} value={f.message} onChange={set("message")} className={field} />
            </label>
            <div>
              <button type="submit" className={`${primary} w-full sm:w-auto`}>Prepare enquiry email</button>
              <p className="mt-3 text-[13px]">Opens your email app. Review and send your enquiry there.</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}