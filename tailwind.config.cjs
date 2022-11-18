/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
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
      },
      fontFamily: {
        inter: "var(--primary-font)",
        spaceGrotesk: "var(--title-font)"
      },
      backgroundImage: {
        "hero-pattern": "var(--hero-pattern)"
      }
    }
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ]
};
