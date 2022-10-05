/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#797878",
          DEFAULT: "#565252",
          dark: "#100F0F",
        },
        secondary: {
          light: "#DDEDB0",
          DEFAULT: "#E9FFFF",
          dark: "#BAEFAD",
        },
        neutral: colors.Neutral,
      },
    },
  },
  plugins: [],
};
