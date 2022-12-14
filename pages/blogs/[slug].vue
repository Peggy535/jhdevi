<script setup>
	const route = useRoute();
	const sanity = useSanity();

	const {
		pending,
		data: article,
		refresh,
	} = await useAsyncData(
		"indBlogArticle",
		() =>
			sanity.fetch(
				groq`{"indBlogArticle": *[_type == "blogArticle" && slug.current == "${route.params.slug}"]{title, publishedDate, minRead, "blogImage":articleImage.asset->url, slug, summaryDescripion, body, myTags}}`
			),
		{ initialCache: false }
	);
	refresh();
</script>

<template>
	<div>
		<Head>
			<Title>{{ article.indBlogArticle[0].title }}</Title>
			<Meta name="og:type" content="article" />
			<Meta name="og:title" :content="`${article.indBlogArticle[0].title}`" />
			<Meta name="og:description" :content="`${article.indBlogArticle[0].summaryDescription}`" />
			<Meta name="og:url" :content="`https://www.jhdevi.com${route.fullPath}`" />
			<Meta name="og:site_name" content="JH Devi Integrated Therapies" />
			<Meta name="og:image" :content="`${article.indBlogArticle[0].image}?h=1000&w=1000&auto=format&fit=min`" />
			<Link rel="canonical" :href="`https://www.jhdevi.com${route.fullPath}`" />
			<Meta name="twitter:card" content="summary" />
			<Meta name="twitter:site" content="@hodgson_justine" />
			<Meta name="twitter:title" :content="`${article.indBlogArticle[0].title}`" />
			<Meta name="twitter:description" :content="`${article.indBlogArticle[0].summaryDescription}`" />
			<Meta name="twitter:image" :content="`${article.indBlogArticle[0].image}?h=1000&w=1000&auto=format&fit=min`" />
			<SchemaOrgArticle
				:headline="`${article.indBlogArticle[0].title}`"
				:image="`${article.indBlogArticle[0].image}?h=1000&w=1000&auto=format&fit=min`"
				:url="`https://jhdevi.com${route.fullPath}`"
				:datePublished="`${new Date(article.indBlogArticle[0].publishedDate).toLocaleDateString()}`"
				:about="`${article.indBlogArticle[0].summaryDescription}`"
			/>
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
		<div class="flex flex-col h-auto w-screen overflow-hidden font-objectSans">
			<div class="flex w-full md:flex-row md:items-center mt-20">
				<h1
					class="w-full md:w-2/3 text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl m-2 p-4 xl:p-10 bg-brand-champagne-gold rounded-2xl text-brand-grey font-domainemedium"
				>
					{{ article.indBlogArticle[0].title }}
				</h1>
				<div class="hidden md:flex md:w-1/3 m-3">
					<img
						class="object-center object-contain mx-auto rounded-2xl border-2 border-brand-champagne-gold"
						:src="`${article.indBlogArticle[0].blogImage}?h=800&w=800&auto=format&fit=max`"
						alt=""
					/>
				</div>
			</div>
			<div class="flex w-full sm:w-1/2 p-2 md:hidden mx-auto">
				<img
					class="object-center object-contain mx-auto rounded-2xl border-2 border-brand-champagne-gold"
					:src="`${article.indBlogArticle[0].blogImage}?h=800&w=800&auto=format&fit=clip`"
					alt=""
				/>
			</div>

			<div class="flex flex-row">
				<div class="flex flex-col">
					<div class="w-fit m-3 p-3 bg-brand-champagne-gold rounded-2xl text-brand-grey">
						<p>
							Date:
							{{ new Date(article.indBlogArticle[0].publishedDate).toLocaleDateString() }}
						</p>
						<p>{{ article.indBlogArticle[0].minRead }} min read</p>
					</div>
				</div>
				<div class="flex flex-row m-1 p-1 items-center">
					<ul class="" v-for="tag in article.indBlogArticle[0].myTags" :key="tag">
						<li class="inline text-xs m-1 p-1 border border-brand-champagne-gold rounded-2xl">
							{{ tag.value }}
						</li>
					</ul>
				</div>
			</div>

			<div
				class="flex mt-10 text-brand-grey w-5/6 sm:w-4/5 p-2 flex-col overflow-hidden prose prose-md sm:prose-lg md:prose-xl lg:prose-h4:text-4xl prose-p:text-md prose-li:text-md prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg mx-auto border-l border-l-brand-champagne-gold"
			>
				<SanityContent :blocks="article.indBlogArticle[0].body" />
			</div>
			<NuxtLink to="/jhblog">
				<div
					class="relative flex flex-row w-fit h-fit border-2 border-brand-champagne-dark rounded-2xl items-center mt-10 m-2 p-2 transition duration-500 ease-in-out hover:scale-110"
				>
					<IconsArrowleft class="fill-brand-champagne-dark w-12 sm:w-14 md:w-16 inline-block" />
					<p class="m-1 p-1 text-xs lg:text-sm">Go back</p>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>
