<script setup>
	const query = groq`*[_type == "blogArticle"] | order(publishedDate desc) {_id, title, publishedDate, summaryDescription, body, "image":articleImage.asset->url, slug, myTags, minRead}`;
	const { data: blogs } = useSanityQuery(query);
	refreshNuxtData();

	definePageMeta({
		layout: "goldnav",
	});
</script>

<template>
	<div>
		<section class="h-screen w-screen fixed z-10">
			<IconsMandala3 class="fill-brand-champagne-gold opacity-80" style="width: 150%" />
		</section>
		<div class="relative flex h-auto w-screen font-domainemedium text-brand-champagne-gold z-20">
			<h1 class="text-7xl sm:text-8xl md:text-9xl xl:text-10xl m-1 p-1 my-20">JH Blog</h1>
		</div>
		<div
			class="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 lg:gap-20 xl:gap-16 w-screen h-auto mb-5 font-objectSans px-2 md:px-4 lg:px-8 z-20 text-brand-grey-light"
		>
			<div v-for="blog in blogs" :key="blog._id">
				<article
					class="grid col-span-1 min-h-min border border-brand-champagne-gold rounded-2xl transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-champagne-gold group hover:scale-105 bg-white"
				>
					<span class="h-48 bg-brand-champagne-gold rounded-xl">
						<h1 class="m-1 p-1 text-3xl lg:text-4xl">
							{{ blog.title }}
						</h1>
						<p class="text-sm lg:text-md m-1 p-1">{{ blog.minRead }} min read</p>
					</span>
					<span class="relative h-48 sm:h-60 rounded-2xl">
						<p class="m-1 p-1 text-xs lg:text-sm">{{ new Date(blog.publishedDate).toLocaleDateString() }}</p>
						<p class="text-md lg:text-lg m-1 p-1">
							{{ blog.summaryDescription }}
						</p>
						<NuxtLink :to="`/blogs/${blog.slug.current}`">
							<button
								class="absolute bottom-2 left-2 border border-brand-champagne-gold text-brand-champagne-gold rounded-3xl text-lg transition duration-700 ease-in-out hover:bg-brand-champagne-gold hover:text-brand-light-cream"
							>
								<p class="text-sm m-1 p-1">Read now</p>
							</button>
						</NuxtLink>
					</span>
				</article>
			</div>
		</div>
	</div>
</template>
