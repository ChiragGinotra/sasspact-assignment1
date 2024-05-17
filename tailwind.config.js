/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-relaxed": "2",
      },
      overflow: {
        "x-hidden": "hidden",
      },
      transitionDuration: {
        2000: "2000ms",
        4000: "4000ms",
        8000: "8000ms",
      },
      fontFamily: {
        playfair: ['"Playfair Display"'],
        sourcesans: ['"Source Sans Pro"'],
      },
    },
  },
  plugins: [],
};
