/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'blue' : '#2D76F9',
        'blek' : '#212121',
        'grey' : '#747474',
        'lblue' : '#EEF4FF',
      },
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif']
      },
      screens: {
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}