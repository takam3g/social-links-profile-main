/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c5f82a",
        secondary: {
          grey: "#333333",
          darkgrey: "#1f1f1f",
          offgrey: "#141414",
        }
      }
    },
  },
  plugins: [],
}

