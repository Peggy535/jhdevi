<template>
  <div>
    <section class="flex flex-col h-screen w-screen">
      <div class="flex h-auto my-auto text-left">
        <h1
          class="flex text-7xl sm:text-8xl md:text-9xl m-1 p-1 text-brand-rose-gold font-Domainemedium"
        >
          About JH
        </h1>
      </div>
      <blockquote
        class="h-auto lg:w-3/4 lg:self-end rounded-3xl m-1 p-1 sm:m-3 sm:p-3 bg-brand-rose-gold text-neutral-50 border-2 border-neutral-200 shadow-lg shadow-neutral-400"
      >
        <p
          class="font-PierSans text-xl leading-relaxed md:leading-loose m-1 p-1 my-10 md:my-16 border-l-4 border-l-neutral-50 border-spacing-10"
        >
          <span
            class="text-8xl sm:text-10xl md:text-11xl lg:text-12xl font-Domainemedium"
            >Having</span
          >
          personally experienced such things as anxiety, trauma and chronic
          fatigue syndrome, and having recovered through the same therapies I
          offer today, allows me to truly understand other's issue's, and how
          best to treat them."
        </p>
        <cite class="m-1 p-1 font-Domainelight">- Justine Hodgson</cite>
      </blockquote>
    </section>
    <section
      class="h-auto w-screen flex flex-col justify-evenly lg:grid lg:grid-cols-4"
    >
      <section
        class="m-1 p-1 my-10 mx-auto overflow-hidden border-8 border-neutral-100 shadow-2xl shadow-neutral-300 rounded-2xl z-10 lg:grid lg:col-span-1"
      >
        <video controls class="z-5">
          <source
            src="https://res.cloudinary.com/peggy-co/video/upload/c_scale,w_300/v1593601416/12%20Steps%20The%20Curative%20Hypno/welcome_mess_a02ez5.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/peggy-co/video/upload/c_scale,w_300/v1593601416/12%20Steps%20The%20Curative%20Hypno/welcome_mess_a02ez5.webm"
            type="video/webm"
          />
        </video>
        <cite class="text-md lg:text-sm font-Domainelight m-1 p-1"
          >A personal message from Justine</cite
        >
      </section>
      <p
        class="m-2 p-2 sm:m-4 sm:p-4 text-2xl leading-relaxed lg:grid lg:col-span-3 items-center font-PierSans"
      >
        By now hopefully, you’ve pressed the play button on both my welcome and
        about me recordings and I’ve saved you valuable time on reading a page
        full of words without much connection. As a hypnotherapist, it’s
        important you get a feel for my voice and personality if we are going to
        do some work together. I’m also a strong believer in being as real on
        paper as I am in person, hopefully this all resonates and feels
        authentic for every visitor to my site.
      </p>
    </section>
    <section
      class="h-screen w-screen flex flex-col justify-evenly lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:h-auto lg:items-center"
    >
      <img
        class="object-contain object-center lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2"
        src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto/v1596119487/Well%20Being/journey_eaxuxe.jpg"
        alt=""
      />
      <p
        class="font-PierSans m-2 p-2 sm:m-4 sm:p-4 text-2xl leading-relaxed lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2"
      >
        At this stage you would have heard my story and know, just as so many
        before me and many to follow, I’ve had my own path to travel and it’s
        not always been straight forward but it has led me to where I am today
        and it continues to get better and convince me that, miracles actually
        do happen, every single day.
      </p>
    </section>
    <section
      class="h-screen w-screen flex flex-col justify-evenly lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:h-auto lg:items-center"
    >
      <img
        class="object-contain object-center lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2"
        src="https://res.cloudinary.com/peggy-co/image/upload/f_auto,q_auto/v1596125701/Well%20Being/lady-field.min_jidrzu.jpg"
        alt=""
      />
      <p
        class="font-PierSans m-2 p-2 sm:m-4 sm:p-4 text-2xl leading-relaxed lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2"
      >
        I’m that guide. My desire today and every day hereon, is to make people
        feel less broken, so they can experience more joy and happiness and less
        stress in their lives. This in turn can only benefit those around them,
        and there we have it, a beautiful ripple effect begins and reaches far
        and wide, as far as the imagination can take you!
      </p>
    </section>
    <section class="h-auto w-screen">
      <div class="flex">
        <h1 class="font-Domainemedium text-6xl text-brand-rose-gold m-1 p-1">
          JH Services
        </h1>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-screen h-auto"
      >
        <article
          class="grid col-span-1 min-h-min m-2 p-2 border-2 border-neutral-50 rounded-2xl shadow-2xl shadow-neutral-600"
        >
          <span class="h-80 bg-brand-dark-rose rounded-2xl">
            <h1 class="font-Domainemedium text-8xl text-white m-2 p-2">CBT</h1>
          </span>
          <span class="relative h-80 m-1 p-1">
            <p class="font-ObjectSans text-xl">
              Cognitive behavioural therapy (CBT) is a talking therapy that can
              help you manage your problems by changing the way you think and
              behave.
            </p>
            <NuxtLink to="/cbt">
              <button
                class="absolute bottom-0 border-2 border-brand-dark-rose text-brand-dark-rose rounded-3xl font-ObjectsSans text-lg"
              >
                <p class="p-1 m-1">Learn more</p>
              </button>
            </NuxtLink>
          </span>
        </article>
        <article
          class="grid col-span-1 min-h-min max-h-200 m-2 p-2 border-2 border-neutral-50 rounded-2xl shadow-2xl shadow-neutral-600"
        >
          <span class="h-80 bg-brand-tan rounded-xl">
            <h1 class="font-Domainemedium text-4xl text-white m-2 p-2">
              Hypnotherapy
            </h1>
          </span>
          <span class="relative h-80 m-1 p-1">
            <p class="font-ObjectSans text-xl">
              Curative hypnotherapy is a method of working purely with the
              subconscious mind to understand and correct specific details which
              have played a part in the initial creation of a symptom.
            </p>
            <NuxtLink to="/hypnotherapy">
              <button
                class="absolute bottom-0 border-2 border-brand-tan text-brand-tan rounded-3xl font-ObjectsSans text-lg"
              >
                <p class="p-1 m-1">Learn more</p>
              </button>
            </NuxtLink>
          </span>
        </article>
        <article
          class="grid col-span-1 min-h-min m-2 p-2 border-2 border-neutral-50 rounded-2xl shadow-2xl shadow-neutral-900"
        >
          <span class="h-80 bg-brand-green rounded-2xl">
            <h1 class="font-Domainemedium text-8xl text-white m-2 p-2">EFT</h1>
            <p class="font-Domainelight text-lg m-2 p-2 text-white">
              Emotional Freedom Technique
            </p>
          </span>
          <span class="relative h-80 m-1 p-1">
            <p class="font-ObjectSans text-xl">
              Emotional freedom technique (EFT) is an alternative treatment for
              physical pain and emotional distress. It’s also referred to as
              tapping or psychological acupressure.
            </p>
            <NuxtLink to="/eft">
              <button
                class="absolute bottom-0 border-2 border-brand-green text-brand-green rounded-3xl font-ObjectsSans text-lg"
              >
                <p class="p-1 m-1">Learn more</p>
              </button>
            </NuxtLink>
          </span>
        </article>
        <article
          class="grid col-span-1 min-h-min m-2 p-2 border-2 border-neutral-50 rounded-2xl shadow-2xl shadow-neutral-900"
        >
          <span class="h-80 bg-brand-lime rounded-2xl">
            <h1 class="font-Domainemedium text-8xl text-white m-2 p-2">
              Yin Yoga
            </h1>
          </span>
          <span class="relative h-80 m-1 p-1">
            <p class="font-ObjectSans text-xl">
              An instant stress relief button! Yin is the most accessible of the
              physical yoga systems and can be practised by anyone.
            </p>
            <NuxtLink to="/yinyoga">
              <button
                class="absolute bottom-0 border-2 border-brand-lime text-brand-lime rounded-3xl font-ObjectsSans text-lg"
              >
                <p class="p-1 m-1">Learn more</p>
              </button>
            </NuxtLink>
          </span>
        </article>
      </div>
    </section>
  </div>
</template>
