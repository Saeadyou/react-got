/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "31.25em",
      md: "37.5em",
      lg: "78.15em",
    },

    extend: {
      fontFamily: {
        sans: ["Cinzel", "sans-serif"],
      },
    },
  },
  plugins: [],
};
