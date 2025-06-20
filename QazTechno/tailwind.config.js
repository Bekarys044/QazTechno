/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005bff",         // Jade Green
        background: "#0D1117",      // Dark Navy
        block: "#FFFFFF",        
        hover: "#FFBE0B",           
        footer: "#101820",         
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        pop: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}