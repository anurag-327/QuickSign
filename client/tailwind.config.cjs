/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
    screens: {
      'sm': {'min': '0px', 'max': '600px'},
      'md': {'min': '601px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1500px'},
      'xl': {'min': '1500px', 'max': '2000px'},
      '2xl': {'min': '1536px'},
    },
  },
  plugins: [],
}
