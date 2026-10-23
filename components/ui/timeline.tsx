'use client'

import { m } from 'motion/react'
import type { ReactNode } from 'react'
import { ScrollLine } from '@/components/ui/scroll-line'
import { motionTokens } from '@/lib/motion'
import { cn } from '@/lib/utils'

/**
 * Timeline — the vertical journey used by How It Works. The rule draws itself
 * with scroll progress, while each circle scales from 0.8 to 1 as it is
 * reached. `ring` must match the section background.
 */
export function Timeline({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative grid max-w-[760px] gap-9 pl-14', className)}>
      <ScrollLine className="absolute inset-y-2 left-[19px] w-0.5" />
      {children}
    </div>
  )
}

export function TimelineItem({
  n,
  title,
  text,
  ring = 'white',
  children,
}: {
  n: number
  title: string
  text: string
  ring?: 'white' | 'tint'
  children?: ReactNode
}) {
  return (
    <m.div
      className="relative"
      initial={{ opacity: 0.001, y: motionTokens.distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionTokens.viewport}
      transition={{ duration: motionTokens.duration.reveal, ease: motionTokens.ease }}
    >
      <m.span
        className={cn(
          'absolute -left-14 top-0 grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-semibold text-white ring-[6px]',
          ring === 'white' ? 'ring-white' : 'ring-surface',
        )}
        initial={{ scale: motionTokens.timeline.circleScale }}
        whileInView={{ scale: 1 }}
        viewport={motionTokens.viewport}
        transition={{
          duration: motionTokens.timeline.circleDuration,
          ease: motionTokens.ease,
        }}
      >
        {n}
      </m.span>
      <h3 className="t-item text-ink">{title}</h3>
      <p className="mt-2 max-w-[560px] text-copy">{text}</p>
      {children}
    </m.div>
  )
}
