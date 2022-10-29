<template>
	<div>
		<div class="flex flex-col h-screen w-screen text-brand-rose-gold font-domainemedium place-content-end bg-white">
			<h1 class="text-8xl m-1 p-1">JH Shop</h1>
			<h2 class="text-3xl m-1 p-1 mb-10">Discover the 12 Steps to you program, individual therapy audios and more.</h2>
		</div>
		<div class="flex flex-col md:flex-row md:flex-wrap md:flex-shrink w-screen h-auto font-domainemedium p-2 bg-white">
			<div class="flex w-full md:w-1/2 md:p-2 lg:w-1/3">
				<article class="relative border border-brand-champagne-gold rounded-2xl w-full sm:w-2/3 md:w-full m-2 mx-auto">
					<div class="h-32 bg-brand-champagne-gold rounded-xl text-white p-2">
						<h1 class="text-4xl md:text-3xl lg:text-4xl xl:text-5xl m-1 p-1">Hypnosis Audios</h1>
						<h1 class="text-lg m-1 p-1">Individual audio's & videos to taregt specific issues</h1>
					</div>
					<div class="relative m-1 p-1 text-brand-champagne-gold h-48">
						<p class="text-lg">A brilliant solution to help you target a specific aspect or issue.</p>
						<NuxtLink to="/jhaudios">
							<button class="absolute bottom-0 right-0 border border-brand-champagne-gold rounded-3xl text-lg p-2">
								<p class="text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">Discover more</p>
							</button>
						</NuxtLink>
					</div>
				</article>
			</div>
			<div class="flex w-full md:w-1/2 md:p-2 lg:w-1/3">
				<article class="relative border border-brand-rose-gold rounded-2xl w-full sm:w-2/3 md:w-full m-2 mx-auto">
					<div class="h-32 bg-brand-rose-gold rounded-xl text-white p-2">
						<h1 class="text-4xl md:text-3xl lg:text-4xl xl:text-5xl">The 12-Step program</h1>
					</div>
					<div class="relative m-1 p-1 text-brand-rose-gold h-48">
						<p class="text-lg">Coming soon - Course starts Spring 2023.</p>
						<NuxtLink to="/jhshop">
							<button class="absolute bottom-0 right-0 border border-brand-rose-gold rounded-3xl text-lg p-2">
								<p class="text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">Discover more</p>
							</button>
						</NuxtLink>
					</div>
				</article>
			</div>
			<div class="flex w-full md:w-1/2 md:p-2 lg:w-1/3">
				<article class="relative border border-brand-sage rounded-2xl w-full sm:w-2/3 md:w-full m-2 mx-auto">
					<div class="h-32 bg-brand-sage rounded-xl text-white p-2">
						<h1 class="text-4xl md:text-3xl lg:text-4xl xl:text-5xl">JH Events</h1>
					</div>
					<div class="relative m-1 p-1 text-brand-sage h-48">
						<p class="text-lg">A brief to the point description about events here</p>
						<NuxtLink to="/jhevents">
							<button class="absolute bottom-0 right-0 border border-brand-sage rounded-3xl text-lg p-2">
								<p class="text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">Discover more</p>
							</button>
						</NuxtLink>
					</div>
				</article>
			</div>
		</div>
	</div>
</template>
