<script setup>
const route = useRoute();
const sanity = useSanity();

const {
  pending,
  data: article,
  refresh,
} = await useAsyncData("indBlogArticle", () =>
  sanity.fetch(
    groq`{"indBlogArticle": *[_type == "blogArticle" && slug.current == "${route.params.slug}"]{title, publishedDate, minRead, "blogImage":articleImage.asset->url, slug, body, myTags}}`
  )
);
refresh();

definePageMeta({
  layout: "goldnav",
});
</script>

<template>
  <div>
    <div class="flex flex-col h-auto w-screen overflow-hidden font-domainethin">
      <div class="flex w-full">
        <h1
          class="w-full sm:w-4/5 text-4xl sm:text-5xl m-3 p-3 mt-20 md:mt-26 bg-brand-champagne-gold rounded-2xl text-neutral-500"
        >
          {{ article.indBlogArticle[0].title }}
        </h1>
      </div>
      <div class="flex w-full">
        <img
          class="h-60 object-center object-contain mx-auto"
          :src="article.indBlogArticle[0].blogImage"
          alt=""
        />
      </div>

      <div class="flex flex-col">
        <div
          class="w-fit m-3 p-3 bg-brand-champagne-gold rounded-2xl text-neutral-500"
        >
          <p>
            Date:
            {{
              new Date(
                article.indBlogArticle[0].publishedDate
              ).toLocaleDateString()
            }}
          </p>
          <p>{{ article.indBlogArticle[0].minRead }} min read</p>
        </div>
      </div>
      <div class="flex flex-row m-1 p-1 items-center">
        <p class="text-xs m-1 p-1">JH Tags:</p>
        <ul class="" v-for="tag in article.indBlogArticle[0].myTags" :key="tag">
          <li
            class="inline text-xs m-1 p-1 border border-brand-champagne-gold rounded-2xl"
          >
            {{ tag.value }}
          </li>
        </ul>
      </div>
      <div
        class="flex w-full flex-col m-2 p-2 prose md:prose-lg prose-h4:text-2xl mx-auto border-l border-l-brand-champagne-gold"
      >
        <SanityContent :blocks="article.indBlogArticle[0].body" />
      </div>
    </div>
  </div>
</template>
