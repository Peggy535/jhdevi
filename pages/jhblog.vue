<script setup>
import { onMounted } from "vue";

const query = groq`*[_type == "blogArticle"]{title, publishedDate, summaryDescription, body, "image":articleImage.asset->url, slug}`;
const { data: blogs } = useSanityQuery(query);
</script>

<template>
  <div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-screen h-auto mb-5 font-domainelight"
    >
      <div v-for="blog in blogs">
        <article
          class="grid col-span-1 min-h-min m-2 p-2 border-2 border-brand-bronze rounded-2xl shadow-2xl shadow-neutral-200"
        >
          <span class="h-40 bg-brand-bronze rounded-2xl text-white">
            <h1 class="m-1 p-1 text-2xl">{{ blog.title }}</h1>
            <p class="text-xs m-1 p-1">{{ blog.minRead }} min read</p>
          </span>
          <span class="relative h-60 sm:h-72 m-1 p-1">
            <p>{{ new Date(blog.publishedDate).toLocaleDateString() }}</p>
            <p class="text-lg">
              {{ blog.summaryDescription }}
            </p>
            <NuxtLink to="/">
              <button
                class="absolute bottom-0 border-2 border-brand-bronze text-brand-bronze rounded-3xl text-lg transition duration-700 ease-in-out hover:bg-brand-bronze hover:text-white"
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
