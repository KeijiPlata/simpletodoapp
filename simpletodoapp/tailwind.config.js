/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        customBlue: "#9FDDFF",
        customGreen: "#ABF0CF",
        customViolet: "#C594C3",
        customYellow: "#F9DC4A",
        customPink: "#FFB1EA",
        customBg: "#282828",
        customFr: "#636161",
      },
    },
  },
  plugins: [],
}