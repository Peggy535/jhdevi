<script setup>
const route = useRoute();
const sanity = useSanity();

const {
  pending,
  data: article,
  refresh,
} = await useAsyncData("indBlogArticle", () =>
  sanity.fetch(
    groq`{"indBlogArticle": *[_type == "blogArticle" && slug.current == "${route.params.slug}"]{
    title, publishedDate, minRead, "blogImage":articleImage.asset->url, slug, body
  }}`
  )
);
refresh();
</script>

<template>
  <div>
    <div class="flex flex-col h-auto w-screen overflow-hidden font-domainethin">
      <div class="flex w-full">
        <h1 class="text-3xl m-1 p-1 mt-20">
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

      <div class="flex flex-col m-1 p-1">
        <p>Date: {{ article.indBlogArticle[0].publishedDate }}</p>
        <p>{{ article.indBlogArticle[0].minRead }} min read</p>
      </div>

      <div class="text-md flex flex-col m-1 p-1">
        <SanityContent :blocks="article.indBlogArticle[0].body" />
      </div>
    </div>
  </div>
</template>
