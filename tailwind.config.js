const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT ({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
      },

     
    },


  },
  plugins: [
    
  ],
})
