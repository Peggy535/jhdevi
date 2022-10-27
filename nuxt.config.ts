export default {
	modules: ["@nuxt/image-edge", "@nuxtjs/sanity", "@nuxtjs/tailwindcss", "@kevinmarrec/nuxt-pwa"],
	image: {
		cloudinary: {
			baseURL: "https://res.cloudinary.com/peggy-co/image/upload/v1596638480/Well%20Being",
		},
	},
	sanity: {
		projectId: "z3tzp1p0",
	},
	tailwind: {
		cssPath: "@/assets/css/tailwind.css",
	},
	css: ["@/assets/css/styles.css"],
	build: {
		transpile: ["gsap"],
	},
	pwa: {
		icon: {
			sizes: [512],
		},
		meta: {
			name: "JH Devi",
			theme_color: "#b76e79",
			mobileApp: true,
		},
		workbox: {
			enabled: true,
		},
		manifest: {
			name: "JH Devi Integrated Therapies",
			short_name: "JH Devi",
			description: "One to One CBT, Hypnotherapy, EFT therapy online services based in the UK.",
			background_color: "#f6f4f1",
			display: "standalone",
			orientation: "portrait",
			lang: "en-gb",
		},
	},
};
