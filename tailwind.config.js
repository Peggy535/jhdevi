/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        Domainethin: ["Domainethin"],
        Domainelight: ["Domainelight"],
        Domaineregular: ["Domaineregular"],
        Domainemedium: ["Domainemedium"],
        ObjectSans: ["ObjectSans"],
      },
      colors: {
        "brand-rose-gold": "#b76e79",
        "brand-dark-rose": "#9a4955",
        "brand-tan": "#c39274",
        "brand-green": "#4b7e72",
        "brand-lime": "#76a663",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "11rem",
        "12xl": "12rem",
        "13xl": "13rem",
        "14xl": "14rem",
        "15xl": "15rem",
        "16xl": "16rem",
        "18xl": "18rem",
        "20xl": "20rem",
        "30xl": "30rem",
      },
    },
  },
  plugins: [],
};
