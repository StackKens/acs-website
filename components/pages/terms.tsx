import Link from 'next/link'
import { Container, PageHero, Section } from '@/components/ui/primitives'
import { DraftNotice } from './draft-notice'

const sections = [
  {
    id: 'agreement',
    title: 'The agreement',
    body: [
      'These terms govern the use of the ACS platform by a school. Access to the platform is provided under the plan the school has selected, and the plan, its price and its billing period are shown on the pricing page and in the school’s Settings ▸ Plan & Billing.',
      'To be finalised before this document is in force: the contracting entity, the governing law and jurisdiction, and the process for terminating and re-entering an agreement.',
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts and access',
    body: [
      'A school’s administrator creates the accounts for its staff. Every person who uses ACS does so under an account belonging to that school, using credentials issued by the school.',
      'Staff sign in with the school name, their email address and a password. Parents and guardians sign in with the school name, the phone number the school registered for them, and a password. Each person is responsible for the activity carried out under their account, and should keep their password to themselves.',
      'The school is responsible for keeping its list of staff, pupils and guardians accurate — deactivating accounts for people who have left, and correcting details that are wrong.',
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: [
      'ACS is for the management of a school’s own operations. A school may not use its workspace to store material unrelated to that school, and may not attempt to access another school’s information or the platform’s own administrative area.',
      'Users are responsible for the accuracy of the information they enter and for the material they send to parents through the platform. Material sent by SMS is sent to the phone numbers the school has recorded.',
    ],
  },
  {
    id: 'records',
    title: 'Records, results and receipts',
    body: [
      'Released results and published report cards are the school’s record for that term and cannot be edited after release. Corrections are made by creating new records. Issued receipts and invoices are permanent, and corrections are made with a reversal that is recorded in the audit trail rather than by editing history.',
      'This is a feature of the product’s design rather than a restriction imposed on the school, and it is the reason a school can rely on what the platform holds.',
    ],
  },
  {
    id: 'availability',
    title: 'Availability and support',
    body: [
      'ACS is a cloud service and is intended to be available continuously. Any signed-in school member can raise a support ticket from the Support section and follow the replies there. Before a school is set up, support is available through the contact page, by email at stackkens@gmail.com, or by phone on +256 755 038 100.',
      'The 2-month introductory offer applies to the first 20 schools to join ACS, on the plan each school selects. After that period, the school continues on its selected plan at the normal per-term price shown on the pricing page. Our team confirms eligibility and the next steps with each school.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to the service and these terms',
    body: [
      'The platform is developed continuously, and the set of modules, limits and operational features within a plan may change as the product improves. The plan a school is on, and the limits that apply to it, are visible in the school’s own settings.',
      'These terms may be updated as the product and the law around it change. A published version of these terms is available on this page, and the version in force for a school is the one published at the time it signed up.',
      'To be finalised before this document is in force: the notice period for changes to these terms, and how a school is informed of them.',
    ],
  },
  {
    id: 'liability',
    title: 'Liability',
    body: [
      'To be finalised before this document is in force. This section needs to be settled with a lawyer and with the owner, and is deliberately left unwritten here rather than guessed.',
    ],
  },
]

export function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Terms of use"
        title="The terms on which ACS is provided."
        lead="A plain-language draft of the terms a school accepts when it uses ACS. It is published so it can be read before anyone signs up."
      >
        <div className="mt-8">
          <DraftNotice document="terms of use" />
        </div>
      </PageHero>

      <Section aria-labelledby="terms-content-title">
        <Container className="max-w-[880px]">
          <h2 id="terms-content-title" className="sr-only">
            Terms of use draft
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
            This document is a draft. Where a clause is not yet settled — the contracting entity,
            governing law, notice periods and liability — it says so rather than inventing an
            answer.{' '}
            <Link href="/contact" className="link-brand">
              Ask us a question
            </Link>{' '}
            if a school needs this clarified before signing up.
          </p>
        </div>
        </Container>
      </Section>
    </main>
  )
}
