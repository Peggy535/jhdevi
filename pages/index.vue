<script setup>
import Arrowright from "~~/components/icons/arrowright.vue";
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="overflow-hidden font-domaineregular text-neutral-700">
    <!-- Video section -->
    <section class="h-screen w-screen fixed">
      <video
        class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
        src="https://res.cloudinary.com/peggy-co/video/upload/c_scale,f_auto,q_auto,w_640/v1595960724/Well%20Being/wellbeing_1_xxiym7.mp4"
        autoplay
        loop
        muted
        playsinline
        preload="true"
        poster="https://res.cloudinary.com/peggy-co/video/upload/c_scale,q_auto,w_640/v1595960724/Well%20Being/wellbeing_1_xxiym7.jpg"
      ></video>
    </section>
    <!-- Landing title -->
    <main class="relative h-auto w-screen z-20 bg-white bg-opacity-60">
      <section class="relative flex flex-col h-screen w-screen justify-end">
        <div
          class="text-brand-rose-gold text-5xl sm:text-6xl md:text-7xl lg:text-8xl m-2 p-2 mb-20"
        >
          <h1>Justine Hodgson</h1>
          <h1>Hypnotherapy</h1>
          <h1>&</h1>
          <h1>Wellbeing Expert</h1>
        </div>
      </section>

      <!-- Personal message -->
      <section class="relative flex flex-col h-screen w-screen justify-evenly">
        <blockquote class="m-1 p-1 xl:w-3/4 2xl:w-1/2">
          <p class="text-2xl sm:text-3xl lg:text-4xl m-1 p-1 md:m-2 md:p-2">
            <span
              class="text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-12xl text-brand-rose-gold font-domainebold"
              >Hello</span
            >
            and welcome to my website, I hope you find both it and the words
            helpful, healing and inspiring. Whatever you are facing at this time
            in your life, no matter what it is, please be assured there is a
            reason and that there is help for you if you wish to receive it.
          </p>
        </blockquote>
        <div
          class="rounded-3xl xl:w-3/4 2xl:w-1/2 bg-brand-rose-gold text-white border-2 border-white m-2 p-2 md:m-3 md:p-3 self-end"
        >
          <h2
            class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl m-1 p-1"
          >
            <span
              class="font-domainebold text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-12xl"
              >You</span
            >
            are beautiful, unique and deserving of all good things.
          </h2>
          <cite class="m-1 p-1">- Justine Hodgson</cite>
        </div>
      </section>

      <!-- Personal video -->
      <div
        class="flex-flex-col w-screen sm:w-1/2 h-auto m-1 p-1 place-items-end"
      >
        <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl m-1 p-1">
          Please click the button below to watch a short video about me and my
          journey so far.
        </p>

        <button
          class="border-2 border-brand-rose-gold rounded-2xl text-xl m-2 p-2"
        >
          Watch video
        </button>
      </div>
      <div
        class="relative h-auto w-screen flex flex-row z-30 place-content-end items-center"
      >
        <span class="m-1 p-1">
          <NuxtLink to="/about">
            <p class="text-xl">JH Services</p>
          </NuxtLink>
        </span>
        <NuxtLink to="/about">
          <Arrowright class="inline w-16 fill-brand-rose-gold" />
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
