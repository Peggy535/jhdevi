<script setup>
import Arrowright from "~~/components/icons/arrowright.vue";
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <div class="overflow-hidden font-domainelight text-neutral-700">
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
            class="text-brand-rose-gold text-6xl sm:text-7xl md:text-8xl xl:text-9xl m-2 p-2 mb-20"
          >
            <h1>Justine</h1>
            <h1>Hodgson</h1>
            <h1>Intergrated</h1>
            <h1>Therapies</h1>
          </div>
        </section>

        <!-- Personal message -->
        <section
          class="relative flex flex-col h-screen w-screen justify-evenly"
        >
          <blockquote class="m-1 p-1 xl:w-3/4 2xl:w-1/2">
            <p class="text-2xl sm:text-3xl lg:text-4xl m-1 p-1 md:m-2 md:p-2">
              <span
                class="text-8xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl text-brand-rose-gold font-domainelight"
                >Hello</span
              >
              and welcome to my website, I hope you find both it and the words
              helpful, healing and inspiring. Whatever you are facing at this
              time in your life, no matter what it is, please be assured there
              is a reason and that there is help for you if you wish to receive
              it.
            </p>
          </blockquote>
          <div
            class="rounded-3xl xl:w-3/4 2xl:w-1/2 bg-brand-rose-gold text-white border-2 border-white m-2 p-2 md:m-3 md:p-3 self-end"
          >
            <h2
              class="text-white text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl m-1 p-1"
            >
              <span
                class="font-domainelight text-8xl sm:text-9xl md:text-10xl lg:text-9xl xl:text-10xl"
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
            <p class="text-3xl text-brand-rose-gold">JH Services</p>
          </span>
          <NuxtLink to="/about">
            <Arrowright
              class="inline border border-white rounded-2xl mr-4 w-20 fill-brand-rose-gold hover:fill-white hover:border-brand-rose-gold hover:scale-110 transition duration-700 ease-in-out"
            />
          </NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>
