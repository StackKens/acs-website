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

/**
 * PageHero — the tinted band that opens every inner page: eyebrow, page
 * heading and lead. Kept separate from Section so the band's tighter
 * vertical rhythm stays consistent across pages.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string
  title: string
  lead?: string
  children?: ReactNode
}) {
  return (
    <section className="bg-surface py-[clamp(48px,7vw,80px)]">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="t-display mb-6 max-w-[760px] text-ink">{title}</h1>
        {lead && <p className="t-lead max-w-[520px] text-copy">{lead}</p>}
        {children}
      </Container>
    </section>
  )
}

/**
 * Column — a three-up item with the reference's 2px primary top rule.
 */
export function Column({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <article className="border-t-2 border-brand pt-[18px]">
      <p className="t-eyebrow mb-3.5 text-[10.5px]">{label}</p>
      <h3 className="t-item mb-3 text-ink">{title}</h3>
      <p className="text-[15.5px] text-copy">{children}</p>
    </article>
  )
}

/**
 * Split — a heading on the left and a short paragraph on the right, which
 * stacks below 768px.
 */
export function Split({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
      <h2 className="max-w-[520px] text-ink">{title}</h2>
      <p className="max-w-[420px] text-copy">{children}</p>
    </div>
  )
}

/**
 * Cta — the tinted closing band shared by the inner pages.
 */
export function Cta({ title, href, label }: { title: string; href: string; label: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 rounded-panel bg-surface p-[clamp(28px,5vw,48px)]">
      <h2 className="max-w-[560px] text-ink">{title}</h2>
      <Button href={href}>{label}</Button>
    </div>
  )
}
