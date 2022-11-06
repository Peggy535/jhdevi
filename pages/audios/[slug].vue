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
		{{ audio.indAudio[0].title }}
		{{ audio.indAudio[0].subTitle }}
		{{ audio.indAudio[0].playingTime }}
		{{ audio.indAudio[0].fileFormat }}
		{{ audio.indAudio[0].summaryDescription }}
		{{ audio.indAudio[0].image }}
		{{ audio.indAudio[0].price }}
		{{ audio.indAudio[0].snipcartGuid }}
		{{ audio.indAudio[0].productId }}
		{{ audio.indAudio[0].slug.current }}

		<button
			class="snipcart-add-item inline-block border border-brand-rose-dark text-brand-grey m-2 p-2 rounded-2xl md:text-xl"
			:data-item-id="`${audio.indAudio[0].productId}`"
			:data-item-price="audio.indAudio[0].price"
			:data-item-description="`${audio.indAudio[0].summaryDescription}`"
			:data-item-image="`${audio.indAudio[0].image}`"
			:data-item-name="`${audio.indAudio[0].subTitle}`"
			:data-item-file-guid="`${audio.indAudio[0].snipcartGuid}`"
		>
			Buy now
		</button>
	</div>
</template>
