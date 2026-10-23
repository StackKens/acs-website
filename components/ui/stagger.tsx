'use client'

import { m } from 'motion/react'
import type { ReactNode } from 'react'
import { motionTokens, staggerContainerVariants, staggerItemVariants } from '@/lib/motion'

/**
 * Stagger — wraps a grid or list so its children reveal one after another,
 * left to right. Use with StaggerItem; do not nest other motion components
 * between the two or the stagger timing is lost.
 */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={motionTokens.viewport}
      variants={staggerContainerVariants}
    >
      {children}
    </m.div>
  )
}

/**
 * StaggerItem — one child of Stagger. Fade + 20px rise, nothing else.
 */
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div className={className} variants={staggerItemVariants}>
      {children}
    </m.div>
  )
}
