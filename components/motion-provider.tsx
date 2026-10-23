'use client'

import { LazyMotion, MotionConfig, domMax } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * MotionProvider — one LazyMotion context for the whole app.
 *
 * `domMax` includes layout animations, which the Features tab pill needs for
 * its shared `layoutId`. `reducedMotion="user"` disables transform animations
 * (fades remain) for visitors who ask their OS to reduce motion.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domMax}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
