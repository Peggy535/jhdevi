<script setup>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import MenuIcon from "./icons/menuIcon.vue";

onMounted(() => {
  gsap.registerPlugin(CSSPlugin);
  gsap.set(".menu", { autoAlpha: 0, xPercent: -100 });
});
const openMenu = () => {
  gsap.registerPlugin(CSSPlugin);
  gsap.fromTo(
    ".menu",
    { autoAlpha: 1, xPercent: -100 },
    { xPercent: 0, duration: 1, ease: "expo.inOut" }
  );
};
const closeMenu = () => {
  gsap.to(".menu", {
    xPercent: -100,
    duration: 1,
    autoAlpha: 0,
    ease: "expo.inOut",
  });
};
</script>

<template>
  <div
    class="fixed z-40 h-screen w-full bg-neutral-100 flex flex-col place-content-center invisible menu font-Domainemedium"
  >
    <span class="absolute top-5 left-5" @click="closeMenu">
      <h1
        class="text-xl text-brand-lime hover:transition hover:duration-500 hover:delay-75 hover:ease-in-out hover:scale-125 hover:text-green-500"
      >
        Close menu
      </h1>
    </span>
    <div class="flex mx-auto">
      <ul class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <NuxtLink to="/" @click="closeMenu">
          <li
            class="m-2 p-2 text-brand-rose-gold transition delay-75 ease-in-out duration-700 hover:scale-125 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-brand-rose-gold after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
          >
            Home
          </li>
        </NuxtLink>
        <NuxtLink to="/about" @click="closeMenu">
          <li
            class="m-2 p-2 text-brand-rose-gold transition delay-75 ease-in-out duration-700 hover:scale-125 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-brand-rose-gold after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
          >
            About & Services
          </li>
        </NuxtLink>
        <NuxtLink to="/cbt" @click="closeMenu">
          <li
            class="m-2 p-2 text-brand-dark-rose transition delay-75 ease-in-out duration-700 hover:scale-125 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-brand-dark-rose after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
          >
            CBT
          </li>
        </NuxtLink>
        <NuxtLink to="/hypnotherapy" @click="closeMenu">
          <li
            class="m-2 p-2 text-brand-tan transition delay-75 ease-in-out duration-700 hover:scale-125 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-brand-tan after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
          >
            Hypnotherapy
          </li>
        </NuxtLink>
        <NuxtLink to="/eft" @click="closeMenu">
          <li
            class="m-2 p-2 text-brand-green transition delay-75 ease-in-out duration-700 hover:scale-125 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-brand-green after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
          >
            EFT
          </li>
        </NuxtLink>
        <NuxtLink to="/yinyoga" @click="closeMenu">
          <li
            class="m-2 p-2 text-brand-lime transition delay-75 ease-in-out duration-700 hover:scale-125 after:origin-left after:block after:absolute after:w-full after:scale-0 after:bg-brand-lime after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
          >
            Yin Yoga
          </li>
        </NuxtLink>
      </ul>
    </div>
  </div>

  <div
    class="fixed w-full flex flex-row place-content-between items-center z-30 font-NeueMontrealThin"
  >
    <MenuIcon
      class="fill-brand-lime w-16 sm:w-18 md:w-20 transition delay-75 duration-500 hover:fill-green-500 hover:scale-125"
      @click="openMenu"
    />
    <span class="m-1"
      ><NuxtLink to="/bookings">
        <button
          class="border-2 mr-5 border-brand-lime rounded-2xl transition delay-75 ease-in-out hover:border-white hover:ring-offset-8 hover:scale-110 duration:700"
        >
          <p
            class="text-brand-lime rounded-2xl font-Domainelight p-1 sm:p-2 text-md sm:text-xl md:text-2xl transition delay-75 ease-in-out hover:text-white hover:bg-brand-lime hover:scale-110 duration:700"
          >
            Book now
          </p>
        </button>
      </NuxtLink>
    </span>
  </div>
</template>
