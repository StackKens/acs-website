'use client'

import { m } from 'motion/react'
import type { ReactNode } from 'react'
import { motionTokens, revealVariants } from '@/lib/motion'

/**
 * Reveal — fades and lifts a block into view once, when 20% of it is visible.
 *
 * Drop-in replacement for the previous IntersectionObserver version: existing
 * pages pass the same `children` and `className`, and `delay` is optional for
 * choreographed groups.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={motionTokens.viewport}
      variants={revealVariants(delay)}
    >
      {children}
    </m.div>
  )
}
