<template>
  <section class="h-screen w-screen fixed">
    <video
      class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
      src="/images/landing_page_video.mp4"
      autoplay
      loop
      muted
    ></video>
  </section>
  <section class="relative h-screen w-screen z-20 bg-white bg-opacity-80">
    <div
      class="flex flex-col absolute text-5xl sm:text-7xl md:text-8xl xl:text-9xl bottom-0 left-0 m-2 p-2 mb-10 text-brand-rose-gold font-Domainelight"
    >
      <h1>Justine Hodgson</h1>
      <h1>Hypnotherapy</h1>
      <h1>&</h1>
      <h1>Wellbeing Expert</h1>
    </div>
  </section>
  <aside
    class="relative h-screen w-screen z-20 bg-white bg-opacity-80 grid grid-cols-1 grid-rows-1 gap-10 items-center"
  >
    <span
      class="grid items-center col-span-1 row-span-1 rounded-3xl m-2 p-2 bg-brand-rose-gold bg-opacity-80 border-8 border-neutral-50 shadow-lg shadow-neutral-100"
    >
      <h1 class="text-6xl sm:text-7xl lg:text-8xl m-1 p-1 sm:m-3 sm:p-3 text-neutral-100">
        <span
          class="text-9xl sm:text-13xl md:text-15xl lg:text-18xl font-Domainemedium"
          >You</span
        >
        are beautiful, unique and deserving of all good things.
      </h1>
      <cite class="m-2 p-2 text-neutral-50">Justine Hodgson</cite>
    </span>
  </aside>
  <aside
    class="relative h-screen w-screen z-20 bg-white bg-opacity-80 grid grid-cols-1 grid-rows-1 gap-2"
  >
    <span class="grid items-center col-span-1 row-span-1 m-2 p-2">
      <p
        class="text-2xl sm:text-4xl m-1 p-1 sm:m-3 sm:p-3 leading-relaxed text-left font-Domainelight text-neutral-800 border-l-8 border-l-neutral-800 border-spacing-6"
      >
        <span class="text-9xl sm:text-13xl md:text-15xl lg:text-18xl font-Domainemedium"
          >Hello</span
        >
        and welcome to my website, I hope you find both it and the words
        helpful, healing and inspiring. Whatever you are facing at this time in
        your life, no matter what it is, please be assured there is a reason and
        that there is help for you if you wish to receive it.
      </p>
    </span>
  </aside>
  <aside
    class="relative h-auto w-screen z-20 bg-white bg-opacity-80 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 grid-rows-1 gap-2"
  >
    <span
      class="grid items-center col-span-1 sm:col-span-2 md:col-start-3 md:col-end-5 row-span-1 rounded-3xl m-2 p-2 sm:mb-20 bg-brand-rose-gold bg-opacity-80 border-8 border-neutral-50 shadow-xl shadow-neutral-50"
    >
      <p
        class="text-2xl sm:text-2xl m-1 p-1 leading-normal text-left text-neutral-50 font-Domaineregular"
      >
        Please click the button below to watch a short video about me and my
        journey so far.
      </p>
      <button
        class="inline-block m-3 p-3 text-neutral-50 border border-neutral-200 rounded-3xl"
      >
        Watch video
      </button>
    </span>
  </aside>
  <div
    class="relative h-auto w-screen grid grid-cols-1 grid-rows-1 bg-white bg-opacity-80 z-30"
  >
    <span class="grid items-center col-span-1 row-span-1 text-right">
      <NuxtLink to="/about">
        <p class="m-4 text-3xl">Discover more about JHDevi</p>
      </NuxtLink>
    </span>
  </div>
</template>
