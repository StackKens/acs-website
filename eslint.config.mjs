import next from 'eslint-config-next'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

/**
 * Flat ESLint config for the ACS marketing site.
 *
 * `next/core-web-vitals` covers the React and Next.js rules, including
 * the accessibility checks in jsx-a11y. `next/typescript` adds the
 * TypeScript-aware rules.
 */
const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', 'out/**', 'build/**'],
  },
  ...next,
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      '@next/next/no-img-element': 'error',
    },
  },
]

export default config
