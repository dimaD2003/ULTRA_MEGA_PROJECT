/** @type {import('tailwindcss').Config} 
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@1,600&family=Rock+Salt&display=swap');*/

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      '1': '-0.26em',},
    fontFamily: {
      display: ['Oswald'],},
    container:{center:true},
    extend: {}
  },
  plugins: [],
}

