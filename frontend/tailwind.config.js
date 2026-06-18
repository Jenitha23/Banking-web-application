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
          dark: '#0A1628',       // Deep navy
          primary: '#122A4E',    // Rich blue
          secondary: '#F5A623',  // Golden yellow
          light: '#F0F4F8',      // Cool gray-blue background
          accent: '#FFD45C',     // Bright gold accent
          text: '#1A1A2E',       // Near-black text
          textLight: '#6B7B8D',  // Slate gray
          blue: '#1E3A5F',       // Mid-tone blue
          gold: '#D4941A',       // Deep gold
        },
        status: {
          pending: '#F5A623',
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
