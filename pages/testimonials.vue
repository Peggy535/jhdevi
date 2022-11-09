<script setup>
	const query = groq`*[_type == "testimonial"] | order(testimonialDate desc) {_id, title, testimonialDate, testimonial, slug}`;
	const { data: testimonials } = useSanityQuery(query);
	refreshNuxtData();
</script>

<template>
	<div>
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
		<div
			class="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 lg:gap-20 xl:gap-16 w-screen h-auto mb-5 font-objectSans px-2 md:px-4 lg:px-8 z-20 text-brand-grey"
		>
			<div v-for="indtestimonial in testimonials" :key="indtestimonial._id">
				<article
					class="grid col-span-1 min-h-min border border-brand-sage rounded-2xl transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-sage group hover:scale-105 bg-white"
				>
					<span class="h-52 sm:h-56 md:h-48 bg-brand-sage rounded-xl font-domaineextrabold">
						<h1 class="m-1 p-1 text-3xl lg:text-4xl xl:text-3xl">
							{{ indtestimonial.title }}
						</h1>
					</span>
					<span class="relative h-48 sm:h-60 rounded-2xl">
						<p class="m-1 p-1 text-xs lg:text-sm">{{ new Date(indtestimonial.testimonialDate).toLocaleDateString() }}</p>
						<p class="text-md lg:text-lg m-1 p-1">
							{{ indtestimonial.testimonial }}
						</p>
					</span>
				</article>
			</div>
		</div>
	</div>
</template>
