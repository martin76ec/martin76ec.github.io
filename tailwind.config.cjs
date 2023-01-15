/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "media",
  theme: {
    colors: {
        purple: '#814077',
        black: '#333233',
        blue: '#2E519E',
        white: '#FFFFFF',
    },
    fontFamily: {
      'anton': ['Anton']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
