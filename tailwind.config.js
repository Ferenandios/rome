/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: ["Open Sans", "sans-serif"] },
  },
  extend: {
    animation: {
      widgetPulse: "widgetPulse infinite 1.5",
    },
    keyframes: {
      widgetPulse: {
        "0% 50%": {
          transform: "scale(1, 1)",
          opacity: 1,
        },
        "100%": {
          transform: "scale(2, 2)",
          opacity: 0,
        },
      },
    },
  },
  plugins: [],
};
