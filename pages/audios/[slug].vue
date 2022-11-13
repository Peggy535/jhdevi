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
</script>

<template>
	<div>
		<Head>
			<Title>{{ audio.indAudio[0].title }}</Title>
			<Meta name="og:type" content="product" />
			<Meta name="og:title" :content="`${audio.indAudio[0].title}`" />
			<Meta name="og:description" :content="`${audio.indAudio[0].summaryDescription}`" />
			<Meta name="og:url" :content="`https://www.jhdevi.com${route.fullPath}`" />
			<Meta name="og:site_name" content="JH Devi Integrated Therapies" />
			<Meta name="product:price:amount" :content="`${audio.indAudio[0].price}`" />
			<Meta name="product:price:currency" content="GBP" />
			<Meta name="og:availability" content="instock" />
			<Meta name="og:image" :content="`${audio.indAudio[0].image}?h=1000&w=1000&auto=format&fit=min`" />
			<Link rel="canonical" :href="`https://www.jhdevi.com${route.fullPath}`" />
			<Meta name="twitter:card" content="summary" />
			<Meta name="twitter:site" content="@hodgson_justine" />
			<Meta name="twitter:title" :content="`${audio.indAudio[0].title}`" />
			<Meta name="twitter:description" :content="`${audio.indAudio[0].summaryDescription}`" />
			<Meta name="twitter:image" :content="`https://www.jhdevi.com${route.fullPath}`" />
			<SchemaOrgProduct
				:name="`${audio.indAudio[0].title}`"
				brand="JH Devi"
				countryOfOrigin="United Kingdom"
				description="audio.indAudio[0].summaryDescription"
				:sku="`${audio.indAudio[0].productId}`"
				:image="`${audio.indAudio[0].image}?h=1000&w=1000&auto=format&fit=min`"
				:url="`https://jhdevi.com${route.fullPath}`"
			/>
			<SchemaOrgOrganization name="JH Devi Integrated Therapies" logo="/icon.png" />
			<SchemaOrgWebSite name="JH Devi Integrated Therapies" />
			<SchemaOrgWebPage />
		</Head>
		<Nav
			textColour="text-brand-champagne-dark"
			fillColour="fill-white"
			afterLineColour="after:bg-brand-champagne-dark"
			borderColour="border-brand-champagne-dark"
			bgCartInfo="bg-white"
			cartInfoColour="text-white"
		></Nav>
		<section class="h-screen w-screen bg-brand-champagne-dark fixed z-10">
			<IconsMandala1 class="fill-white opacity-10" style="width: 150%" />
		</section>
		<div class="relative z-20 w-screen h-auto overflow-hidden font-objectSans text-white">
			<section class="relative flex flex-col w-full sm:w-4/5 lg:w-2/3 mx-auto h-auto">
				<div class="mt-20 lg:mt-32 mb-10">
					<h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-domainebold m-1 p-1">
						{{ audio.indAudio[0].title }}
					</h1>
					<h3 class="text-xl lg:text-2xl xl:text-3xl m-1 p-1">{{ audio.indAudio[0].subTitle }}</h3>
					<NuxtLink to="/jhaudios">
						<div
							class="relative flex flex-row w-fit h-fit border border-white rounded-2xl items-center mt-10 transition duration-700 ease-in-out hover:scale-110"
						>
							<IconsArrowleft class="fill-white w-10 sm:w-12 md:w-14 lg:w-16 inline-block" />
							<p class="m-1 p-1 text-xs lg:text-sm">Go back</p>
						</div>
					</NuxtLink>
				</div>

				<p class="font-domainebold m-1 p-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Description:</p>
				<p class="m-1 p-1 text-lg lg:text-xl">{{ audio.indAudio[0].summaryDescription }}</p>
				<div
					class="flex flex-row items-center justify-between border-4 border-brand-champagne-light rounded-2xl m-2 bg-white my-6 lg:my-10 xl:my-14"
				>
					<p class="m-2 p-2 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-brand-champagne-dark">
						Price £{{ audio.indAudio[0].price }}
					</p>
					<button
						class="snipcart-add-item inline-block border border-brand-champagne-dark text-brand-champagne-dark m-2 p-2 rounded-2xl md:text-xl"
						:data-item-id="`${audio.indAudio[0].productId}`"
						:data-item-price="audio.indAudio[0].price"
						:data-item-description="`${audio.indAudio[0].summaryDescription}`"
						:data-item-image="`${audio.indAudio[0].image}?h=1000&w=1000&auto=format&fit=min`"
						:data-item-name="`${audio.indAudio[0].subTitle}`"
						:data-item-file-guid="`${audio.indAudio[0].snipcartGuid}`"
					>
						Add to cart
					</button>
				</div>
				<IconsAudioInfo class="w-16 fill-white" />
				<div
					class="prose prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-strong:text-white prose-headings:text-white m-1 p-2 text-white mb-6 mx-auto"
				>
					<SanityContent :blocks="audio.indAudio[0].listOfConditions" />
				</div>
			</section>
		</div>
		<Footer footerBgColour="bg-brand-champagne-dark"></Footer>
	</div>
</template>
