/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightBeige': '#F5EFE7',
        'darkBaige': '#D8C4B6',
        'lightNavy': '#4F709C',
        'darkNavy': '#213555'
      }
    },
  },
  plugins: [],
}

