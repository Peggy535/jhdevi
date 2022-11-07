<template>
	<div>
		<Nav
			textColour="text-brand-rose-gold"
			fillColour="fill-brand-rose-gold"
			afterLineColour="after:bg-brand-rose-gold"
			borderColour="border-brand-rose-gold"
			cartBorderColour="border-white"
			cartInfoColour="text-white"
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
					<blockquote class="w-full sm:w-4/5 sm:mx-auto lg:w-2/3 xl:w-3/5 rounded-xl border-2 border-brand-rose-dark bg-rose-50">
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
						<div>
							<span
								class="float-left text-brand-rose-gold font-domainemedium text-9xl sm:text-10xl md:text-11xl lg:text-12xl xl:text-13xl 2xl:text-14xl"
								>Y</span
							>
							<h2 class="text-brand-grey font-domainemedium text-6xl sm:text-7xl md:text-8xl lg:text-9xl m-1 p-1">
								ou are beautiful, unique and deserving of all good things.
							</h2>
							<cite class="m-1 p-1 text-brand-rose-gold font-domainemedium">- Justine Hodgson</cite>
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
						<div
							class="relative h-auto w-fit flex flex-row z-30 items-center float-right border border-brand-rose-gold rounded-2xl m-1 p-1 mb-10"
						>
							<NuxtLink to="/integrated-therapies">
								<span class="m-1 p-1 inline-block">
									<p class="text-sm text-brand-grey">JH Intergrated Therapies</p>
								</span>

								<IconsArrowright
									class="inline-block mr-4 w-10 fill-brand-rose-gold hover:fill-brand-rose-dark hover:border-brand-rose-gold hover:scale-110 transition duration-700 ease-in-out"
								/>
							</NuxtLink>
						</div>
					</blockquote>
				</section>
			</main>
		</div>
	</div>
</template>
