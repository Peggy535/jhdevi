<script setup>
	const query = groq`*[_type == "programStore"] | order(_id) {_id, title, summaryDescription,price, snipcartGuid, "image":programImage.asset->url, productId, body, slug}`;
	const { data: programmes } = useSanityQuery(query);
	refreshNuxtData();
	const route = useRoute();
	const title = ref("JH Devi | JH Programmes");
	const description = ref(
		"A refreshing and unique approach to therapy. JH programmes complement my integrated-therapies or can be used as a standalone concept to help you in so many ways."
	);
</script>

<template>
	<div>
		<Head>
			<Title>{{ title }}</Title>
			<Meta name="og:title" :content="title" />
			<Meta name="og:description" :content="description" />
			<Meta name="og:url" content="https://www.jhdevi.com/jhprogrammes" />
			<Meta name="og:site_name" content="JH Devi Integrated Therapies" />
			<Meta name="og:image" content="https://www.jhdevi.com/icon.png" />
			<Meta name="og:locale" content="en_GB" />
			<Meta name="twitter:card" content="summary" />
			<Meta name="twitter:site" content="@hodgson_justine" />
			<Meta name="twitter:title" content="title" />
			<Meta name="twitter:description" content="description" />
			<Meta name="twitter:image" content="https://www.jhdevi.com/icon.png" />
			<Link rel="canonical" :href="`https://www.jhdevi.com${route.fullPath}`" />
			<SchemaOrgOrganization name="JH Devi Integrated Therapies" logo="/icon.png" />
			<SchemaOrgWebSite name="JH Devi Integrated Therapies" />
			<SchemaOrgWebPage />
		</Head>
		<Nav
			textColour="text-brand-rose-gold"
			fillColour="fill-brand-rose-gold"
			afterLineColour="after:bg-brand-rose-gold"
			borderColour="border-brand-rose-gold"
			btnBgColour="bg-brand-rose-gold"
			cartInfoColour="text-brand-rose-gold"
		></Nav>
		<section class="h-screen w-screen fixed z-10">
			<IconsMandala7 class="fill-brand-rose-dark opacity-20" style="width: 150%" />
		</section>
		<div class="relative flex flex-col h-screen w-screen overflow-hidden text-brand-rose-dark place-content-end">
			<h1 class="font-domainemedium text-5xl sm:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl m-1 p-1">JH Programmes</h1>
			<h2 class="font-objectSans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl m-1 p-1 mb-10">
				Buy an individual programme track to help you with a specific issue, choose one of my revolutionary programmes or join me and others
				for a tapping circle!
			</h2>
		</div>
		<div
			class="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 lg:gap-20 xl:gap-16 w-screen h-auto mb-10 font-objectSans px-2 md:px-4 lg:px-8 z-20 text-brand-grey"
		>
			<div v-for="programme in programmes" :key="programme._id">
				<div class="grid col-span-1">
					<article class="flex flex-col border border-brand-rose-dark rounded-2xl w-full mx-auto bg-white">
						<div class="h-42 bg-brand-rose-dark rounded-xl text-white p-2">
							<h1 class="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl m-1 p-1 font-domaineextrabold">
								{{ programme.title }}
							</h1>
						</div>
						<div class="relative m-1 p-1 text-brand-grey">
							<p class="h-auto text-sm">
								{{ programme.summaryDescription }}
							</p>
							<div class="flex flex-row items-center justify-between mt-4">
								<p class="text-3xl inline-block m-1 p-1">£{{ programme.price }}</p>
								<NuxtLink :to="`/programmes/${programme.slug.current}`">
									<button class="border border-brand-rose-dark rounded-2xl m-1 p-1">
										<p class="text-sm p-1">Read more</p>
									</button>
								</NuxtLink>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
		<Footer footerBgColour="bg-brand-rose-dark"></Footer>
	</div>
</template>
