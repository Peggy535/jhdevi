export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    console.log("Page finished loading..");
    window.scrollTo(0, 0);
  });
});
console.log("Hi from scroll plugin");
