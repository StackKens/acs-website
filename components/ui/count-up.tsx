'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { motionTokens } from '@/lib/motion'

/**
 * CountUp — counts from 0 to `to` over ~0.9s the first time it is 20% visible.
 *
 * Reduced-motion visitors get the final value immediately. The initial render
 * is 0 on both server and client, so hydration stays stable.
 */
export function CountUp({ to, className }: { to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, motionTokens.viewport)
  const reduced = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return

    const controls = animate(0, to, {
      duration: motionTokens.duration.count,
      ease: motionTokens.ease,
      onUpdate: (latest) => setValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [inView, reduced, to])

  return (
    <span ref={ref} className={className}>
      {reduced ? to : value}
    </span>
  )
}
