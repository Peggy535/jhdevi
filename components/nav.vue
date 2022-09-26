<script setup>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import MenuIcon from "./menuIcon.vue";

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
    class="fixed z-40 h-screen w-3/4 bg-neutral-100 flex flex-col place-content-center invisible menu font-Domainemedium text-brand-rose-gold"
  >
    <span class="absolute top-5 left-5" @click="closeMenu">
      <h1 class="text-xl">Close</h1>
    </span>
    <div class="flex mx-auto">
      <ul class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <NuxtLink to="/" @click="closeMenu">
          <li class="m-2 p-2">Home</li>
        </NuxtLink>
        <span></span>
        <NuxtLink to="/about" @click="closeMenu">
          <li class="m-2 p-2">About & Services</li>
        </NuxtLink>
        <NuxtLink to="/cbt" @click="closeMenu">
          <li class="m-2 p-2">CBT</li>
        </NuxtLink>
        <NuxtLink to="/hypnotherapy" @click="closeMenu">
          <li class="m-2 p-2">Hypnotherapy</li>
        </NuxtLink>
        <NuxtLink to="/eft" @click="closeMenu">
          <li class="m-2 p-2">EFT</li>
        </NuxtLink>
        <NuxtLink to="/yinyoga" @click="closeMenu">
          <li class="m-2 p-2">Yin Yoga</li>
        </NuxtLink>
      </ul>
    </div>
  </div>

  <div
    class="fixed w-full flex flex-row place-content-between items-center z-30 font-NeueMontrealThin"
  >
    <MenuIcon class="w-16 sm:w-18 md:w-20" @click="openMenu" />
    <span class="m-1"
      ><NuxtLink
        to="https://www.admiralmanagementservices.com/sugarloaf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          class="border-2 border-brand-rose-gold rounded-2xl transition delay-50 ease-in-out hover:border-pink-300 duration:300"
        >
          <p
            class="text-brand-rose-gold p-1 sm:p-2 text-md sm:text-xl md:text-2xl transition delay-50 ease-in-out hover:text-pink-300 duration:200"
          >
            Book now
          </p>
        </button>
      </NuxtLink>
    </span>
  </div>
</template>
