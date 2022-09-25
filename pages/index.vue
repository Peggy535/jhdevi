<template>
  <div class="overflow-hidden">
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
    <main class="relative h-auto w-screen z-20 bg-white bg-opacity-80">
      <section class="relative h-screen w-screen">
        <div
          class="flex flex-col absolute text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl bottom-0 left-0 m-2 p-2 mb-20 text-brand-rose-gold font-Domainemedium"
        >
          <h1>Justine Hodgson</h1>
          <h1>Hypnotherapy</h1>
          <h1>&</h1>
          <h1>Wellbeing Expert</h1>
        </div>
      </section>
      <!-- Personal statement -->
      <blockquote
        class="relative h-screen w-screen grid grid-cols-1 grid-rows-1 gap-10 items-center"
      >
        <span
          class="grid items-center col-span-1 row-span-1 rounded-3xl leading-relaxed m-2 p-2 sm:m-4 sm:p-4 md:m-6 md:p-6 lg:m-10 lg:p-10 bg-brand-rose-gold bg-opacity-80 border-8 border-neutral-50 shadow-lg shadow-neutral-400"
        >
          <h1
            class="text-6xl sm:text-7xl lg:text-8xl m-1 p-1 sm:m-5 sm:p-5 text-neutral-100 font-ObjectSans"
          >
            <span
              class="text-9xl sm:text-13xl md:text-15xl lg:text-18xl font-Domainemedium"
              >You</span
            >
            are beautiful, unique and deserving of all good things.
          </h1>
          <cite class="m-1 p-1 sm:m-5 sm:p-5 text-neutral-50 font-Domainelight"
            >- Justine Hodgson</cite
          >
        </span>
      </blockquote>
      <!-- Personal message -->
      <blockquote
        class="relative h-screen w-screen grid grid-cols-1 grid-rows-1 gap-2"
      >
        <span
          class="grid items-center col-span-1 row-span-1 m-2 p-2 sm:m-4 sm:p-4 md:m-6 md:p-6 lg:m-10 lg:p-10"
        >
          <p
            class="text-2xl sm:text-4xl md:text-5xl m-1 p-1 sm:m-5 sm:p-5 leading-relaxed text-left font-ObjectSans text-neutral-800 border-l-8 border-l-brand-rose-gold"
          >
            <span
              class="text-9xl sm:text-13xl md:text-15xl lg:text-18xl font-Domainemedium text-brand-rose-gold"
              >Hello</span
            >
            and welcome to my website, I hope you find both it and the words
            helpful, healing and inspiring. Whatever you are facing at this time
            in your life, no matter what it is, please be assured there is a
            reason and that there is help for you if you wish to receive it.
          </p>
        </span>
      </blockquote>
      <!-- Personal video -->
      <aside
        class="relative h-auto w-screen grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 grid-rows-1 gap-2 my-10"
      >
        <span
          class="grid items-center col-span-1 sm:col-span-2 md:col-start-3 md:col-end-5 row-span-1 rounded-3xl m-2 p-2 sm:mb-20 bg-brand-rose-gold bg-opacity-80 border-8 border-neutral-50 shadow-xl shadow-neutral-400"
        >
          <p
            class="text-2xl sm:text-2xl m-2 p-2 leading-normal text-left text-neutral-50 font-ObjectSans"
          >
            Please click the button below to watch a short video about me and my
            journey so far.
          </p>
          <button
            class="inline-block m-2 p-2 text-neutral-50 border border-neutral-200 rounded-3xl font-Domainelight text-2xl"
          >
            Watch video
          </button>
        </span>
      </aside>
      <div class="relative h-auto w-screen grid grid-cols-1 grid-rows-1 z-30">
        <span class="grid items-center col-span-1 row-span-1 text-right">
          <NuxtLink to="/about">
            <p class="m-4 text-xl font-ObjectSans">
              Discover more about JHDevi
            </p>
          </NuxtLink>
        </span>
      </div>
    </main>
  </div>
</template>
