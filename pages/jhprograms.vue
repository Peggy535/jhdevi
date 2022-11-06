<script setup>
	const query = groq`*[_type == "programStore"] | order(_id) {_id, title, summaryDescription,price, snipcartGuid, "image":programImage.asset->url, productId, price, body }`;
	const { data: programs } = useSanityQuery(query);
	refreshNuxtData();

	definePageMeta({
		layout: "goldnav",
	});
</script>

<template>
	<div>
		<section class="h-screen w-screen fixed z-10">
			<IconsMandala6 class="fill-brand-rose-dark opacity-20" style="width: 300%" />
		</section>
		<div class="relative flex flex-col h-screen w-screen text-brand-rose-dark font-domainemedium place-content-end z-20">
			<h1 class="text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl m-1 p-1 mb-32">JH Programs</h1>
		</div>
		<div class="relative flex flex-col h-auto w-screen font-objectSans z-20 px-2">
			<div v-for="program in programs" :key="program._id">
				<section class="w-full sm:w-5/6 sm:mx-auto lg:w-2/3 xl:w-1/2 h-auto rounded-2xl bg-brand-rose-dark py-2">
					<div class="m-2 p-2">
						<h1 class="font-domainebold text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl">{{ program.title }}</h1>
					</div>
					<div class="m-2 p-2 bg-white rounded-2xl my-6">
						<h2 class="text-lg xl:text-xl m-1 p-1 text-brand-grey">{{ program.summaryDescription }}</h2>
					</div>
					<IconsDivider1 class="w-1/2 mx-auto fill-white" />
					<div class="m-1 p-1 bg-white rounded-2xl flex flex-row items-center justify-between">
						<p class="text-4xl md:text-5xl inline-block text-brand-grey m-2 p-2">£{{ program.price }}</p>
						<button
							class="snipcart-add-item inline-block border border-brand-rose-dark text-brand-grey m-2 p-2 rounded-2xl md:text-xl"
							:data-item-id="`${program.productId}`"
							:data-item-price="program.price"
							:data-item-description="`${program.summaryDescription}`"
							:data-item-image="`${program.image}`"
							:data-item-name="`${program.subTitle}`"
							:data-item-file-guid="`${program.snipcartGuid}`"
						>
							Buy now
						</button>
					</div>
					<IconsDivider1 class="w-1/2 mx-auto fill-white" />
					<h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl m-2 p-2 text-white font-domainebold mt-6">Program Description</h2>
					<div class="prose mx-2 px-2 prose-sm md:prose-lg bg-white rounded-2xl pt-6 pb-2 text-brand-grey">
						<SanityContent :blocks="program.body" />
					</div>
				</section>
			</div>
		</div>
	</div>
</template>
