/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      head: ['Archivo', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: '#ff8c32',
        blue: '#011142',
      },
      backgroundImage: {
        'arrow': "url('/src/assets/img/down-arrow-icon.svg')",
        'map' : "url('/src//assets/img/map-bg.png')"
      }
    },
  },
  plugins: [],
}