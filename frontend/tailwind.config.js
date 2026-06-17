/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bank: {
          dark: '#112D28',
          primary: '#1A423B',
          secondary: '#88A9A2',
          light: '#F4F7F6',
          accent: '#A5C1BB',
          text: '#222222',
          textLight: '#666666',
        },
        status: {
          pending: '#F59E0B',
          approved: '#10B981',
          rejected: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
