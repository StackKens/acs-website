import type { Variants } from 'motion/react'

/**
 * Motion tokens — the only source of truth for timing, easing and distance.
 *
 * The feel is calm and premium: a soft ease-out-expo, 0.7s reveals and a 20px
 * rise. Nothing bounces, overshoots, rotates or scales beyond 0.96 → 1.
 */
export const motionTokens = {
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: {
    reveal: 0.7,
    interaction: 0.25,
    count: 0.9,
  },
  distance: 20,
  stagger: 0.08,
  viewport: { once: true, amount: 0.2 },
  hero: {
    distance: 16,
    cardDelay: 0.25,
    cardScale: 0.96,
    barsDelay: 0.3,
    barStagger: 0.05,
    barDuration: 0.35,
  },
  timeline: {
    circleScale: 0.8,
    circleDuration: 0.5,
  },
  faq: {
    duration: 0.25,
  },
} as const

/**
 * Fade + 20px rise. `delay` is only for choreographed groups; ordinary page
 * sections should use the default so the rhythm stays consistent.
 */
export function revealVariants(delay = 0): Variants {
  return {
    hidden: { opacity: 0.001, y: motionTokens.distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTokens.duration.reveal,
        ease: motionTokens.ease,
        delay,
      },
    },
  }
}

/**
 * Parent orchestration for grids and lists: children reveal one after another,
 * left to right, with a 0.08s stagger.
 */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: motionTokens.stagger },
  },
}

/**
 * The child counterpart to Stagger. Fade and rise only — never scale, so the
 * grid keeps its measured layout.
 */
export const staggerItemVariants: Variants = revealVariants()

/**
 * Home hero load sequence: text items stagger in, then the preview card scales
 * from 0.96. Everything starts at opacity 0.001 so a slow script never leaves
 * a blank hero.
 */
export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: motionTokens.stagger },
  },
}

export const heroItemVariants: Variants = {
  hidden: { opacity: 0.001, y: motionTokens.hero.distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.reveal,
      ease: motionTokens.ease,
    },
  },
}

export const heroCardVariants: Variants = {
  hidden: { opacity: 0.001, scale: motionTokens.hero.cardScale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.duration.reveal,
      ease: motionTokens.ease,
      delay: motionTokens.hero.cardDelay,
    },
  },
}
