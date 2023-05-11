import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    screens: {
      desktop: "1024px",
    },
    extend: {
      colors: {
        blue: {
          main: "#0d192c",
          card: "#15263f",
          soft: "#8BACD9",
          line: "#2E405A",
        },
        cyan: {
          card: "#00FFF8",
        },
      },
      boxShadow: {
        card: "0 2.5rem 5rem rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          fontSize: "62.5%",
          fontFamily: "'Outfit', sans-serif",
        },
      });
    }),
  ],
};
