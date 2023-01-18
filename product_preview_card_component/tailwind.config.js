/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      xs: {'max': '480px'},
      sm:'480px',
      md:'768px',
      nmd:{'max': '768px'},
      lg:'976px',
      xl: '1440px'
    },
    colors:{
      forestGreen:"#3D8168",
      darkCyan:"hsl(158, 36%, 37%)",
      cream:"hsl(30, 38%, 92%)",
      darkBlue:"hsl(212, 21%, 14%)",
      darkGrayishBlue:"hsl(228, 12%, 48%)",
      paleYellow:"#F3EAE3",
      white:"#FFFFFF"
    },
    extend: {
      fontFamily:{
        fraunces:["'Fraunces'", "serif"],
        montserrat:["'Montserrat'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
