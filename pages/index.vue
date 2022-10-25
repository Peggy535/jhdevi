<script setup>
	import Arrowright from "~~/components/icons/arrowright.vue";
	definePageMeta({
		layout: "default",
	});
</script>

<template>
	<div>
		<div class="overflow-hidden font-domaineregular text-neutral-700">
			<!-- Video section -->
			<section class="h-screen w-screen fixed">
				<video
					class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
					src="https://res.cloudinary.com/peggy-co/video/upload/q_auto,vc_vp9/v1595960724/Well%20Being/wellbeing_1_xxiym7.webm"
					autoplay
					loop
					muted
					playsinline
					preload="true"
					poster="https://res.cloudinary.com/peggy-co/video/upload/c_scale,q_auto,w_640/v1595960724/Well%20Being/wellbeing_1_xxiym7.jpg"
				></video>
			</section>
			<!-- Landing title -->
			<main class="relative h-auto w-screen z-20 bg-rose-200 bg-opacity-60">
				<section class="relative flex flex-col h-screen w-screen justify-end">
					<div class="text-white text-5xl sm:text-5xl md:text-6xl xl:text-7xl m-2 p-2 mb-20">
						<h1>Justine</h1>
						<h1>Hodgson</h1>
						<h1>Integrated</h1>
						<h1>Therapies</h1>
					</div>
				</section>

				<!-- Personal message -->
				<section class="relative flex flex-col h-auto w-screen justify-evenly">
					<blockquote class="m-2 p-2 xl:w-3/4 2xl:w-1/2 bg-rose-50 rounded-xl border-2 border-brand-rose-dark">
						<span class="float-left text-9xl sm:text-10xl md:text-11xl lg:text-9xl xl:text-10xl text-brand-rose-gold font-domaineregular"
							>H</span
						>
						<p class="text-2xl sm:text-3xl lg:text-4xl m-1 p-1 md:m-2 md:p-2 text-brand-grey-light">
							ello and welcome to my website, I hope you find both it and the words helpful, healing and inspiring. Whatever you are
							facing at this time in your life, no matter what it is, please be assured there is a reason and that there is help for you
							if you wish to receive it.
						</p>
						<div class="my-10">
							<span
								class="float-left text-brand-rose-gold font-domaineregular text-9xl sm:text-9xl md:text-10xl lg:text-9xl xl:text-10xl"
								>Y</span
							>
							<h2 class="text-brand-grey-light text-6xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl m-1 p-1">
								ou are beautiful, unique and deserving of all good things.
							</h2>
							<cite class="m-3 p-3 text-brand-rose-gold">- Justine Hodgson</cite>
						</div>
						<video
							class="w-4/5 object-center object-cover mx-auto my-14 rounded-2xl border-2 border-brand-rose-dark"
							src="https://res.cloudinary.com/peggy-co/video/upload/b_rgb:b76e79,co_rgb:b76e79,q_auto,vc_vp9/v1666692181/Well%20Being/slow_promo_DEVI_kphuws.webm"
							playsinline
							controls
							preload="true"
							poster="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1666692181/Well%20Being/slow_promo_DEVI_kphuws.jpg"
						></video>
						<div class="relative h-auto w-fit flex flex-row z-30 items-center float-right border border-brand-rose-gold rounded-2xl">
							<span class="m-1 p-1">
								<p class="text-xl text-brand-grey-light">JH Services</p>
							</span>
							<NuxtLink to="/about">
								<Arrowright
									class="inline mr-4 w-8 fill-brand-rose-gold hover:fill-white hover:border-brand-rose-gold hover:scale-110 transition duration-700 ease-in-out"
								/>
							</NuxtLink>
						</div>
					</blockquote>
				</section>
			</main>
		</div>
	</div>
</template>
