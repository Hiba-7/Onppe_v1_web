/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {  fontFamily: {
      
          'mons': ['Montserrat', 'sans-serif']
        },},
        colors: {
          CustomGreen: '#59C55E',
        },
  },
  plugins: [],
};
