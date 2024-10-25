/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': 'rgba(211, 218, 201, 1)',
        'dark-gray': 'rgba(113, 129, 135, 1)',
      },
    },
  },
  plugins: [require('daisyui'),],
}