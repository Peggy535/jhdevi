<script setup>
	const query = groq`*[_type == "blogArticle"] | order(publishedDate desc) {_id, title, publishedDate, summaryDescription, body, "image":articleImage.asset->url, slug, myTags, minRead}`;
	const { data: blogs } = useSanityQuery(query);
	refreshNuxtData();
	const route = useRoute();
	const title = ref("JH Devi | Blog articles");
	const description = ref("Discover a vast range of blog articles written by me covering many different aspects of life, therapy and opinion.");
</script>

<template>
	<div>
		<Head>
			<Meta name="og:title" :content="title" />
			<Meta name="og:description" :content="description" />
			<Meta name="og:url" content="https://www.jhdevi.com/jhblog" />
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
			textColour="text-brand-champagne-gold"
			fillColour="fill-brand-champagne-dark"
			afterLineColour="after:bg-brand-champagne-gold"
			borderColour="border-brand-champagne-gold"
			btnBgColour="bg-brand-champagne-gold"
			cartInfoColour="text-brand-champagne-dark"
		></Nav>
		<section class="h-screen w-screen fixed z-10">
			<IconsMandala3 class="fill-brand-champagne-gold opacity-80" style="width: 150%" />
		</section>
		<div class="relative flex h-auto w-screen font-domainemedium text-brand-champagne-gold z-20">
			<h1 class="text-8xl sm:text-9xl md:text-10xl xl:text-11xl 2xl:text-12xl m-1 p-1 my-48">JH Blog</h1>
		</div>
		<div
			class="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 lg:gap-20 xl:gap-16 w-screen h-auto mb-5 font-objectSans px-2 md:px-4 lg:px-8 z-20 text-brand-grey"
		>
			<div v-for="blog in blogs" :key="blog._id">
				<article
					class="grid col-span-1 min-h-min border border-brand-champagne-gold rounded-2xl transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-champagne-gold group hover:scale-105 bg-white"
				>
					<span class="h-68 sm:h-56 md:h-48 bg-brand-champagne-gold rounded-xl font-domaineextrabold">
						<h1 class="m-1 p-1 text-3xl lg:text-4xl xl:text-3xl">
							{{ blog.title }}
						</h1>
						<p class="text-sm lg:text-md m-1 p-1">{{ blog.minRead }} min read</p>
					</span>
					<span class="relative h-64 sm:h-60 rounded-2xl">
						<p class="m-1 p-1 text-xs lg:text-sm">{{ new Date(blog.publishedDate).toLocaleDateString() }}</p>
						<p class="text-sm lg:text-md m-1 p-1">
							{{ blog.summaryDescription }}
						</p>
						<NuxtLink :to="`/blogs/${blog.slug.current}`">
							<button
								class="absolute bottom-2 left-2 border border-brand-champagne-gold text-brand-champagne-gold rounded-3xl text-lg transition duration-700 ease-in-out hover:bg-brand-champagne-gold hover:text-white"
							>
								<p class="text-sm m-1 p-1">Read now</p>
							</button>
						</NuxtLink>
					</span>
				</article>
			</div>
		</div>
		<Footer footerBgColour="bg-brand-champagne-gold"></Footer>
	</div>
</template>
