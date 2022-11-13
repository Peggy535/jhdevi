<script setup>
	const route = useRoute();
	const title = ref("JH Devi | JH Shop");
	const description = ref("Discover more and purchase individually tailored items from JH Audios, JH Programs or JH Events");
</script>

<template>
	<div>
		<Head>
			<Meta name="og:title" :content="title" />
			<Meta name="og:description" :content="description" />
			<Meta name="og:url" content="https://www.jhdevi.com/jhshop" />
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
			textColour="text-brand-rose-gold"
			fillColour="fill-brand-rose-gold"
			afterLineColour="after:bg-brand-rose-gold"
			borderColour="border-brand-rose-gold"
			btnBgColour="bg-brand-rose-gold"
			cartInfoColour="text-brand-rose-dark"
		></Nav>
		<section class="h-screen w-screen fixed z-10">
			<IconsMandala4 class="fill-brand-rose-gold opacity-20" style="width: 150%" />
		</section>
		<div class="relative flex flex-col h-screen w-screen text-brand-rose-gold place-content-end z-20">
			<h1 class="font-domainemedium text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl m-1 p-1">JH Shop</h1>
			<h2 class="font-objectSans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl m-1 p-1 mb-20">
				Discover individual hypnotherapy Audios, life-changing programmes and events to help you on your journey.
			</h2>
		</div>
		<div class="relative flex flex-col md:flex-row md:flex-wrap md:flex-shrink w-screen h-auto font-objectSans p-2 z-20 my-10">
			<div class="flex w-full md:w-1/2 md:p-2 lg:w-1/3">
				<article class="relative border border-brand-champagne-dark rounded-2xl w-full sm:w-2/3 md:w-full m-2 mx-auto bg-white">
					<div class="h-32 bg-brand-champagne-dark rounded-xl text-white p-2">
						<h1 class="text-4xl md:text-3xl lg:text-4xl xl:text-5xl m-1 p-1 font-domainebold">JH Audios</h1>
					</div>
					<div class="relative m-1 p-1 text-brand-grey h-48 bg">
						<p class="text-lg">A brilliant solution to help you target a specific aspect or issue.</p>
						<NuxtLink to="/jhaudios">
							<button class="absolute bottom-0 right-0 border border-brand-champagne-dark rounded-3xl text-lg p-2">
								<p
									class="text-xs md:text-sm lg:text-md m-1 transition duration-500 ease-in-out hover:scale-110 hover:text-brand-champagne-dark"
								>
									Discover more
								</p>
							</button>
						</NuxtLink>
					</div>
				</article>
			</div>
			<div class="flex w-full md:w-1/2 md:p-2 lg:w-1/3">
				<article class="relative border border-brand-rose-dark rounded-2xl w-full sm:w-2/3 md:w-full m-2 mx-auto bg-white">
					<div class="h-32 bg-brand-rose-dark rounded-xl text-white p-2">
						<h1 class="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-domainebold">JH Programmes</h1>
					</div>
					<div class="relative m-1 p-1 text-brand-grey h-48">
						<p>Programmes that are individually tailored, affordable & can tranform your life no matter what your goals are.</p>
						<p class="text-md mt-6">The 12 Steps to a new you programme - Spring 2023.</p>
						<NuxtLink to="/jhprogrammes">
							<button class="absolute bottom-0 right-0 border border-brand-rose-gold rounded-3xl text-lg p-2">
								<p
									class="text-xs md:text-sm lg:text-md m-1 transition duration-500 ease-in-out hover:scale-110 hover:text-brand-rose-dark"
								>
									Discover more
								</p>
							</button>
						</NuxtLink>
					</div>
				</article>
			</div>
			<div class="flex w-full md:w-1/2 md:p-2 lg:w-1/3">
				<article class="relative border border-brand-sage rounded-2xl w-full sm:w-2/3 md:w-full m-2 mx-auto bg-white">
					<div class="h-32 bg-brand-sage rounded-xl text-white p-2">
						<h1 class="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-domainebold">JH Events</h1>
					</div>
					<div class="relative m-1 p-1 text-brand-grey h-48">
						<p class="text-md">
							Have you ever heard of a tapping circle? Why not get your friends together for a wholesome event or simply join a group.
							It's fun, friendly and welcoming.
						</p>
						<NuxtLink to="/jhevents">
							<button class="absolute bottom-0 right-0 border border-brand-sage rounded-3xl text-lg p-2">
								<p
									class="text-xs md:text-sm lg:text-md m-1 transition duration-500 ease-in-out hover:scale-110 hover:text-brand-sage"
								>
									Discover more
								</p>
							</button>
						</NuxtLink>
					</div>
				</article>
			</div>
		</div>
		<Footer footerBgColour="bg-brand-rose-light"></Footer>
	</div>
</template>
