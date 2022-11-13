<script setup>
	const runtime = useRuntimeConfig();
	useHead({
		script: [
			{
				hid: "gtm",
				children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
								new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
								j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
								'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
								})(window,document,'script','dataLayer','GTM-KHJLFMD');`,
				type: "text/javascript",
				async: true,
				defer: true,
			},
		],
		noscript: [
			{
				children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KHJLFMD"
								height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
			},
		],
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
			publicApiKey: runtime.SNIPCART_KEY,
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
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<style>
	.page-enter-active,
	.page-leave-active {
		transition: all 0.7s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
