/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],

  theme: {
    extend: {},
    fontFamily : {
      Vidaloka : "'Vidaloka', serif"
    }
  },
  plugins: [require("daisyui")],
}

