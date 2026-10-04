/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tis: {
          red: {
            DEFAULT: '#B90124',
            dark: '#8C001B',
            light: '#E52B4E',
            50: '#FDF2F4',
          },
          teal: {
            DEFAULT: '#60BAB1',
            dark: '#007A83',
            light: '#90CCD0',
            50: '#F0F9F8',
          },
          gold: {
            DEFAULT: '#C09D59',
            light: '#DBC79F',
            dark: '#997A37',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'premium-hover': '0 20px 40px -15px rgba(185, 1, 36, 0.15)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
