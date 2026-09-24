export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://vexel-acs-platform.onrender.com'

export const appLoginUrl = `${APP_URL.replace(/\/$/, '')}/login`

export const appSignupUrl = `${APP_URL.replace(/\/$/, '')}/signup`

export const appContactUrl = `${APP_URL.replace(/\/$/, '')}/api/contact`
