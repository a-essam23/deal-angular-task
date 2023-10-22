/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#fdc93a",
        "primary-invert": "#0236c5",
        "primary-hover": "#fdce4e",
        "primary-active": "#e4b534",
        "neutral-n100": "#E4E8EB",
        "neutral-n200": "#C8D1D6",
        "neutral-n300": "#ADBAC2",
        "neutral-n400": "#91A3AD",
        "neutral-n500": "#768C99",
        "neutral-n700": "#47545C",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")({ strategy: "class" })],
};
