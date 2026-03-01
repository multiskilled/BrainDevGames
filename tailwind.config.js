/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'puzzle-bg': '#E8F4FA',
        'sudoku-card': '#63B6E5',
        'riddles-card': '#FCA345',
        'cognitive': '#63B6E5',
        'focus': '#32D38A',
        'memory': '#FCA345',
        'stress': '#B37EE5',
      },
    },
  },
  plugins: [],
}
