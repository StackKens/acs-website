import { EnquiryForm } from '@/components/pages/enquiry-form'
import { Container, PageHero, Section } from '@/components/ui/primitives'
import { Reveal } from '@/components/ui/reveal'

/**
 * Contact page.
 *
 * Follows the reference: tinted page hero, then the same enquiry form the
 * home page uses, closing with the two short notes. Sharing one form keeps
 * the two routes consistent and means there is a single mailto behaviour to
 * maintain.
 */
export function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Let’s talk about your school"
        title="A more organized school starts with a conversation."
        lead="Request a walkthrough, ask about pricing or discuss onboarding. Your enquiry opens in your email app for you to review and send."
      />

      <Section className="contact">
        <Container>
          <Reveal>
            <EnquiryForm />
          </Reveal>
          <Reveal>
            <p className="t-small">Email ACS directly: stackkens@gmail.com</p>
            <p className="t-small mt-3">
              Please do not include sensitive pupil information in an initial enquiry.
            </p>
          </Reveal>
        </Container>
      </Section>
    </main>
  )
}
