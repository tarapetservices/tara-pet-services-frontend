/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tpsPink: "#F6A6CF",
        tpsDarkPink: "#E65BAA",
      },
    },
  },
  plugins: [],
};

