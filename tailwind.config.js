/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  extend: {
    screens: {
      tall: { raw: "(min-height: 800px)" },
      // => @media (min-height: 800px) { ... }
    },
  },
  plugins: [],
};
