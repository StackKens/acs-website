'use client'

import { m } from 'motion/react'
import { ACSMark } from '@/components/acs-mark'
import { CountUp } from '@/components/ui/count-up'
import { Card, Container, Eyebrow, Section } from '@/components/ui/primitives'
import {
  heroCardVariants,
  heroContainerVariants,
  heroItemVariants,
  motionTokens,
} from '@/lib/motion'

/**
 * The home hero, lifted into a client island so the load sequence can run.
 *
 * Order: eyebrow → H1 → lead → buttons → trust line + WhatsApp link, then the
 * dashboard card scales from 0.96, then the attendance bars grow with P4 last.
 * Everything starts at opacity 0.001 so slow JavaScript never leaves the hero
 * blank, and the whole sequence finishes inside 1.2s.
 */

const STATS = [
  { label: 'Pupils', value: 428 },
  { label: 'Present today', value: 406 },
  { label: 'Classes', value: 14 },
]

const BARS = [
  { h: 'h-[70%]' },
  { h: 'h-[90%]' },
  { h: 'h-[76%]' },
  { h: 'h-[100%]', on: true },
  { h: 'h-[88%]' },
  { h: 'h-[62%]' },
  { h: 'h-[80%]' },
]

// P4 (index 3) grows last, after the other six classes.
const BAR_ORDER = [0, 1, 2, 4, 5, 6, 3]

export function HomeHero() {
  return (
    <Section tone="tint" className="py-[clamp(48px,7vw,80px)]" aria-labelledby="hero-title">
      <Container className="grid items-center gap-[clamp(32px,5vw,64px)] nav:grid-cols-2">
        <m.div initial="hidden" animate="visible" variants={heroContainerVariants}>
          <m.div variants={heroItemVariants}>
            <Eyebrow>Less paperwork. More clarity.</Eyebrow>
          </m.div>
          <m.div variants={heroItemVariants}>
            <h1 id="hero-title" className="t-display text-ink">
              Your school. Better organized.
            </h1>
          </m.div>
          <m.div variants={heroItemVariants}>
            <p className="t-lead mt-6 max-w-[460px] text-copy">
              Bring pupil records, attendance and academic results together with Academic Cloud
              System. A practical school management platform, built around primary schools in Uganda.
            </p>
          </m.div>
          <m.div variants={heroItemVariants}>
            <div className="btns mb-6 flex flex-wrap items-center gap-3">
              <a href="/contact" className="btn btn-primary">
                Request a walkthrough
              </a>
              <a href="/features" className="btn btn-ghost">
                Explore ACS
              </a>
            </div>
          </m.div>
          <m.div variants={heroItemVariants}>
            <div className="trust flex flex-wrap items-center gap-2 text-[13px] text-copy">
              <span>Built for primary schools in Uganda</span>
              <span>Designed with pupil privacy in mind</span>
            </div>
            <a
              className="wa"
              href="https://wa.me/256775506426?text=Hello%20ACS%2C%20I%27d%20like%20a%20walkthrough"
            >
              Or message us on WhatsApp →
            </a>
          </m.div>
        </m.div>

        <m.div
          className="preview-frame"
          initial="hidden"
          animate="visible"
          variants={heroCardVariants}
        >
          <Card className="overflow-hidden rounded-hero">
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5">
              <div className="flex min-w-0 items-center gap-2.5">
                <ACSMark size={22} className="shrink-0" title={null} />
                <span className="truncate text-[13.5px] text-copy">Demo Primary School</span>
              </div>
              <em className="shrink-0 text-[10px] font-semibold not-italic tracking-[0.12em] text-brand">
                PREVIEW
              </em>
            </div>

            <div className="p-[clamp(16px,3vw,24px)]">
              <h2 className="t-item text-ink">School overview</h2>
              <p className="mt-3.5 mb-5 text-[13.5px] text-copy">
                Term II, 2026 / Academic overview
              </p>

              <div className="mb-6 grid grid-cols-3 gap-2.5">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-result bg-surface px-3 pb-3.5 pt-3">
                    <small className="block text-[13px] text-copy">{stat.label}</small>
                    <strong className="text-[clamp(22px,3vw,28px)] font-semibold leading-[1.3] tracking-[-0.02em] text-ink tabular-nums">
                      <CountUp to={stat.value} />
                    </strong>
                  </div>
                ))}
              </div>

              <p className="mb-3 text-[13px] font-semibold text-ink">
                Today&apos;s attendance by class
              </p>
              <div
                className="grid h-[110px] grid-cols-7 items-end gap-[clamp(8px,1.4vw,14px)] border-b border-line"
                aria-hidden="true"
              >
                {BARS.map((bar, index) => (
                  <m.div
                    key={index}
                    className={`w-full origin-bottom rounded-t-[3px] ${bar.on ? 'bg-brand' : 'bg-bar'} ${bar.h}`}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: motionTokens.hero.barDuration,
                      ease: motionTokens.ease,
                      delay:
                        motionTokens.hero.barsDelay +
                        BAR_ORDER.indexOf(index) * motionTokens.hero.barStagger,
                    }}
                  />
                ))}
              </div>
              <div
                className="mt-3 mb-[18px] grid grid-cols-7 gap-[clamp(8px,1.4vw,14px)] text-center text-[12.5px] text-copy"
                aria-hidden="true"
              >
                {['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>

              <p className="text-[11px] text-copy">Illustrative interface · All figures are sample data</p>
            </div>
          </Card>
        </m.div>
      </Container>
    </Section>
  )
}
