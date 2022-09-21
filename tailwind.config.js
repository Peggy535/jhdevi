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
        PierSans: ["PierSans"],
      },
      colors: {
        "brand-rose-gold": "#b76e79",
        "brand-orange": "#d3775a",
        "brand-yellow": "#edc782",
        "brand-green": "#b4cb9c",
        "brand-blue": "#788092",
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
