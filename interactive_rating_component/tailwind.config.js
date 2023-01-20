/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:["max", "375px"],
      xl:["max", "1440px"]
    },
    colors:{
      orange:"hsl(25, 97%, 53%)",
      white:"hsl(0, 0%, 100%)",
      lightGray:"hsl(217, 12%, 63%)",
      mediumGray:"hsl(216, 12%, 54%)",
      darkBlue:"hsl(213, 19%, 18%)",
      veryDarkBlue:"hsl(216, 12%, 8%)"
    },
    fontFamily:{
      overpass:['Overpass', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
