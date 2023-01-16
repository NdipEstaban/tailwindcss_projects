/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      xs: {'max': '400px'},
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl: '1440px'
    },
    colors:{
      blue:"#3685FE",
      grayishBlue:"#D5E1EF",
      white:"#FFFFFF",
      gray:"gray"
    },
    extend: {},
  },
  plugins: [],
}
