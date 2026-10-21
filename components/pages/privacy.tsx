import Link from 'next/link'
import { Container, PageHero, Section } from '@/components/ui/primitives'
import { DraftNotice } from './draft-notice'

const sections = [
  {
    id: 'information-collected',
    title: 'Information held in the platform',
    body: [
      'ACS holds the information a school records against its own workspace. Depending on what the school uses, that includes pupil details such as admission numbers, names, date of birth, class and stream allocation, emergency contacts and linked guardian contacts; attendance recorded for each pupil in each session; assessment marks, results, positions and remarks; fee structures, payments, balances and receipts; staff records, teaching allocations and contact details; and the announcements, notices and support tickets a school creates.',
      'Parent and guardian information is entered by the school, including the phone number a parent uses to sign in to the parent portal.',
    ],
  },
  {
    id: 'why',
    title: 'Why the information is held',
    body: [
      'The information is held so that the school can run its own operations: to record attendance, to compile results, to collect and account for fees, to produce reports, and to communicate with parents. It is held to provide the service the school signed up for, and for no other purpose.',
    ],
  },
  {
    id: 'access',
    title: 'Who can see it',
    body: [
      'Each school operates in its own isolated workspace. A school’s data is not visible to any other school.',
      'Within a school, access depends on role. Administrators and head teachers have the widest access. Teachers see the pupils, classes and subjects assigned to them. Finance officers own fee collection and can see the directories in read-only form. Parents and guardians see the children linked to them, their attendance, their released results, their fee balance and the announcements addressed to them.',
      'Results and report cards are not visible to parents until the school releases them. The ACS platform team operates schools, billing and support from a separate area of the service that school accounts do not have access to.',
    ],
  },
  {
    id: 'audit',
    title: 'Changes and accountability',
    body: [
      'Sensitive actions are recorded in an audit trail and activity feed. Administrators can review who changed what, and when. Released results and published report cards cannot be edited after release; corrections are made through new records. Issued receipts and invoices are permanent records, and a correction is made with an audited reversal rather than by editing history.',
      'Deleting a wrong attendance day is an audited action. Deactivating a staff account is an audited action.',
    ],
  },
  {
    id: 'security',
    title: 'How it is protected',
    body: [
      'Access to the platform is by account, and accounts are created by the school. Sensitive actions are permissioned by role rather than granted universally. School data is kept in a cloud environment with automated backups, so that a school’s records are not dependent on a single device or a paper file.',
      'The platform is designed to work on ordinary connections, including low-bandwidth environments.',
    ],
  },
  {
    id: 'retention',
    title: 'How long information is kept',
    body: [
      'To be confirmed by the owner before this document is finalised.',
      'The platform does hold records that a school may later need — for example, an attendance record from a previous term, or a receipt from a closed financial year — and deleting them early would leave the school with a partial history. The specific retention periods, and what happens to a school’s data when its subscription ends, have not yet been set and are not stated here.',
    ],
  },
  {
    id: 'rights',
    title: 'Your rights and how to ask',
    body: [
      'If you are a parent or guardian and want to know what the school holds about your child, or you want something corrected or removed, the fastest route is to ask the school, because the school is the party that records the information and decides what it keeps.',
      'If you want to raise a question with the ACS team itself, contact us and we will point you to the right person. Contact details are on the contact page.',
    ],
  },
  {
    id: 'website',
    title: 'What this website collects',
    body: [
      'The contact form on this site asks for a name, school name, email address, an optional phone number, an enquiry topic and a message. That information is sent to the ACS team so the enquiry can be answered. It is not used for anything else.',
      'The pricing, features, guide and about pages set no cookies and run no analytics or advertising trackers. The site does not embed third-party advertising or social media content.',
    ],
  },
  {
    id: 'contact',
    title: 'Contacting us about privacy',
    body: [
      'Questions about privacy can be sent through the contact page, or by email to stackkens@gmail.com, or by phone to +256 755 038 100. If your school has signed in, a support ticket raised from the Support section is also a direct route to the team.',
    ],
  },
]

export function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="How ACS handles information."
        lead="This page describes how the information a school records in ACS is held, who can see it, and what happens to an enquiry sent through this website."
      >
        <div className="mt-8">
          <DraftNotice document="privacy policy" />
        </div>
      </PageHero>

      <Section aria-labelledby="privacy-content-title">
        <Container className="max-w-[880px]">
          <h2 id="privacy-content-title" className="sr-only">
            Privacy policy draft
          </h2>
          <nav aria-label="Sections" className="border-y border-line py-4">
            <ul className="flex flex-wrap gap-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex min-h-11 items-center rounded-btn border border-line bg-white px-3 text-[13px] font-medium text-copy transition-colors hover:border-brand hover:text-ink"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-24">
              <h3 className="t-item text-ink">{s.title}</h3>
              {s.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-3 text-[15px] leading-7 text-copy">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-[13px] leading-6 text-copy">
            This document is a draft. Where something is not yet decided — retention periods in
            particular — it says so rather than guessing.{' '}
            <Link href="/contact" className="link-brand">
              Raise a question
            </Link>{' '}
            if something here is unclear.
          </p>
        </div>
        </Container>
      </Section>
    </main>
  )
}
