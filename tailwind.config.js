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
        "brand-orange": "#f58654",
        "brand-yellow": "#f9bf52",
        "brand-green": "#8ab690",
        "brand-blue": "#63979a",
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
