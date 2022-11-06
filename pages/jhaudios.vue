<script setup>
	const query = groq`*[_type == "audioStore"] | order(_id) {_id, title, subTitle, summaryDescription, price, productId, slug}`;
	const { data: audios } = useSanityQuery(query);
	refreshNuxtData();

	definePageMeta({
		layout: "goldnav",
	});
</script>

<template>
	<div>
		<section class="h-screen w-screen fixed z-10">
			<IconsMandala5 class="fill-brand-champagne-gold opacity-20" style="width: 150%" />
		</section>
		<div class="relative flex flex-col h-screen w-screen text-brand-champagne-dark place-content-end">
			<h1 class="font-domainemedium text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl m-1 p-1">JH Audios</h1>
			<h2 class="font-objectSans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl m-1 p-1 mb-10">
				Buy an individual audio track to help you with a specific issue, choose one of my revolutionary programs or join me and others for a
				tapping circle!
			</h2>
		</div>
		<div
			class="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 lg:gap-20 xl:gap-16 w-screen h-auto mb-5 font-objectSans px-2 md:px-4 lg:px-8 z-20 text-brand-grey"
		>
			<div v-for="audio in audios" :key="audio._id">
				<div class="grid col-span-1">
					<article class="flex flex-col border border-brand-champagne-dark rounded-2xl w-full mx-auto bg-white">
						<div class="h-42 bg-brand-champagne-dark rounded-xl text-brand-grey p-2">
							<h1 class="text-4xl sm:text-3xl lg:text-4xl m-1 p-1 font-domaineextrabold">{{ audio.title }}</h1>
							<h1 class="text-lg m-1 p-1">{{ audio.subTitle }}</h1>
						</div>
						<div class="relative m-1 p-1 text-brand-grey">
							<p class="h-auto text-sm">
								{{ audio.summaryDescription }}
							</p>
							<div class="flex flex-row items-center justify-between mt-4">
								<p class="text-3xl inline-block m-1 p-1">£{{ audio.price }}</p>
								<NuxtLink :to="`/audios/${audio.slug.current}`">
									<button class="border border-brand-champagne-dark rounded-2xl m-1 p-1">
										<p class="text-sm p-1">Read more</p>
									</button>
								</NuxtLink>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</template>
