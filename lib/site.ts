/** URL of the deployed ACS application (dashboard). */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://vexel-acs-platform.onrender.com'

export const appLoginUrl = `${APP_URL.replace(/\/$/, '')}/login`
