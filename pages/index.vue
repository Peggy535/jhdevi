<script setup>
	const route = useRoute();
	const title = ref("JH Devi Integrated Therapies");
	const description = ref(
		"An integrated approach to therapy using the best of Hypnotherapy, CBT, EFT to assist in opening up your very own unique gateway to understanding your true self. Your souls fingerprint, it's very own navigation system buried deep within your energetic systems."
	);
	useHead({
		script: [
			{
				src: "https://embed.typeform.com/next/embed.js",
				type: "text/javascript",
				async: true,
				defer: true,
			},
		],
	});
</script>
<template>
	<div>
		<Head>
			<Meta name="og:title" :content="title" />
			<Meta name="og:description" :content="description" />
			<Meta name="og:url" content="https://www.jhdevi.com" />
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
			btnBgColour="bg-white"
			cartInfoColour="text-brand-rose-gold"
		></Nav>
		<div class="overflow-hidden font-objectSans">
			<!-- Video section -->
			<section class="h-screen w-screen fixed">
				<video
					class="absolute top-0 right-0 w-screen h-screen object-center object-cover"
					src="https://res.cloudinary.com/peggy-co/video/upload/q_auto,vc_vp9/v1595960724/Well%20Being/wellbeing_1_xxiym7.webm"
					autoplay
					loop
					muted
					playsinline
					preload="true"
					poster="https://res.cloudinary.com/peggy-co/video/upload/c_scale,q_auto,w_640/v1595960724/Well%20Being/wellbeing_1_xxiym7.jpg"
				></video>
			</section>
			<div
				data-tf-sidetab="UyVgJeyh"
				data-tf-width="320"
				data-tf-height="400"
				data-tf-button-color="#d09fa7"
				data-tf-button-text="Launch me"
				data-tf-iframe-props="title=JH Devi - Chat"
				data-tf-medium="snippet"
				style="all: unset"
			></div>
			<!-- Landing title -->
			<main class="relative h-auto w-screen z-20 bg-rose-200 bg-opacity-60">
				<!-- <Nav parent-props-class="ClassNameFromParent" ></Nav> -->
				<section class="relative flex flex-col h-screen w-screen justify-end">
					<div class="text-white text-6xl sm:text-7xl md:text-7xl xl:text-9xl m-2 p-2 mb-20 font-domainemedium">
						<h1>JH Devi</h1>
						<h1>Integrated</h1>
						<h1>Therapies</h1>
					</div>
				</section>

				<!-- Personal message -->
				<section class="relative flex flex-col h-auto w-screen justify-evenly items-center p-1">
					<blockquote class="w-full sm:w-4/5 sm:mx-auto lg:w-2/3 xl:w-3/5 rounded-xl border-2 border-brand-rose-dark bg-rose-50 mb-10">
						<span
							class="float-left text-9xl sm:text-10xl md:text-11xl lg:text-12xl xl:text-13xl 2xl:text-14xl text-brand-rose-gold font-domainemedium"
							>H</span
						>
						<p class="text-2xl sm:text-3xl sm:leading-snug lg:text-4xl m-1 p-1 md:m-2 md:p-2 text-brand-grey lg:leading-normal">
							ello and welcome to my website, I hope you find both it and the words helpful, healing and inspiring. Whatever you are
							facing at this time in your life, no matter what it is, please be assured there is a reason and that there is help for you
							if you wish to receive it.
						</p>
						<div class="w-full h-fit">
							<IconsQuoteDivider class="w-4/5 fill-brand-rose-light mx-auto" />
						</div>
						<div class="text-center">
							<h2 class="text-brand-rose-gold font-domainemedium text-7xl sm:text-8xl md:text-8xl lg:text-9xl">
								You are beautiful, unique and deserving of all good things.
							</h2>
							<p class="m-2 p-2 mt-6 text-brand-rose-gold font-domainemedium text-lg">- Justine Hodgson</p>
						</div>
						<div class="w-full h-fit">
							<IconsQuoteDivider2 class="w-4/5 fill-brand-rose-light mx-auto" />
						</div>
						<video
							class="w-4/5 xl:w-2/3 object-center object-cover mx-auto my-8 rounded-2xl border-2 border-brand-rose-dark"
							src="https://res.cloudinary.com/peggy-co/video/upload/b_rgb:b76e79,co_rgb:b76e79,q_auto,vc_vp9/v1666692181/Well%20Being/slow_promo_DEVI_kphuws.webm"
							playsinline
							controls
							preload="true"
							poster="https://res.cloudinary.com/peggy-co/video/upload/q_auto/v1666692181/Well%20Being/slow_promo_DEVI_kphuws.jpg"
						></video>
						<div class="relative h-auto w-fit flex flex-row z-30 items-center float-right m-2 p-2 mb-10">
							<NuxtLink to="/integrated-therapies">
								<button
									class="m-1 p-1 inline-bloc border border-brand-rose-gold rounded-2xl transition duration-500 ease-in-out hover:scale-110"
								>
									<p class="inline-block text-sm text-brand-grey">JH Intergrated Therapies</p>
									<IconsArrowright class="inline-block mr-4 w-10 fill-brand-rose-gold" />
								</button>
							</NuxtLink>
						</div>
					</blockquote>
				</section>
			</main>
			<Footer footerBgColour="bg-brand-rose-gold"></Footer>
		</div>
	</div>
</template>
