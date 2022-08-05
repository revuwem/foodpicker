/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: {
        dark: "#243119",
        light: "#629460",
      },
    },
    extend: {},
  },
  plugins: [],
};
