<script setup>
	import Mandala1 from "~~/components/icons/Mandala1.vue";
	definePageMeta({
		layout: "goldnav",
	});
</script>

<template>
	<div>
		<section class="h-screen w-screen fixed z-10 overflow-hidden">
			<Mandala1 class="fill-brand-champagne-gold h-screen opacity-20" style="width: 200%" />
		</section>
		<div class="relative font-domaineregular text-brand-grey-light z-20 overflow-hidden">
			<section class="flex flex-col h-screen w-screen">
				<div class="flex flex-col h-auto text-left my-20">
					<h1 class="flex text-7xl sm:text-9xl lg:text-11xl 2xl:text-12xl m-1 p-1 text-brand-champagne-gold font-domaineregular">
						About JH
					</h1>
				</div>
				<blockquote
					class="h-auto lg:w-3/4 lg:self-end rounded-2xl m-1 p-1 sm:m-3 sm:p-3 bg-brand-champagne-gold border border-brand-champagne-light border-spacing-4"
				>
					<div class="border-l border-l-white p-3 my-4">
						<h1 class="float-left text-white text-9xl sm:text-10xl">H</h1>
						<p class="text-3xl sm:text-4xl m-1 p-1">
							aving personally experienced such things as anxiety, trauma and chronic fatigue syndrome, and having recovered through the
							same therapies I offer today, allows me to truly understand other's issue's, and how best to treat them."
						</p>
					</div>

					<cite class="m-1 p-1 font-domaineregular">- Justine Hodgson</cite>
				</blockquote>
			</section>

			<section class="h-auto w-full flex flex-col z-20 my-10">
				<section class="w-full sm:w-1/2 lg:w-full mx-auto rounded-2xl z-10 bg-brand-champagne p-1">
					<video
						class="rounded-2xl"
						controls
						playsinline
						src="https://res.cloudinary.com/peggy-co/video/upload/q_auto,vc_vp9/v1593601416/12%20Steps%20The%20Curative%20Hypno/welcome_mess_a02ez5.webm"
					></video>
					<cite class="text-md lg:text-sm font-domaineregular m-1 p-1 sm:m-2 sm:p-2">A personal message from Justine</cite>
				</section>
				<div class="p-1">
					<h1 class="float-left text-brand-champagne-gold text-9xl sm:text-10xl">B</h1>
					<p class="m-1 p-1 sm:m-2 sm:p-2 text-xl sm:text-2xl lg:grid lg:col-span-3">
						y now hopefully, you’ve pressed the play button on both my welcome and about me recordings and I’ve saved you valuable time on
						reading a page full of words without much connection. As a hypnotherapist, it’s important you get a feel for my voice and
						personality if we are going to do some work together. I’m also a strong believer in being as real on paper as I am in person,
						hopefully this all resonates and feels authentic for every visitor to my site.
					</p>
				</div>
			</section>
			<section class="h-auto w-screen flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:h-auto lg:items-center">
				<NuxtImg
					provider="cloudinary"
					class="object-contain object-center lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2"
					src="/journey_eaxuxe.jpg"
					alt=""
					width="3017"
					height="1697"
					loading="lazy"
					format="webp"
					sizes="xs:100vw sm:80vw md:80vw lg:50vw xl:50vw xxl:50vw"
				/>
				<p class="m-1 p-1 sm:m-2 sm:p-2 my-5 sm:my-10 text-xl sm:text-2xl lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
					At this stage you would have heard my story and know, just as so many before me and many to follow, I’ve had my own path to travel
					and it’s not always been straight forward but it has led me to where I am today and it continues to get better and convince me
					that, miracles actually do happen, every single day.
				</p>
			</section>
			<section class="h-auto w-screen flex flex-col justify-evenly lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:h-auto lg:items-center">
				<NuxtImg
					provider="cloudinary"
					loading="lazy"
					width="1366"
					height="768"
					format="webp"
					class="object-contain object-center lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2"
					src="/lady-field.min_jidrzu.jpg"
					alt=""
					sizes="xs:100vw sm:80vw md:80vw lg:50vw xl:50vw xxl:50vw"
				/>
				<p class="m-1 p-1 sm:m-2 sm:p-2 my-5 sm:my-10 text-xl sm:text-2xl lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2">
					I’m that guide. My desire today and every day hereon, is to make people feel less broken, so they can experience more joy and
					happiness and less stress in their lives. This in turn can only benefit those around them, and there we have it, a beautiful
					ripple effect begins and reaches far and wide, as far as the imagination can take you!
				</p>
			</section>
			<!-- <section class="h-auto w-screen">
        <div class="flex">
          <h1
            class="font-domaineregular text-6xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl text-brand-champagne-gold m-1 p-1 my-10"
          >
            JH Services
          </h1>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-screen h-auto mb-5"
        >
          <article
            class="grid col-span-1 min-h-min m-3 border border-brand-champagne-gold rounded-2xl transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-champagne-gold group hover:scale-105"
          >
            <span class="h-40 bg-brand-champagne-gold rounded-xl">
              <h1 class="font-domaineregular text-6xl text-white m-2 p-2">CBT</h1>
            </span>
            <span class="relative h-60 sm:h-72 m-1 p-1">
              <p class="text-lg">
                Cognitive behavioural therapy (CBT) is a talking therapy that
                can help you manage your problems by changing the way you think
                and behave.
              </p>
              <NuxtLink to="/cbt">
                <button
                  class="absolute bottom-0 border border-brand-champagne-gold text-brand-champagne-gold rounded-3xl text-lg transition duration-700 ease-in-out hover:bg-brand-champagne-gold hover:text-white"
                >
                  <p class="m-1">Learn more</p>
                </button>
              </NuxtLink>
            </span>
          </article>
          <article
            class="grid col-span-1 min-h-min m-3 border border-brand-champagne-gold rounded-2xl transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-champagne-gold group hover:scale-105"
          >
            <span class="h-40 bg-brand-champagne-gold rounded-xl">
              <h1 class="font-domaineregular text-4xl text-white m-2 p-2">
                Hypnotherapy
              </h1>
            </span>
            <span class="relative h-60 sm:h-72 m-1 p-1">
              <p class="text-lg">
                Curative hypnotherapy is a method of working purely with the
                subconscious mind to understand and correct specific details
                which have played a part in the initial creation of a symptom.
              </p>
              <NuxtLink to="/hypnotherapy">
                <button
                  class="absolute bottom-0 border border-brand-champagne-gold text-brand-champagne-gold rounded-3xl text-lg transition duration-700 ease-in-out hover:bg-brand-champagne-gold hover:text-white"
                >
                  <p class="m-1">Learn more</p>
                </button>
              </NuxtLink>
            </span>
          </article>
          <article
            class="grid col-span-1 min-h-min m-3 border border-brand-champagne-gold rounded-2xl transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-champagne-gold group hover:scale-105"
          >
            <span class="h-40 bg-brand-champagne-gold rounded-xl">
              <h1 class="font-domaineregular text-6xl text-white m-2 p-2">EFT</h1>
              <p class="font-domainemedium text-lg m-2 p-2 text-white">
                Emotional Freedom Technique
              </p>
            </span>
            <span class="relative h-60 sm:h-72 m-1 p-1">
              <p class="text-lg">
                Emotional freedom technique (EFT) is an alternative treatment
                for physical pain and emotional distress. It’s also referred to
                as tapping or psychological acupressure.
              </p>
              <NuxtLink to="/eft">
                <button
                  class="absolute bottom-0 border border-brand-champagne-gold text-brand-champagne-gold rounded-3xl text-lg transition duration-700 ease-in-out hover:bg-brand-champagne-gold hover:text-white"
                >
                  <p class="m-1">Learn more</p>
                </button>
              </NuxtLink>
            </span>
          </article>
          <article
            class="grid col-span-1 min-h-min m-3 border border-brand-champagne-gold rounded-2xl transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-champagne-gold group hover:scale-105"
          >
            <span class="h-40 bg-brand-champagne-gold rounded-xl">
              <h1 class="font-domaineregular text-6xl text-white m-2 p-2">
                Yin Yoga
              </h1>
            </span>
            <span class="relative h-60 sm:h-72 m-1 p-1">
              <p class="text-lg">
                An instant stress relief button! Yin is the most accessible of
                the physical yoga systems and can be practised by anyone.
              </p>
              <NuxtLink to="/yinyoga">
                <button
                  class="absolute bottom-0 border border-brand-champagne-gold text-brand-champagne-gold rounded-3xl text-lg transition duration-700 ease-in-out hover:bg-brand-champagne-gold hover:text-white"
                >
                  <p class="m-1">Learn more</p>
                </button>
              </NuxtLink>
            </span>
          </article>
        </div>
      </section> -->
		</div>
	</div>
</template>
