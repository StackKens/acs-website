/** URL of the deployed ACS application (dashboard). */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://vexel-acs-platform.onrender.com'

export const appLoginUrl = `${APP_URL.replace(/\/$/, '')}/login`

/** Self-serve school signup lives in the app. */
export const appSignupUrl = `${APP_URL.replace(/\/$/, '')}/signup`

/** Public contact-form endpoint on the app. */
export const appContactUrl = `${APP_URL.replace(/\/$/, '')}/api/contact`
