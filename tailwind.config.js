/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        champagne: {
          DEFAULT: "#FA5C00",
          light: "#fc8d4d",
          dark: "#c84a00",
          ultralight: "#feceb3",
        },
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
