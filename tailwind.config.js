/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#fdc93a",
        "primary-hover": "#fdce4e",
        "primary-active": "#e4b534",
        "neutral-n100": "#E4E8EB",
        "neutral-n200": "#C8D1D6",
        "neutral-n500": "#768C99",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")({ strategy: "class" })],
};
