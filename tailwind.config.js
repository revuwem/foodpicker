/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      green: {
        100: "#243119",
        200: "#618E5C",
        300: "#629460",
        400: "#F0F5EF",
      },
      bg: "#FCFBFE",
    },
    extend: {},
  },
  plugins: [],
};
