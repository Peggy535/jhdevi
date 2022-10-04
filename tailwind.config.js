/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "composables/**/*.{js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "App.{js,ts,vue}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        domainethin: ["domainethin"],
        domainelight: ["domainelight"],
      },
      colors: {
        "brand-rose-gold": "#b76e79",
        "brand-bronze": "#9C7E41",
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
        "30xl": "30em",
        "32xl": "32rem",
        "34xl": "34rem",
        "36xl": "36rem",
        "38xl": "38rem",
        "30xl": "30rem",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "800px": "800px",
      },
    },
  },
  plugins: [],
};
