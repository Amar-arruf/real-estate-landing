/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/graphics.png')",
      },
      lineHeight: {
        14: "4.5rem",
      },
      height: {
        "custom-screen": "75vh",
      },
      width: {
        "custom-width": "40%",
      },
      bottom: {
        custom: "3.5rem",
      },
    },
  },
  plugins: [],
});
