/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Saina: ['VazirFont'],
      },

      container: {
        center: true,
        padding: '1rem',
      },

      colors: {
        Saina: "#7B3EAB",
      }
    },


  },
  plugins: [
    
  ],
}
