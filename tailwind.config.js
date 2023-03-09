/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'blue' : '#2D76F9',
        'blek' : '#212121'
      },
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}