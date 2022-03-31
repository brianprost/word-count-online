const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#efb192',
          secondary: '#116c7a',
          accent: '#c7e6fc',
          neutral: '#181C20',
          'base-100': '#FDFCFD',
          info: '#6185EF',
          success: '#28E69D',
          warning: '#FDB368',
          error: '#F5383F',
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans Arabic', defaultTheme.fontFamily.sans],
        'brian-theme': 'Major Mono Display',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
