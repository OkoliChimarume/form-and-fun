/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1D",
        dark: "#1C232B",
        light: "#C1C1C1",
        neutral: "#9A9A9A",
      },
      backgroundColor: {
        primary: "white",
      },
      borderColor: {
        default: "#EDFFFF",
      },
      boxShadow: {
        default: "5px 11px 40.43px rgba(211, 209, 216, 0.3)",
      },
      screens: {
        lgMax: { max: "1023px" },
        mdMax: { max: "767px" },
        smMax: { max: "639px" },
        xsMax: { max: "375px" },
      },
      fontSize: {
        "title-mobile": "1.125rem",
        "title-desktop": "1.75rem",
        "subtitle-mobile": "0.875rem",
        "subtitle-desktop": "1rem",
      },
      fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
        "aeonik-bold": ["Aeonik Bold", "sans-serif"],
        arial: ["Arial", "serif"],
      },
    },
  },
  plugins: [],
};
