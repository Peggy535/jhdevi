<template>
	<div>
		<div class="flex flex-col h-screen w-screen text-brand-rose-gold font-domainemedium place-content-end">
			<h1 class="text-8xl m-1 p-1">JH Shop</h1>
			<h2 class="text-3xl m-1 p-1 mb-10">Discover the 12 Steps to you program, individual therapy audios and more.</h2>
		</div>
		<div class="flex flex-col w-screen h-auto font-domainemedium p-2">
			<div class="flex w-full">
				<article class="relative border border-brand-rose-gold rounded-2xl w-full sm:w-2/3 m-2 mx-auto">
					<div class="h-32 bg-brand-rose-gold rounded-xl text-brand-light-cream p-2">
						<h1 class="text-4xl md:text-3xl lg:text-4xl m-1 p-1">Hypnosis Audios</h1>
						<h1 class="text-lg m-1 p-1">Individual audio's & videos to taregt specific issues</h1>
					</div>
					<div class="relative m-1 p-1 text-brand-rose-gold">
						<p class="h-48 text-lg">A brilliant solution to help you target a specific aspect or issue.</p>
						<p class="text-4xl">£19.95</p>
						<NuxtLink to="/jhaudios">
							<button class="absolute bottom-0 right-0 border border-brand-rose-gold rounded-3xl text-lg p-2">
								<p class="text-xs">Discover more</p>
							</button>
						</NuxtLink>
					</div>
				</article>
			</div>
			<div class="flex w-full">
				<article class="relative border border-brand-rose-gold rounded-2xl w-full sm:w-2/3 m-2 mx-auto">
					<div class="h-32 bg-brand-rose-gold rounded-xl text-brand-light-cream p-2">
						<h1 class="text-4xl md:text-3xl lg:text-4xl">The 12-Step program</h1>
					</div>
					<div class="relative m-1 p-1 text-brand-rose-gold">
						<p class="h-48 text-lg">A description about the 12 steps here, brielfy what it is etc....</p>
						<p class="text-4xl">£199.95 for the complete course</p>
						<p class="text-xl">or £19.95 per step</p>
						<NuxtLink to="/jhshop">
							<button class="absolute bottom-0 right-0 border border-brand-rose-gold rounded-3xl text-lg p-2">
								<p class="text-xs">Discover more</p>
							</button>
						</NuxtLink>
					</div>
				</article>
			</div>
			<div class="flex w-full">
				<article class="relative border border-brand-rose-gold rounded-2xl w-full sm:w-2/3 m-2 mx-auto">
					<div class="h-32 bg-brand-rose-gold rounded-xl text-brand-light-cream p-2">
						<h1 class="text-4xl md:text-3xl lg:text-4xl">JH Events</h1>
					</div>
					<div class="relative m-1 p-1 text-brand-rose-gold">
						<p class="h-48 text-lg">A brief to the point description about events here</p>
						<p class="text-lg">From<span class="text-4xl"> £20</span> per event.</p>
						<NuxtLink to="/jhevents">
							<button class="absolute bottom-0 right-0 border border-brand-rose-gold rounded-3xl text-lg p-2">
								<p class="text-xs">Discover more</p>
							</button>
						</NuxtLink>
					</div>
				</article>
			</div>
		</div>
	</div>
</template>

