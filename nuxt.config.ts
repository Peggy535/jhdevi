export default {
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/sanity",
    "@nuxtjs/tailwindcss",
    "@kevinmarrec/nuxt-pwa",
  ],
  meta: {
    link: [
      { rel: 'preconnect', href: "https://app.snipcart.com" },
      { rel: 'preconnect', href: "https://cdn.snipcart.com" },
      { rel: 'stylesheet', href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" },

    ],
    script: [
      { src: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js', async: true }
    ],
  },
  image: {
    cloudinary: {
      baseURL:
        "https://res.cloudinary.com/peggy-co/image/upload/v1596638480/Well%20Being",
    },
  },
  sanity: {
    projectId: "z3tzp1p0",
  },
  tailwind: {
    cssPath: "~/assets/css/tailwind.css",
  },

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
    },
    workbox: {
      enabled: true,
    },
    manifest: {
      name: "Justine Hodgson Integrated Therapies",
      short_name: "JH Therapies",
      description:
        "One to One CBT, Hypnotherapy, EFT & Yin Yoga therapy online services based in the UK.",
    },
  },
};
