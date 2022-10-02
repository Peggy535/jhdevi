<script setup>
definePageMeta({
  layout: "default",
});
</script>
<template>
  <div class="overflow-hidden font-domaineregular text-neutral-700">
    <section
      class="relative h-auto w-screen flex flex-col z-20 bg-white bg-opacity-60"
    >
      <div class="w-full h-auto my-10 font-domainebold text-brand-rose-gold">
        <h1 class="text-10xl md:text-11xl lg:text-13xl m-1 p-1">
          JH Online Bookings
        </h1>
      </div>

      <div
        class="flex h-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto border-2 border-white bg-brand-rose-gold rounded-2xl"
      >
        <p
          class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl m-2 p-2 text-white"
        >
          Take a step forwards today, booking your choosen therapy online, take
          a free consultation, send me an email. It's never been so easy.
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-screen h-auto mb-5"
      >
        <article
          class="grid col-span-1 min-h-min m-2 p-2 border-2 border-white rounded-2xl shadow-2xl shadow-neutral-200"
        >
          <span class="h-40 bg-brand-rose-gold rounded-2xl">
            <h1 class="font-domainebold text-6xl text-white m-2 p-2">
              Consultation
            </h1>
          </span>
          <span class="relative h-60 sm:h-72 m-1 p-1">
            <p class="text-lg">
              Book a free consultation. Take 30 mins with me to talk and
              discover how we can accomplish your goals and aspirations.
            </p>
            <NuxtLink to="/cbt">
              <button
                class="absolute bottom-0 border-2 border-brand-rose-gold text-brand-rose-gold rounded-3xl font-ObjectsSans text-lg"
              >
                <p class="m-1">Email now</p>
              </button>
            </NuxtLink>
          </span>
        </article>
        <article
          class="grid col-span-1 min-h-min m-2 p-2 border-2 border-white rounded-2xl shadow-2xl shadow-neutral-200"
        >
          <span class="h-40 bg-brand-rose-gold rounded-xl">
            <h1 class="font-domainebold text-4xl text-white m-2 p-2">
              Therapy session
            </h1>
            <h2>CBT, Hypnotherapy & EFT</h2>
          </span>
          <span class="relative h-60 sm:h-72 m-1 p-1">
            <p class="text-lg">
              Whichever therapies you decide upon, book your session here. All
              sessions are conducted online using Zoom in the comfort of your
              ownhome.
            </p>
            <NuxtLink to="/hypnotherapy">
              <button
                class="absolute bottom-0 border-2 border-brand-rose-gold text-brand-rose-gold rounded-3xl font-ObjectsSans text-lg"
              >
                <p class="m-1">Email now</p>
              </button>
            </NuxtLink>
          </span>
        </article>
        <article
          class="grid col-span-1 min-h-min m-2 p-2 border-2 border-white rounded-2xl shadow-2xl shadow-neutral-200"
        >
          <span class="h-40 bg-brand-rose-gold rounded-2xl">
            <h1 class="font-domainebold text-6xl text-white m-2 p-2">
              Yin Yoga Therapy
            </h1>
            <p class="font-domainemedium text-lg m-2 p-2 text-white"></p>
          </span>
          <span class="relative h-60 sm:h-72 m-1 p-1">
            <p class="text-lg">
              Emotional freedom technique (EFT) is an alternative treatment for
              physical pain and emotional distress. It’s also referred to as
              tapping or psychological acupressure.
            </p>
            <NuxtLink to="/eft">
              <button
                class="absolute bottom-0 border-2 border-brand-rose-gold text-brand-rose-gold rounded-3xl font-ObjectsSans text-lg"
              >
                <p class="m-1">Learn more</p>
              </button>
            </NuxtLink>
          </span>
        </article>
        <article
          class="grid col-span-1 min-h-min m-2 p-2 border-2 border-white rounded-2xl shadow-2xl shadow-neutral-200"
        >
          <span class="h-40 bg-brand-rose-gold rounded-2xl">
            <h1 class="font-domainebold text-6xl text-white m-2 p-2">
              Yin Yoga
            </h1>
          </span>
          <span class="relative h-60 sm:h-72 m-1 p-1">
            <p class="text-lg">
              An instant stress relief button! Yin is the most accessible of the
              physical yoga systems and can be practised by anyone.
            </p>
            <NuxtLink to="/yinyoga">
              <button
                class="absolute bottom-0 border-2 border-brand-rose-gold text-brand-rose-gold rounded-3xl font-ObjectsSans text-lg"
              >
                <p class="m-1">Learn more</p>
              </button>
            </NuxtLink>
          </span>
        </article>
      </div>
    </section>
  </div>
</template>
