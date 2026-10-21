export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://vexel-acs-platform.onrender.com'

export const appLoginUrl = `${APP_URL.replace(/\/$/, '')}/login`

export const appSignupUrl = `${APP_URL.replace(/\/$/, '')}/signup`

export const appContactUrl = `${APP_URL.replace(/\/$/, '')}/api/contact`

/** The canonical origin of the marketing site. */
export const SITE_URL = 'https://acs-website.onrender.com'

/** Canonical URL for a route, for example `/pricing`. */
export function canonical(path = '/') {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}
