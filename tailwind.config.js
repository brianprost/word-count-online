module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": '#3ec9a4',
          "secondary": '#dbd655',
          "accent": '#3457a8',
          "neutral": '#191424',
          "base-100": '#464346',
          "info": '#3F6AE9',
          "success": '#1E7B53',
          "warning": '#CCA405',
          "error": '#F2726E',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}
