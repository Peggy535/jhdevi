<script setup>
	import { gsap } from "gsap";
	import { CSSPlugin } from "gsap/CSSPlugin";

	defineProps({
		textColour: String,
		fillColour: String,
		afterLineColour: String,
		borderColour: String,
		btnBgColour: String,
		cartInfoColour: String,
	});
	onMounted(() => {
		gsap.registerPlugin(CSSPlugin);
		gsap.set(".menu", { autoAlpha: 0, xPercent: -100 });
	});
	const openMenu = () => {
		gsap.registerPlugin(CSSPlugin);
		gsap.fromTo(".menu", { autoAlpha: 1, xPercent: -100 }, { xPercent: 0, duration: 1, ease: "expo.inOut" });
	};
	const closeMenu = () => {
		gsap.to(".menu", {
			xPercent: 200,
			duration: 1.5,
			ease: "expo.inOut",
		});
	};
</script>

<template>
	<div class="fixed z-40 h-screen w-full bg-white flex flex-col place-content-center invisible menu font-domainemedium p-4" :class="textColour">
		<span class="absolute top-5 left-5" @click="closeMenu">
			<h1 class="text-xl transition duration-500 delay-75 ease-in-out hover:scale-125">Close</h1>
		</span>
		<div class="flex pl-2 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-10 mx-auto border-l" :class="borderColour">
			<ul class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
				<NuxtLink to="/" @click="closeMenu">
					<li
						class="m-1 p-1 transition delay-75 ease-in-out duration-700 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
						:class="afterLineColour"
					>
						Home
					</li>
				</NuxtLink>
				<NuxtLink to="/integrated-therapies" @click="closeMenu">
					<li
						class="m-1 p-1 transition delay-75 ease-in-out duration-700 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
						:class="afterLineColour"
					>
						JH Integrated Therapies
					</li>
				</NuxtLink>

				<NuxtLink to="/bookings" @click="closeMenu">
					<li
						class="m-1 p-1 transition delay-75 ease-in-out duration-700 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
						:class="afterLineColour"
					>
						Bookings & Contact
					</li>
				</NuxtLink>
				<NuxtLink to="/jhblog" @click="closeMenu">
					<li
						class="m-1 p-1 transition delay-75 ease-in-out duration-700 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
						:class="afterLineColour"
					>
						Blog
					</li>
				</NuxtLink>
				<NuxtLink to="/jhshop" @click="closeMenu">
					<li
						class="m-1 p-1 transition delay-75 ease-in-out duration-700 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
						:class="afterLineColour"
					>
						JH Shop
					</li>
				</NuxtLink>
				<NuxtLink to="/jhaudios" @click="closeMenu">
					<li
						class="m-1 p-1 transition delay-75 ease-in-out duration-700 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
						:class="afterLineColour"
					>
						JH Audios
					</li>
				</NuxtLink>
				<NuxtLink to="/jhprogrammes" @click="closeMenu">
					<li
						class="m-1 p-1 transition delay-75 ease-in-out duration-700 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
						:class="afterLineColour"
					>
						JH Programmes
					</li>
				</NuxtLink>
				<NuxtLink to="/jhevents" @click="closeMenu">
					<li
						class="m-1 p-1 transition delay-75 ease-in-out duration-700 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
						:class="afterLineColour"
					>
						JH Events
					</li>
				</NuxtLink>
				<NuxtLink to="/testimonials" @click="closeMenu">
					<li
						class="m-1 p-1 transition delay-75 ease-in-out duration-700 hover:scale-110 after:origin-left after:block after:absolute after:w-full after:scale-0 after:h-[1px] after:bottom-0 after:z-20 after:hover:transition after:hover:ease-in-out after:hover:duration-1000 after:hover:delay-75 after:hover:scale-100"
						:class="afterLineColour"
					>
						Testimonials
					</li>
				</NuxtLink>
			</ul>
		</div>
	</div>

	<div class="fixed w-full flex flex-row place-content-between items-center z-30 font-objectSams" :class="textColour">
		<IconsMenu class="w-12 transition delay-75 duration-500 hover:rotate-45 hover:sacle-110 m-1 p-1" :class="fillColour" @click="openMenu" />
		<button class="snipcart-checkout m-1 p-1 rounded-2xl bg-opacity-30" :class="btnBgColour">
			<IconsShoppingCart class="w-10 p-1" :class="fillColour" />
			<span class="snipcart-items-count absolute top-0 right-1 m-1 p-1 text-xxs" :class="cartInfoColour"></span>
		</button>
	</div>
</template>
