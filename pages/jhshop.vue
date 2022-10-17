<template>
  <div>
    <div
      class="flex flex-col h-screen w-screen text-brand-rose-gold font-domaineregular place-content-end"
    >
      <h1 class="text-6xl m-1 p-1">JH Shop</h1>
      <h3 class="text-3xl m-1 p-1">
        Discover the 12 Steps to you program, individual therapy audios and
        more.
      </h3>
    </div>
    <div class="flex flex-col w-screen h-auto font-domaineregular">
      <div class="flex w-full">
        <article
          class="relative border border-brand-rose-gold rounded-2xl w-full sm:w-2/3 m-2 mx-auto"
        >
          <div class="h-32 bg-brand-rose-gold rounded-xl text-white p-2">
            <h1 class="text-4xl md:text-3xl lg:text-4xl">Hypnosis Audios</h1>
            <h1 class="text-2xl">
              Individual audio's & videos to taregt specific issues
            </h1>
          </div>
          <div class="relative m-1 p-1 text-brand-rose-gold">
            <p class="h-48 text-lg">
              A great solution to help you target a specific aspect or issue.
            </p>
            <p class="text-4xl">£9.95</p>
            <NuxtLink to="/jhshop">
              <button
                class="absolute bottom-0 right-0 border border-brand-rose-gold rounded-3xl text-lg p-2"
              >
                <p class="text-xs">Discover more</p>
              </button>
            </NuxtLink>
          </div>
        </article>
      </div>
      <div class="flex w-full">
        <article
          class="relative border border-brand-rose-gold rounded-2xl w-full sm:w-2/3 m-2 mx-auto"
        >
          <div class="h-32 bg-brand-rose-gold rounded-xl text-white p-2">
            <h1 class="text-4xl md:text-3xl lg:text-4xl">
              The 12-Step program
            </h1>
          </div>
          <div class="relative m-1 p-1 text-brand-rose-gold">
            <p class="h-48 text-lg">
              A description about the 12 steps here, brielfy what it is etc....
            </p>
            <p class="text-4xl">£199.95 for the complete course</p>
            <p class="text-xl">or £19.95 per step</p>
            <NuxtLink to="/jhshop">
              <button
                class="absolute bottom-0 right-0 border border-brand-rose-gold rounded-3xl text-lg p-2"
              >
                <p class="text-xs">Discover more</p>
              </button>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  window.SnipcartSettings = {
    publicApiKey:
      "ODU1YjNjZTQtM2QyMS00MTViLWIzNGQtNzVmZTgxMWQ3ZDk2NjM4MDE0MjQwMzQ0NDA3NDg2",
    loadStrategy: "on-user-interaction",
    version: "3.4.0",
    modalStyle: "side",
  };

  (() => {
    var c, d;
    (d = (c = window.SnipcartSettings).version) != null || (c.version = "3.0");
    var s, S;
    (S = (s = window.SnipcartSettings).timeoutDuration) != null ||
      (s.timeoutDuration = 2750);
    var l, p;
    (p = (l = window.SnipcartSettings).domain) != null ||
      (l.domain = "cdn.snipcart.com");
    var w, u;
    (u = (w = window.SnipcartSettings).protocol) != null ||
      (w.protocol = "https");
    var f =
        window.SnipcartSettings.version.includes("v3.0.0-ci") ||
        (window.SnipcartSettings.version != "3.0" &&
          window.SnipcartSettings.version.localeCompare("3.4.0", void 0, {
            numeric: !0,
            sensitivity: "base",
          }) === -1),
      m = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
    window.LoadSnipcart = o;
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", r)
      : r();
    function r() {
      window.SnipcartSettings.loadStrategy
        ? window.SnipcartSettings.loadStrategy === "on-user-interaction" &&
          (m.forEach((t) => document.addEventListener(t, o)),
          setTimeout(o, window.SnipcartSettings.timeoutDuration))
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
      e ||
        ((e = document.createElement("div")),
        (e.id = "snipcart"),
        e.setAttribute("hidden", "true"),
        document.body.appendChild(e)),
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
        window.SnipcartSettings.addProductBehavior &&
          (t.dataset.configAddProductBehavior =
            window.SnipcartSettings.addProductBehavior),
        window.SnipcartSettings.modalStyle &&
          (t.dataset.configModalStyle = window.SnipcartSettings.modalStyle),
        window.SnipcartSettings.currency &&
          (t.dataset.currency = window.SnipcartSettings.currency),
        window.SnipcartSettings.templatesUrl &&
          (t.dataset.templatesUrl = window.SnipcartSettings.templatesUrl));
    }
  })();
});
</script>
