<script setup>
	const query = groq`*[_type == "audioStore"] | order(_id) {_id, title, subTitle, summaryDescription, price, productId, slug}`;
	const { data: audios } = useSanityQuery(query);
	refreshNuxtData();
	const title = ref("JH Devi | JH Audios");
	const description = ref(
		"Buy your very own JH Audio therapy file at affordable prices - to help you on your journey to overcome whatever issue lays before you."
	);
</script>

<template>
	<div>
		<Head>
			<Meta name="og:title" :content="title" />
			<Meta name="og:description" :content="description" />
			<Meta name="og:url" content="https://www.jhdevi.com/jhaudios" />
			<Meta name="og:site_name" content="JH Devi Integrated Therapies" />
			<Meta name="og:image" content="https://www.jhdevi.com/icon.png" />
			<Meta name="og:locale" content="en_GB" />
			<Meta name="twitter:card" content="summary" />
			<Meta name="twitter:site" content="@hodgson_justine" />
			<Meta name="twitter:title" content="title" />
			<Meta name="twitter:description" content="description" />
			<Meta name="twitter:image" content="https://www.jhdevi.com/icon.png" />
			<SchemaOrgOrganization name="JH Devi Integrated Therapies" logo="/icon.png" />
			<SchemaOrgWebSite name="JH Devi Integrated Therapies" />
			<SchemaOrgWebPage />
		</Head>
		<Nav
			textColour="text-brand-champagne-dark"
			fillColour="fill-brand-champagne-dark"
			afterLineColour="after:bg-brand-champagne-dark"
			borderColour="border-brand-champagne-dark"
			btnBgColour="bg-brand-champagne-dark"
			cartInfoColour="text-brand-champagne-dark"
		></Nav>
		<section class="h-screen w-screen fixed z-10">
			<IconsMandala5 class="fill-brand-champagne-gold opacity-20" style="width: 150%" />
		</section>
		<div class="relative flex flex-col h-screen w-screen text-brand-champagne-dark place-content-end">
			<h1 class="font-domainemedium text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl m-1 p-1">JH Audios</h1>
			<h2 class="font-objectSans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl m-1 p-1 mb-10">
				Buy an individual audio track to help you with a specific issue, choose one of my revolutionary programmes or join me and others for a
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
									<button
										class="border border-brand-champagne-dark text-brand-champagne-dark rounded-2xl m-1 p-1 transition duration-700 ease-in-out hover:bg-brand-champagne-dark hover:border-brand-champagne-light hover:text-white"
									>
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
