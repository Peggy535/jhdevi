<script setup>
definePageMeta({
  layout: "default",
});
</script>
<template>
  <div>
    <div class="overflow-hidden font-domainelight text-neutral-700">
      <section
        class="relative h-auto w-screen flex flex-col z-20 bg-white bg-opacity-60"
      >
        <div
          class="w-full h-auto mt-20 mb-10 font-domainelight text-brand-rose-gold"
        >
          <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl m-1 p-1">
            JH Online Bookings
          </h1>
        </div>

        <div
          class="flex h-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto border-2 border-white bg-brand-rose-gold rounded-2xl"
        >
          <p class="text-4xl m-2 p-2 text-white">
            Take a step forwards today, booking your choosen therapy online,
            take a free consultation, send me an email. It's never been so easy.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:gap-10 xl:gap-16 w-screen h-auto mb-5 m-5 mx-auto lg:px-5 xl:px-10"
        >
          <article
            class="grid col-span-1 min-h-min border m-1 border-brand-rose-gold rounded-2xl shadow-2xl shadow-neutral-200"
          >
            <span class="h-40 bg-brand-rose-gold rounded-xl">
              <h1
                class="font-domainebold text-4xl lg:text-5xl text-white m-1 p-1"
              >
                Consultation & first session
              </h1>
            </span>
            <span class="relative h-52 sm:h-60 m-1 p-1 text-neutral-700">
              <p class="text-lg lg:text-xl m-1 p-1">
                Book your first consulation & therapy session here.
              </p>
              <h3 class="text-4xl m-1 p-1">£95</h3>
              <NuxtLink to="/">
                <button
                  class="absolute bottom-0 border-2 border-brand-rose-gold text-brand-rose-gold rounded-3xl text-lg"
                >
                  <p class="m-1">Email now</p>
                </button>
              </NuxtLink>
            </span>
          </article>
          <article
            class="grid col-span-1 min-h-min m-1 border border-brand-rose-gold rounded-2xl shadow-2xl shadow-neutral-200"
          >
            <span class="h-40 bg-brand-rose-gold rounded-xl">
              <h1 class="text-4xl lg:text-5xl text-white m-1 p-1">
                Individual session
              </h1>
              <h2 class="m-1 p-1 text-white text-2xl">
                CBT, Hypnotherapy, EFT & Yin Yoga
              </h2>
            </span>
            <span class="relative h-52 sm:h-60 m-1 p-1">
              <p class="text-lg lg:text-xl m-1 p-1">
                For those who wish to book on-going Intergrated Therapy
                sessions.
              </p>
              <h3 class="text-4xl m-1 p-1">£75</h3>
              <NuxtLink to="/hypnotherapy">
                <button
                  class="absolute bottom-0 border-2 border-brand-rose-gold text-brand-rose-gold rounded-3xl font-ObjectsSans text-lg"
                >
                  <p class="m-1">Email now</p>
                </button>
              </NuxtLink>
            </span>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
