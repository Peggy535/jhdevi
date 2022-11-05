<script setup>
	const query = groq`*[_type == "programStore"] | order(_id) {_id, title, summaryDescription,price, snipcartGuid, "image":programImage.asset->url, productId, price, body }`;
	const { data: programs } = useSanityQuery(query);
	refreshNuxtData();

	definePageMeta({
		layout: "goldnav",
	});
	useHead({
		meta: {
			link: [
				{ rel: "preconnect", href: "https://app.snipcart.com" },
				{ rel: "preconnect", href: "https://cdn.snipcart.com" },
				{ rel: "stylesheet", href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" },
			],
			script: [{ src: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js", async: true }],
		},
	});

	onMounted(() => {
		window.SnipcartSettings = {
			publicApiKey: "ODU1YjNjZTQtM2QyMS00MTViLWIzNGQtNzVmZTgxMWQ3ZDk2NjM4MDE0MjQwMzQ0NDA3NDg2",
			loadStrategy: "on-user-interaction",
			version: "3.4.1",
			modalStyle: "side",
		};

		(() => {
			var c, d;
			(d = (c = window.SnipcartSettings).version) != null || (c.version = "3.0");
			var s, S;
			(S = (s = window.SnipcartSettings).timeoutDuration) != null || (s.timeoutDuration = 2750);
			var l, p;
			(p = (l = window.SnipcartSettings).domain) != null || (l.domain = "cdn.snipcart.com");
			var w, u;
			(u = (w = window.SnipcartSettings).protocol) != null || (w.protocol = "https");
			var f =
					window.SnipcartSettings.version.includes("v3.0.0-ci") ||
					(window.SnipcartSettings.version != "3.0" &&
						window.SnipcartSettings.version.localeCompare("3.4.1", void 0, { numeric: !0, sensitivity: "base" }) === -1),
				m = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
			window.LoadSnipcart = o;
			document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", r) : r();
			function r() {
				window.SnipcartSettings.loadStrategy
					? window.SnipcartSettings.loadStrategy === "on-user-interaction" &&
					  (m.forEach((t) => document.addEventListener(t, o)), setTimeout(o, window.SnipcartSettings.timeoutDuration))
					: o();
			}
			var a = !1;
			function o() {
				if (a) return;
				a = !0;
				let t = document.getElementsByTagName("head")[0],
					e = document.querySelector("#snipcart"),
					i = document.querySelector(
						`src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`
					),
					n = document.querySelector(
						`link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`
					);
				e || ((e = document.createElement("div")), (e.id = "snipcart"), e.setAttribute("hidden", "true"), document.body.appendChild(e)),
					v(e),
					i ||
						((i = document.createElement("script")),
						(i.src = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`),
						(i.async = !0),
						t.appendChild(i)),
					n ||
						((n = document.createElement("link")),
						(n.rel = "stylesheet"),
						(n.type = "text/css"),
						(n.href = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`),
						t.prepend(n)),
					m.forEach((g) => document.removeEventListener(g, o));
			}
			function v(t) {
				!f ||
					((t.dataset.apiKey = window.SnipcartSettings.publicApiKey),
					window.SnipcartSettings.addProductBehavior && (t.dataset.configAddProductBehavior = window.SnipcartSettings.addProductBehavior),
					window.SnipcartSettings.modalStyle && (t.dataset.configModalStyle = window.SnipcartSettings.modalStyle),
					window.SnipcartSettings.currency && (t.dataset.currency = window.SnipcartSettings.currency),
					window.SnipcartSettings.templatesUrl && (t.dataset.templatesUrl = window.SnipcartSettings.templatesUrl));
			}
		})();
	});
</script>

<template>
	<div>
		<section class="h-screen w-screen fixed z-10">
			<IconsMandala6 class="fill-brand-rose-dark opacity-20" style="width: 300%" />
		</section>
		<div class="relative flex flex-col h-screen w-screen text-brand-rose-dark font-domainemedium place-content-end z-20">
			<h1 class="text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl m-1 p-1 mb-32">JH Programs</h1>
		</div>
		<div class="relative flex flex-col h-auto w-screen font-objectSans z-20 px-2">
			<div v-for="program in programs" :key="program._id">
				<section class="w-full sm:w-5/6 sm:mx-auto lg:w-2/3 xl:w-1/2 h-auto rounded-2xl bg-brand-rose-dark py-2">
					<div class="m-2 p-2">
						<h1 class="font-domainebold text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl">{{ program.title }}</h1>
					</div>
					<div class="m-2 p-2 bg-white rounded-2xl my-6">
						<h2 class="text-lg xl:text-xl m-1 p-1 text-brand-grey">{{ program.summaryDescription }}</h2>
					</div>
					<IconsDivider1 class="w-1/2 mx-auto fill-white" />
					<div class="m-1 p-1 bg-white rounded-2xl flex flex-row items-center justify-between">
						<p class="text-4xl md:text-5xl inline-block text-brand-grey m-2 p-2">£{{ program.price }}</p>
						<button
							class="snipcart-add-item inline-block border border-brand-rose-dark text-brand-grey m-2 p-2 rounded-2xl md:text-xl"
							:data-item-id="`${program.productId}`"
							:data-item-price="program.price"
							:data-item-description="`${program.summaryDescription}`"
							:data-item-image="`${program.image}`"
							:data-item-name="`${program.subTitle}`"
							:data-item-file-guid="`${program.snipcartGuid}`"
						>
							Buy now
						</button>
					</div>
					<IconsDivider1 class="w-1/2 mx-auto fill-white" />
					<h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl m-2 p-2 text-white font-domainebold mt-6">Program Description</h2>
					<div class="prose mx-2 px-2 prose-sm md:prose-lg bg-white rounded-2xl pt-6 pb-2 text-brand-grey">
						<SanityContent :blocks="program.body" />
					</div>
				</section>
			</div>
		</div>
	</div>
</template>
