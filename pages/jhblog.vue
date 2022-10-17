<script setup>
const query = groq`*[_type == "blogArticle"] | order(publishedDate desc) {_id, title, publishedDate, summaryDescription, body, "image":articleImage.asset->url, slug, myTags, minRead}`;
const { data: blogs } = useSanityQuery(query);

definePageMeta({
  layout: "goldnav",
});
</script>

<template>
  <div>
    <div
      class="flex h-auto w-screen font-domaineregular text-brand-champagne-gold"
    >
      <h1 class="text-7xl m-2 p-2 mt-20">JH Blog</h1>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 w-screen h-auto mb-5 font-domaineregular px-2 md:px-4"
    >
      <div v-for="blog in blogs" :key="blog._id">
        <article
          class="grid col-span-1 min-h-min border border-brand-champagne-gold rounded-2xl transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-champagne-gold group hover:scale-105"
        >
          <span
            class="h-40 bg-brand-champagne-gold rounded-xl text-neutral-700"
          >
            <h1 class="m-1 p-1 text-2xl md:text-3xl lg:text-4xl">
              {{ blog.title }}
            </h1>
            <p class="text-sm m-1 p-1">{{ blog.minRead }} min read</p>
          </span>
          <span class="relative h-48 sm:h-60 m-1 p-1">
            <p>{{ new Date(blog.publishedDate).toLocaleDateString() }}</p>
            <p class="text-lg">
              {{ blog.summaryDescription }}
            </p>
            <NuxtLink :to="`/blogs/${blog.slug.current}`">
              <button
                class="absolute bottom-0 border-2 border-brand-champagne-gold text-brand-champagne-gold rounded-3xl text-lg transition duration-700 ease-in-out hover:bg-brand-champagne-gold hover:text-white"
              >
                <p class="m-1">Read now</p>
              </button>
            </NuxtLink>
          </span>
        </article>
      </div>
    </div>
  </div>
</template>
