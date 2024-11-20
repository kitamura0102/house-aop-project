/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'big': '27rem',
      }
    },
    fontFamily: {
      poppins:["Poppins", 'sans-serif']
    },
    
  },
  plugins: [],
}