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
				objectSans: ["objectSans"],
				domainemedium: ["domainemedium"],
				domainesemibold: ["domainesemibold"],
				domainebold: ["domainebold"],
				domaineextrabold: ["domaineextrabold"],
			},
			colors: {
				"brand-rose-gold": "#b76e79",
				"brand-rose-light": "#d09fa7",
				"brand-rose-dark": "#a4515d",
				"brand-champagne-gold": "#d7c69d",
				"brand-champagne-light": "#ede6d4",
				"brand-champagne-dark": "#cab37d",
				"brand-grey": "#474954",
				"brand-grey-light": "#676a79",
				"brand-grey-dark": "#2f3037",
				"brand-light-cream": "#fcfcf0",
				"brand-sage": "#97a288",
			},
			fontSize: {
				"10xl": "10rem",
				"11xl": "11rem",
				"12xl": "12rem",
				"13xl": "13rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
