/** @type {import('tailwindcss').Config} */
module.exports = {
  future: { hoverOnlyWhenSupported: true },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      notoSans: ["Noto Sans JP", "sans-serif"],
    },
    extend: {
      green: {
        50: "#effaf5",
        100: "#d8f3e6",
        200: "#b3e7d0",
        300: "#85d5b7",
        400: "#4dba94",
        500: "#2b9e7a",
        600: "#1c7f62",
        700: "#166651",
        800: "#145141",
        900: "#114337",
        950: "#09251f",
      },
    },
  },
  plugins: [],
};
