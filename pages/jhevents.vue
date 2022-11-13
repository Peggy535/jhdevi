<script setup>
	const query = groq`*[_type == "eventStore"] | order(_id) {_id, title, summaryDescription,price, snipcartGuid, "image":programmeImage.asset->url, productId, body, slug}`;
	const { data: events } = useSanityQuery(query);
	refreshNuxtData();
	const route = useRoute();
	const title = ref("JH Devi | JH Programs");
	const description = ref(
		"Buy an individual program track to help you with a specific issue, choose one of my revolutionary programs or join me and others for tapping circle!"
	);
</script>

<template>
	<div>
		<Head>
			<Meta name="og:title" :content="title" />
			<Meta name="og:description" :content="description" />
			<Meta name="og:url" content="https://www.jhdevi.com/jhevents" />
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
			textColour="text-brand-sage"
			fillColour="fill-brand-sage"
			afterLineColour="after:bg-brand-sage"
			borderColour="border-brand-sage"
			btnBgColour="bg-brand-sage"
			cartInfoColour="text-brand-sage"
		></Nav>
		<section class="h-screen w-screen fixed z-10">
			<IconsMandala9 class="fill-brand-sage opacity-20" style="width: 150%" />
		</section>
		<div class="relative flex flex-col h-screen w-screen overflow-hidden text-brand-sage place-content-end">
			<h1 class="font-domainemedium text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl m-1 p-1">JH Events</h1>
			<h2 class="font-objectSans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl m-1 p-1 mb-10">
				Buy an individual programme track to help you with a specific issue, choose one of my revolutionary programmes or join me and others
				for a tapping circle!
			</h2>
		</div>
		<div
			class="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 lg:gap-20 xl:gap-16 w-screen h-auto mb-10 font-objectSans px-2 md:px-4 lg:px-8 z-20 text-brand-grey"
		>
			<div v-for="event in events" :key="event._id">
				<div class="grid col-span-1">
					<article class="flex flex-col border border-brand-sage rounded-2xl w-full mx-auto bg-white">
						<div class="h-42 bg-brand-sage rounded-xl text-white p-2">
							<h1 class="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl m-1 p-1 font-domaineextrabold">
								{{ event.title }}
							</h1>
						</div>
						<div class="relative m-1 p-1 text-brand-grey">
							<p class="h-auto text-sm">
								{{ event.summaryDescription }}
							</p>
							<div class="flex flex-row items-center justify-between mt-4">
								<p class="text-3xl inline-block m-1 p-1">£{{ event.price }}</p>
								<NuxtLink :to="`/events/${event.slug.current}`">
									<button class="border border-brand-sage rounded-2xl m-1 p-1">
										<p class="text-sm p-1">Read more</p>
									</button>
								</NuxtLink>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
		<Footer footerBgColour="bg-brand-sage"></Footer>
	</div>
</template>
