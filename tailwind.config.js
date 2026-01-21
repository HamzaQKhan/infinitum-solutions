/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          top: '#7969EB',
          bot: '#1859EB',
        },
      },
    },
  },
  plugins: [],
}
