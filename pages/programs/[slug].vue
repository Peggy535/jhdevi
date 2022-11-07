<script setup>
	const route = useRoute();
	const sanity = useSanity();

	const {
		pending,
		data: program,
		refresh,
	} = await useAsyncData(
		"indProgram",
		() =>
			sanity.fetch(
				groq`{"indProgram": *[_type == "programStore" && slug.current == "${route.params.slug}"]{title, summaryDescription, "image":programImage.asset->url, price, snipcartGuid, productId, body, slug}}`
			),
		{
			initialCache: false,
		}
	);
	refresh();
</script>

<template>
	<div>
		<Nav
			textColour="text-brand-rose-dark"
			fillColour="fill-white"
			afterLineColour="after:bg-brand-rose-dark"
			borderColour="border-brand-rose-dark"
			cartBorderColour="border-white"
		></Nav>
		<section class="h-screen w-screen bg-brand-rose-dark fixed z-10">
			<IconsMandala8 class="fill-white opacity-10" style="width: 150%" />
		</section>
		<div class="relative z-20 w-screen h-auto overflow-hidden font-objectSans text-white">
			<section class="relative flex flex-col w-full sm:w-4/5 lg:w-2/3 mx-auto h-auto">
				<div class="mt-20 lg:mt-32 mb-10">
					<h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-domainebold m-1 p-1">
						{{ program.indProgram[0].title }}
					</h1>
					<NuxtLink to="/jhprograms">
						<div class="relative flex flex-row w-fit h-fit border border-white rounded-2xl items-center mt-10">
							<IconsArrowleft class="fill-white w-10 inline-block" />
							<p class="m-1 p-1 text-xs">Go back</p>
						</div>
					</NuxtLink>
				</div>

				<h2 class="font-domainebold m-1 p-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Description:</h2>
				<p class="m-1 p-1 text-lg lg:text-xl">{{ program.indProgram[0].summaryDescription }}</p>
				<div class="flex flex-row items-center justify-between border border-white rounded-2xl m-2 bg-brand-rose-gold my-6 lg:my-10 xl:my-14">
					<p class="m-2 p-2 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Price £{{ program.indProgram[0].price }}</p>
					<button
						class="snipcart-add-item inline-block border border-white m-2 p-2 rounded-2xl md:text-xl"
						:data-item-id="`${program.indProgram[0].productId}`"
						:data-item-price="program.indProgram[0].price"
						:data-item-description="`${program.indProgram[0].summaryDescription}`"
						:data-item-image="`${program.indProgram[0].image}`"
						:data-item-name="`${program.indProgram[0].title}`"
						:data-item-file-guid="`${program.indProgram[0].snipcartGuid}`"
					>
						Add to cart
					</button>
				</div>
				<h2 class="font-domainebold m-1 p-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
					Detail about the program:
				</h2>
				<div class="prose prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl m-1 p-1 text-white mb-6 mx-auto">
					<SanityContent :blocks="program.indProgram[0].body" />
				</div>
			</section>
		</div>
	</div>
</template>
