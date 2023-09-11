import { defineNuxtModule, createResolver, addImportsDir } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "yyett-the-slider",
    configKey: "yyett-the-slider",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  // Shorthand sugar to register Nuxt hooks
  hooks: {
    "components:dirs"(dirs) {
      // Add ./components dir to the list
      const { resolve } = createResolver(import.meta.url);

      dirs.push({
        path: resolve(__dirname, "./components"),
        pathPrefix: false,
      });
    },
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addImportsDir(resolve("runtime/composables"));

    nuxt.options.css.push(resolve("runtime/style/main.scss"));
  },
});
