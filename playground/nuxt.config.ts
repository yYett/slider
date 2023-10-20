export default defineNuxtConfig({
  modules: ["../src/module"],
  runtimeConfig: {
    public: {
      theSlider: {
        slidePerView: 1,
      },
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  components: ["~/components"],
});