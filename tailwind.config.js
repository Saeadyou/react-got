/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "31.25em", // 500px
      md: "37.5em", // 600px
      lg: "78.15em", // 1250px
    },

    extend: {
      fontFamily: {
        sans: ["Cinzel", "sans-serif"],
      },
    },
  },
  plugins: [],
};
