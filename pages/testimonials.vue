<script setup>
	const query = groq`*[_type == "testimonials"] | order(_id) {_id, title, testimonialDate, testimonial, slug}`;
	const { data: testimonials } = useSanityQuery(query);
	refreshNuxtData();
	const route = useRoute();
</script>

<template>
	<div>
		<Head>
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
			bgCartInfo="bg-brand-sage"
			cartInfoColour="text-white"
		></Nav>
		<section class="h-screen w-screen fixed z-10">
			<IconsEyeOfHorus class="fill-brand-sage opacity-20" style="width: 125%" />
		</section>
		<div class="relative flex flex-col h-screen w-screen text-brand-sage place-content-end z-20 overflow-hidden">
			<h1 class="font-domainemedium text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl m-1 p-1 mb-32">Testimonials</h1>
		</div>
		<div class="relative flex flex-col w-screen h-auto font-objectSans z-30 text-brand-grey px-1">
			<div v-for="indtestimonial in testimonials" :key="indtestimonial._id">
				<div class="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 border-2 border-brand-sage rounded-2xl m-2 mx-auto bg-white">
					<div class="h-52 sm:h-56 md:h-48 lg:h-58 rounded-xl font-domaineextrabold bg-brand-sage text-white">
						<h1 class="text-4xl sm:text-5xl lg:text-6xl p-2">
							{{ indtestimonial.title }}
						</h1>
					</div>
					<span class="relative h-auto sm:h-60 rounded-2xl">
						<p class="m-1 p-1 text-xs">{{ indtestimonial.testimonialDate }}</p>
						<p class="text-md lg:text-lg m-2 p-2 lg:m-3 lg:p-3">
							{{ indtestimonial.testimonial }}
						</p>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
