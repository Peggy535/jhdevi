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
		<Head>
			<Title>{{ program.indProgram[0].title }}</Title>
			<Meta name="og:type" content="product" />
			<Meta name="og:title" :content="`${program.indProgram[0].title}`" />
			<Meta name="og:description" :content="`${program.indProgram[0].summaryDescription}`" />
			<Meta name="og:url" :content="`https://www.jhdevi.com${route.fullPath}`" />
			<Meta name="og:site_name" content="JH Devi Integrated Therapies" />
			<Meta name="product:price:amount" :content="`${program.indProgram[0].price}`" />
			<Meta name="product:price:currency" content="GBP" />
			<Meta name="og:availability" content="instock" />
			<Meta name="og:image" :content="`${program.indProgram[0].image}?h=800&w=800&auto=format&fit=min`" />
			<Meta name="twitter:card" content="summary" />
			<Meta name="twitter:site" content="@hodgson_justine" />
			<Meta name="twitter:title" :content="`${program.indProgram[0].title}`" />
			<Meta name="twitter:description" :content="`${program.indProgram[0].summaryDescription}`" />
			<Meta name="twitter:image" :content="`${program.indProgram[0].image}?h=800&w=800&auto=format&fit=min`" />
			<Link rel="canonical" :href="`https://www.jhdevi.com${route.fullPath}`" />
			<SchemaOrgProduct
				:name="`${program.indProgram[0].title}`"
				brand="JH Devi"
				countryOfOrigin="United Kingdom"
				description="program.indProgram[0].summaryDescription"
				:sku="`${program.indProgram[0].productId}`"
				:image="`${program.indProgram[0].image}?h=1000&w=1000&auto=format&fit=min`"
				:url="`https://jhdevi.com${route.fullPath}`"
			/>
			<SchemaOrgOrganization name="JH Devi Integrated Therapies" logo="/icon.png" />
			<SchemaOrgWebSite name="JH Devi Integrated Therapies" />
			<SchemaOrgWebPage />
		</Head>
		<Nav
			textColour="text-brand-rose-gold"
			fillColour="fill-white"
			afterLineColour="after:bg-brand-rose-gold"
			borderColour="border-brand-rose-gold"
			btnBgColour="bg-white"
			cartInfoColour="text-white"
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
					<NuxtLink to="/jhprogrammes">
						<div
							class="relative flex flex-row w-fit h-fit border border-white rounded-2xl items-center mt-10 transition duration-700 ease-in-out hover:scale-110"
						>
							<IconsArrowleft class="fill-white w-10 sm:w-12 md:w-14 lg:w-16 inline-block" />
							<p class="m-1 p-1 text-xs lg:text-sm">Go back</p>
						</div>
					</NuxtLink>
				</div>

				<h2 class="font-domainebold m-1 p-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Description:</h2>
				<p class="m-1 p-1 text-lg lg:text-xl">{{ program.indProgram[0].summaryDescription }}</p>
				<div class="flex flex-col items-center text-center border-4 border-brand-rose-light rounded-2xl m-2 bg-white my-6 lg:my-10 xl:my-14">
					<p class="m-2 p-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brand-rose-dark underline decoration-3">
						Price £{{ program.indProgram[0].price }}
					</p>
					<button
						class="snipcart-add-item inline-block border border-brand-rose-dark text-brand-rose-dark m-2 p-2 rounded-2xl md:text-xl transition duration-500 ease-in-out hover:bg-brand-rose-dark hover:text-white hover:scale-110"
						:data-item-id="`${program.indProgram[0].productId}`"
						:data-item-price="program.indProgram[0].price"
						:data-item-description="`${program.indProgram[0].summaryDescription}`"
						:data-item-image="`${program.indProgram[0].image}?h=1000&w=1000&auto=format&fit=min`"
						:data-item-name="`${program.indProgram[0].title}`"
						:data-item-file-guid="`${program.indProgram[0].snipcartGuid}`"
					>
						Add to cart
					</button>
				</div>
				<h2 class="font-domainebold m-1 p-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
					Detail about the program:
				</h2>
				<div
					class="prose prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-strong:text-white prose-headings:text-white m-1 p-1 text-white mb-6 mx-auto"
				>
					<SanityContent :blocks="program.indProgram[0].body" />
				</div>
			</section>
		</div>
		<Footer footerBgColour="bg-brand-rose-dark"></Footer>
	</div>
</template>
