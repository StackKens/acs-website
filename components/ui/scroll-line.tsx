'use client'

import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

/**
 * ScrollLine — a vertical rule that draws from top to bottom as the timeline
 * scrolls past. Use as the connecting line behind TimelineItem circles.
 *
 * The outer element is the scroll target and reserves the track's space; the
 * inner element is the only part that scales, so measuring and animating
 * cannot feed back into each other.
 */
export function ScrollLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.4 })

  return (
    <div ref={ref} aria-hidden="true" className={cn('pointer-events-none', className)}>
      <m.div
        className="h-full w-full origin-top bg-line-soft"
        style={{ scaleY: reduced ? 1 : scaleY }}
      />
    </div>
  )
}
