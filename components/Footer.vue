<script setup>
	defineProps({
		footerBgColour: String,
	});
</script>

<template>
	<div>
		<div class="relative flex flex-row w-screen h-auto z-40 font-objectSans border-t border-t-white" :class="footerBgColour">
			<section class="w-1/2 flex flex-col m-1 p-1">
				<span class="flex flex-row m-1 p-1 items-center w-full">
					<IconsCopyright class="inline-block w-6 md:w-8 lg:w-10 xl:w-12 fill-white" />
					<p class="inline-block text-white m-1 text-xs sm:text-sm lg:text-md xl:text-xl">JH Devi 2022</p>
				</span>
				<span class="flex flex-row m-1 p-1 items-center w-full">
					<IconsEmail class="w-6 sm:w-8 lg:w-10 xl:w-12 fill-white" />
					<p class="inline-block text-white m-1 text-xs sm:text-sm lg:text-md xl:text-xl">jusyogi@gmail.com</p>
				</span>
			</section>
			<section class="w-1/2 flex flex-col m-1 p-1">
				<NuxtLink to="https://www.youtube.com/channel/UC00OzBd0rQSk627PLjLqdZg">
					<span class="flex flex-row items-center m-1 p-1 w-full">
						<IconsYoutube class="w-6 sm:w-8 lg:w-10 xl:w-12 fill-white inline-block" />
						<p class="text-xs sm:text-sm lg:text-md xl:text-xl text-white inline-block m-1">JH Youtube Channel</p>
					</span>
				</NuxtLink>
				<NuxtLink to="https://twitter.com/hodgson_justine">
					<span class="flex flex-row items-center m-1 p-1 w-full">
						<IconsTwitter class="w-6 sm:w-8 lg:w-10 xl:w-12 fill-white inline-block" />
						<p class="text-xs sm:text-sm lg:text-md xl:text-xl text-white inline-block m-1">Twitter</p>
					</span>
				</NuxtLink>
			</section>
		</div>
	</div>
</template>
