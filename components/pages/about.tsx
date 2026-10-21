import { Column, Container, Cta, PageHero, Section, Split } from '@/components/ui/primitives'

/**
 * About page.
 *
 * Follows the reference: tinted page hero, a split statement followed by
 * three columns, and the tinted closing band. The copy states only what is
 * verifiable about ACS — no founding date, founder biographies, office
 * address, affiliation, award, customer or partner claim.
 */

const columns = [
  {
    label: 'Practical',
    title: 'Made for primary schools',
    body: 'Designed around how primary schools in Uganda run their day, from register to report card.',
  },
  {
    label: 'Clear',
    title: 'Less to hunt for',
    body: 'Information lives in one organized place instead of scattered books and files.',
  },
  {
    label: 'Careful',
    title: 'Pupil information stays private',
    body: 'Please keep sensitive pupil details out of first enquiries. We will agree what is needed during setup.',
  },
]

export function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Starting with Uganda"
        title="Built around the work behind learning."
        lead="A well-run school depends on a great deal of work beyond the classroom. ACS is being developed to make that work more organized, starting with the practical needs of primary schools in Uganda."
      />

      <Section>
        <Container>
          <Split title="Not a school website builder.">
            A working environment for the records, routines and academic information your team manages
            every day.
          </Split>

          <div className="grid gap-9 md:grid-cols-3 md:gap-8">
            {columns.map((item) => (
              <Column key={item.label} label={item.label} title={item.title}>
                {item.body}
              </Column>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Cta
            title="A more organized school starts with a conversation."
            href="/contact"
            label="Get Started"
          />
        </Container>
      </Section>
    </main>
  )
}
