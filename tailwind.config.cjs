/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'Baltic-sea':'#23252C',
        'Mirage':'#1A1B21',
        'Cashmere':'#F3BF99',
        'Cinder':'#161619'
      },
      fontFamily:{
        Inter:['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
