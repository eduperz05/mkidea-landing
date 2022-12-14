/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,css,scss}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        "primary": "var(--primary-color)",
        "primary-light": "var(--primary-color-light)",
        "primary-lighter": "var(--primary-color-light-extra)",
        "primary-dark": "var(--primary-color-dark)",
        "primary-darker": "var(--primary-color-darker)",
        "secondary": "var(--secondary-color)",
        "secondary-light": "var(--secondary-color-light)",
        "secondary-lighter": "var(--secondary-color-light-extra)",
        "secondary-dark": "var(--secondary-color-dark)",
        "secondary-darker": "var(--secondary-color-darker)",
        "black": "var(--black-color)",
        "black-light": "var(--black-color-light)",
        "black-lighter": "var(--black-color-light-extra)",
        "black-dark": "var(--black-color-dark)",
        "black-darker": "var(--black-color-darker)",
        "headset": "var(--headset-color)",
      },
      fontFamily: {
        inter: "var(--primary-font)",
        spaceGrotesk: "var(--title-font)"
      }
    }
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ]
};
