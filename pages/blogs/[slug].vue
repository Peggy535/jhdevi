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
				groq`{"indBlogArticle": *[_type == "blogArticle" && slug.current == "${route.params.slug}"]{title, publishedDate, minRead, "blogImage":articleImage.asset->url, slug, body, myTags}}`
			),
		{ initialCache: false }
	).then(refreshNuxtData());
	refresh();

	definePageMeta({
		layout: "goldnav",
	});
</script>

<template>
	<div>
		<div class="flex flex-col h-auto w-screen overflow-hidden font-domaineregular">
			<div class="flex w-full md:flex-row md:items-center mt-20">
				<h1
					class="w-full md:w-2/3 text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl m-5 p-5 xl:p-10 bg-brand-champagne-gold rounded-2xl text-brand-grey-light"
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
			<div class="flex w-full sm:w-4/5 p-2 md:hidden mx-auto">
				<img
					class="object-center object-contain mx-auto rounded-2xl border-2 border-brand-champagne-gold"
					:src="`${article.indBlogArticle[0].blogImage}?h=800&w=800&auto=format&fit=clip`"
					alt=""
				/>
			</div>

			<div class="flex flex-row">
				<div class="flex flex-col">
					<div class="w-fit m-3 p-3 bg-brand-champagne-gold rounded-2xl text-brand-grey-light">
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
				class="flex text-brand-grey-light w-full flex-col m-2 p-2 prose md:prose-lg lg:prose-2xl prose-p:text-xl md:prose-p:text-2xl prose-li:text-xl prose-h1:text-6xl prose-h2:text-5xl prose-h3:text-4xl prose-h4:text-3xl prose-h5:text-2xl mx-auto border-l border-l-brand-champagne-gold"
			>
				<SanityContent :blocks="article.indBlogArticle[0].body" />
			</div>
		</div>
	</div>
</template>
