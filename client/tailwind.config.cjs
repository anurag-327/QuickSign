/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: "#AC58F5",
        branddark: "#0F172A",
        branddark2: "#1E293B",
        brandgray2: "#B8BFC6",
        brandgray: "#D6DEE7",
      },
    },
  },
  plugins: [],
};
