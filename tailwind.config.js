/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        color1: '#b58883',
        color2: '#eeb779',
        color3: '#064237',
        bgcolor: '#e0d8d6'
      }
    },
  },
  plugins: [],
};
