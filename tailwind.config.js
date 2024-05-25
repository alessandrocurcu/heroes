/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '600'
            },
            a: {
              color: theme('colors.indigo.500')
            },
            p: {
              color: theme('colors.gray.700'),
              fontSize: theme('fontSize.sm')
            },
            li: {
              color: theme('colors.gray.700'),
              fontSize: theme('fontSize.sm')
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
