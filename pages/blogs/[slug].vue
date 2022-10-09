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
    <div
      class="flex flex-col h-auto w-screen overflow-hidden font-domainelight"
    >
      <div class="flex w-full md:flex-row md:items-center md:mt-20">
        <h1
          class="w-full sm:w-4/5 md:w-2/3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl m-3 p-3 mt-20 md:mt-0 bg-brand-champagne-gold rounded-2xl text-neutral-500"
        >
          {{ article.indBlogArticle[0].title }}
        </h1>
        <div class="hidden md:flex md:w-1/3 m-3">
          <img
            class="object-center object-contain mx-auto rounded-2xl border-2 border-brand-champagne-gold"
            :src="`${article.indBlogArticle[0].blogImage}?h=600&w=600&auto=format&fit=max`"
            alt=""
          />
        </div>
      </div>
      <div class="flex w-full sm:w-4/5 p-2 md:hidden">
        <img
          class="object-center object-contain mx-auto rounded-2xl border-2 border-brand-champagne-gold"
          :src="`${article.indBlogArticle[0].blogImage}?h=600&w=600&auto=format&fit=clip`"
          alt=""
        />
      </div>

      <div class="flex flex-row">
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
          <ul
            class=""
            v-for="tag in article.indBlogArticle[0].myTags"
            :key="tag"
          >
            <li
              class="inline text-xs m-1 p-1 border border-brand-champagne-gold rounded-2xl"
            >
              {{ tag.value }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex w-full flex-col m-2 p-2 prose md:prose-lg prose-p:text-xl prose-li:text-xl prose-h4:text-2xl mx-auto border-l border-l-brand-champagne-gold"
      >
        <SanityContent :blocks="article.indBlogArticle[0].body" />
      </div>
    </div>
  </div>
</template>
