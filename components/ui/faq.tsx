'use client'

import { useId, useState } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { Reveal } from '@/components/ui/reveal'
import { motionTokens } from '@/lib/motion'
import { cn } from '@/lib/utils'

export type FaqItem = {
  question: string
  answer: string
}

/**
 * Faq — the site's accordion. The answer stays in the HTML (height 0) so it is
 * indexable, and the panel opens/closes by animating height over 0.25s, the one
 * place where animating height is allowed.
 */
export function Faq({ items, className }: { items: FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null)
  const reduced = useReducedMotion()
  const baseId = useId()

  return (
    <Reveal className={cn('max-w-[760px]', className)}>
      {items.map((item, index) => {
        const isOpen = open === index
        const buttonId = `${baseId}-faq-button-${index}`
        const panelId = `${baseId}-faq-panel-${index}`

        return (
          <div key={item.question} className="border-t border-line last:border-b">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full cursor-pointer list-none items-start justify-between gap-4 py-[18px] text-left text-[17px] font-semibold text-ink"
            >
              {item.question}
              <span aria-hidden="true" className="text-2xl leading-none text-brand">
                {isOpen ? '–' : '+'}
              </span>
            </button>

            <m.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{
                duration: reduced ? 0 : motionTokens.faq.duration,
                ease: motionTokens.ease,
              }}
              className="overflow-hidden"
            >
              <p className="max-w-[640px] pb-[18px] text-copy">{item.answer}</p>
            </m.div>
          </div>
        )
      })}
    </Reveal>
  )
}
