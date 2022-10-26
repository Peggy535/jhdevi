<script setup>
	const query = groq`*[_type == "audioStore"] | order(_id) {_id, title, subTitle, summaryDescription,price, snipcartGuid, "image":audioImage.asset->url, productId }`;
	const { data: audios } = useSanityQuery(query);
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
			version: "3.4.0",
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
						window.SnipcartSettings.version.localeCompare("3.4.0", void 0, {
							numeric: !0,
							sensitivity: "base",
						}) === -1),
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
		<div class="flex flex-col h-screen w-screen text-brand-rose-gold font-domaineregular place-content-end">
			<h1 class="text-8xl m-1 p-1">JH Audios</h1>
			<h2 class="text-3xl m-1 p-1 mb-10">Buy an individual audio track to help you with a specific issue.</h2>
		</div>
		<div class="flex flex-col w-screen h-auto font-domaineregular p-2">
			<div class="flex w-full">
				<div v-for="audio in audios" :key="audio._id">
					<article class="relative border border-brand-rose-gold rounded-2xl w-full sm:w-2/3 m-2 mx-auto">
						<div class="h-32 bg-brand-rose-gold rounded-xl text-white p-2">
							<h1 class="text-4xl md:text-3xl lg:text-4xl m-1 p-1">{{ audio.title }}</h1>
							<h1 class="text-lg m-1 p-1">{{ audio.subTitle }}</h1>
						</div>
						<div class="relative m-1 p-1 text-brand-rose-gold">
							<p class="h-48 text-lg">
								{{ audio.summaryDescription }}
							</p>
							<p class="text-4xl">£{{ audio.price }}</p>
							<button
								class="snipcart-add-item absolute bottom-0 right-0 border border-brand-rose-gold rounded-3xl text-lg p-2"
								:data-item-id="audio.productId"
								:data-item-price="audio.price"
								:data-item-url="/jhaudios"
								:data-item-description="audio.summaryDescription"
								:data-item-image="audio.image"
								:data-item-name="audio.subTitle"
								:data-item-file-guid="audio.snipcartGuid"
							>
								<p class="text-sm m-1 p-1">Buy now</p>
							</button>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</template>
