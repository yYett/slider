import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addComponentsDir,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    // Usually the npm package name of your module
    name: "yyett-the-slider",
    // The key in `nuxt.config` that holds your module options
    configKey: "theSlider",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  // Shorthand sugar to register Nuxt hooks
  // hooks: {
  //   "components:dirs"(dirs) {
  //     // Add ./components dir to the list
  //     const { resolve } = createResolver(import.meta.url);

  //     dirs.push({
  //       path: resolve(__dirname, "./components/**"),
  //       pathPrefix: false,
  //     });
  //   },
  // },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addComponentsDir({ path: resolve("runtime/components") });
    addImportsDir(resolve("runtime/composables/**"));

    nuxt.options.css.push(
      ...[
        resolve("runtime/style/main.scss"),
        resolve("runtime/style/items.scss"),
      ]
    );
  },
});
