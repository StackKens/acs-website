import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Container — the single horizontal rhythm for the whole site.
 *
 * Max width and side padding come from the design tokens in globals.css
 * (`clamp(20px, 4vw, 48px)`), so no page passes its own padding.
 */
export function Container({ className, children, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('container-page', className)} {...rest}>
      {children}
    </div>
  )
}

/**
 * Section — the vertical rhythm. `tone="tint"` paints the alternating
 * --tint bands used throughout the marketing page.
 */
export function Section({
  tone = 'white',
  className,
  children,
  ...rest
}: { tone?: 'white' | 'tint' } & ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn('section-y', tone === 'tint' && 'bg-surface', className)}
      {...rest}
    >
      {children}
    </section>
  )
}

/**
 * Eyebrow — the small uppercase label above a heading.
 * Rendering is a <p>; the heading level stays with the heading element.
 */
export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return <p className={cn('t-eyebrow', className)}>{children}</p>
}

type ButtonVariant = 'primary' | 'ghost'

type ButtonBase = {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type ButtonAsLink = ButtonBase & { href: string; external?: boolean }
type ButtonAsButton = ButtonBase & { href?: undefined } & {
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
}

/**
 * Button — the reference defines exactly two variants: primary and ghost.
 *
 * Renders an <a>, a next/link, or a <button> depending on `href`, so the
 * visual style stays identical while the semantics stay correct.
 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', className } = props
  const classes = cn(variantClass[variant], className)

  if (props.href !== undefined) {
    const isExternal = props.external || /^(https?:|mailto:|tel:)/.test(props.href)
    if (isExternal) {
      return (
        <a href={props.href} className={classes} rel="noreferrer">
          {props.children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    )
  }

  return (
    <button type={props.type ?? 'button'} className={classes} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

/**
 * Card — a bordered surface. `tone="tint"` uses the pale blue panel fill,
 * `tone="white"` the plain card used for results and pricing.
 */
export function Card({
  tone = 'white',
  className,
  children,
  ...rest
}: { tone?: 'white' | 'tint' } & ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('card', tone === 'tint' && 'bg-surface', className)} {...rest}>
      {children}
    </div>
  )
}
