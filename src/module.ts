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
    name: "yyett-zlider",
    // The key in `nuxt.config` that holds your module options
    configKey: "zlider",
  },
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addComponentsDir({ path: resolve("runtime/components") });
    addImportsDir(resolve("runtime/composables"));

    nuxt.options.css.push(
      ...[
        resolve("runtime/style/main.scss"),
        resolve("runtime/style/items.scss"),
      ]
    );
  },
});
