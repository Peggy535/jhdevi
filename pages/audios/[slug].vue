<script setup>
	const route = useRoute();
	const sanity = useSanity();

	const {
		pending,
		data: audio,
		refresh,
	} = await useAsyncData(
		"indAudio",
		() =>
			sanity.fetch(
				groq`{"indAudio": *[_type == "audioStore" && slug.current == "${route.params.slug}"]{title, subTitle, playingTime, fileFormat, summaryDescription, "image":audioImage.asset->url, price, snipcartGuid, productId, listOfConditions, slug}}`
			),
		{
			initialCache: false,
		}
	);
	refresh();

	definePageMeta({
		layout: "goldnav",
	});
</script>

<template>
	<div>
		<section class="h-screen w-screen bg-brand-champagne-dark fixed z-10">
			<IconsMandala1 class="fill-white opacity-10" style="width: 150%" />
		</section>
		<div class="relative z-20 w-screen h-auto overflow-hidden font-objectSans text-white">
			<section class="relative flex flex-col w-full sm:w-4/5 lg:w-2/3 mx-auto h-auto">
				<div class="mt-20 lg:mt-32 mb-10">
					<h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-domainebold m-1 p-1">{{ audio.indAudio[0].title }}</h1>
					<h3 class="text-xl lg:text-2xl xl:text-3xl m-1 p-1">{{ audio.indAudio[0].subTitle }}</h3>
				</div>

				<p class="font-domainebold m-1 p-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Description:</p>
				<p class="m-1 p-1 text-lg lg:text-xl">{{ audio.indAudio[0].summaryDescription }}</p>
				<div class="flex flex-row items-center justify-between border border-white rounded-2xl m-2 bg-brand-champagne-gold my-6 lg:my-10 xl:my-14">
					<p class="m-2 p-2 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Price £{{ audio.indAudio[0].price }}</p>
					<button
						class="snipcart-add-item inline-block border border-white m-2 p-2 rounded-2xl md:text-xl"
						:data-item-id="`${audio.indAudio[0].productId}`"
						:data-item-price="audio.indAudio[0].price"
						:data-item-description="`${audio.indAudio[0].summaryDescription}`"
						:data-item-image="`${audio.indAudio[0].image}`"
						:data-item-name="`${audio.indAudio[0].subTitle}`"
						:data-item-file-guid="`${audio.indAudio[0].snipcartGuid}`"
					>
						Purchase
					</button>
				</div>
				<IconsAudioInfo class="w-16 fill-white m-1 p-1" />
				<div class="prose prose-sm m-1 p-1 text-white mb-6">
					<SanityContent :blocks="audio.indAudio[0].listOfConditions" />
				</div>
			</section>
		</div>
	</div>
</template>
