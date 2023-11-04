export default defineNuxtConfig({
  modules: ["../src/module"],
  runtimeConfig: {
    public: {},
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  components: ["~/components"],
});
