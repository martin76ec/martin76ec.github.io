/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    colors: {
      purple: "#814077",
      scampi: "#645aa3",
      bondiBlue: "#00a1ae",
      black: "#333233",
      blue: "#2E519E",
      white: "#FFFFFF",
    },
    fontFamily: {
      anton: ["Anton"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
