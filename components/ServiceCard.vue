<template>
  <NuxtLink to="/" class="group">
    <article
      class="border-2 border-neutral-200 rounded-2xl shadow-2xl shadow-neutral-400"
    >
      <img
        :src="artwork.displayImageUrl"
        class="rounded-t-xl shadow-2xl shadow-neutral-300 object-contain object-center"
        loading="lazy"
      />

      <div class="px-3 py-2">
        <h1 class="text-lg p-1">
          {{ artwork.title }}
        </h1>
        <h2 class="font-MontrealLight text-md p-1">
          Pattern No. {{ artwork.patternNumber }}
        </h2>
        <h2 class="font-MontrealLight text-md p-1">
          {{ artwork.sizeInches }} |
          {{ artwork.sizeCm }}
        </h2>
        <h2 class="font-MontrealLight text-md p-1">
          {{ artwork.subTitle }}
        </h2>
        <h3 class="font-MontrealLight text-md p-1">
          Artwork Edition No: {{ artwork.sku }}
        </h3>
        <p class="p-1 text-3xl">£{{ artwork.price }}</p>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup>
const route = useRoute();
const props = defineProps({
  artwork: Object,
});
</script>
