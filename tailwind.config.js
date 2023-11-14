/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Chinzel: "'Cinzel', serif",
        Inter: "'Inter', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

