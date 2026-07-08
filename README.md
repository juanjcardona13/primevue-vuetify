# Aura Blueprint for Vuetify

This repository is a live demo and distribution of **Aura**, a blueprint for **Vuetify 4** that replicates the visual style (look and feel) of [PrimeVue](https://primevue.org/)'s Aura theme. It does not aim to match PrimeVue's API or component structure, only its default appearance, using Vuetify's own theming system (theme, defaults, SASS variables, and minimal custom CSS).

The demo (`src/App.vue`) shows, side by side, each PrimeVue Aura component next to its Vuetify blueprint equivalent, based on the mapping in [`COMPONENT_MAPPING.md`](./COMPONENT_MAPPING.md).

## What the blueprint is

To adopt the look and feel in your own project you only need two things from this repo:

- **`src/plugins/vuetify.ts`** — the blueprint itself: theme colors, component aliases (PrimeVue names → Vuetify components), defaults, and icon configuration. It also imports the style overrides.
- **`src/styles/`** — the SASS entry (`settings.scss`) plus the per-component overrides in `styles/overrides/`.

Everything else in this repo (PrimeVue packages, `App.vue`, the catalog) exists only to render the comparison demo and is **not** required to use the blueprint.

## Requirements

- **Vuetify 4** and Vue 3.
- Build configured to use Vuetify SASS variables.
- **Inter** font loaded in the browser (this repo uses `Inter var` at a `14px` root size).
- **Iconify** icons with the **Prime** icon set (recommended: `@iconify/vue` + `@iconify-json/prime`), since the blueprint references icons with the `prime:` prefix.

## Installation

### 1. Place the files

Copy `src/plugins/vuetify.ts` and the entire `src/styles/` folder into your project. Recommended paths:

- `src/plugins/vuetify.ts`
- `src/styles/settings.scss`
- `src/styles/overrides/*.scss`

If you use different paths, update the imports at the top of `vuetify.ts` and the `configFile` reference below.

### 2. Configure SASS in Vuetify (Vite)

In `vite.config.ts`, point the Vuetify plugin to `settings.scss`:

```ts
import Vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
  ],
})
```

For Nuxt or other setups, see Vuetify's SASS variables documentation and adjust the `configFile` path.

### 3. Load the Inter font

The blueprint expects the **Inter** font at a `14px` root size. The simplest option is the CDN used by this repo, in your `index.html`:

```html
<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
<style>
  html {
    font-size: 14px;
    font-family: 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }
</style>
```

Alternatively install it as a package (e.g. `pnpm add @fontsource/inter` and `import '@fontsource/inter'`). The font must be loaded and its name must match `$body-font-family` in `settings.scss`.

### 4. Install Iconify (Prime icons)

```bash
pnpm add @iconify/vue @iconify-json/prime
```

The blueprint configures a custom Iconify icon set and references icons with the `prime:` prefix (for example `prime:user`). To use a different icon system, adapt the `icons` section in `vuetify.ts` according to Vuetify's icon API.

### 5. Connect the blueprint to Vuetify

`vuetify.ts` already calls `createVuetify(...)` and exports the configured instance as its default export, so you just register it as a plugin:

```ts
// src/plugins/index.ts
import type { App } from 'vue'
import vuetify from './vuetify'

export function registerPlugins (app: App) {
  app.use(vuetify)
}
```

```ts
// src/main.ts
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import App from './App.vue'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
```

Ensure your `@/` alias points to the `src` folder so `@/styles/...` imports inside `vuetify.ts` resolve correctly.

---

## Running this demo

```bash
pnpm install
pnpm dev
```

Then open the dev server (default: `http://localhost:3000`). The demo installs PrimeVue (`primevue`, `@primeuix/themes`, `primeicons`) only to render the original components next to the Vuetify blueprint.

## Customization

- **Colors**: edit `theme.themes.light.colors` and `theme.themes.dark.colors` in `vuetify.ts`.
- **Component defaults**: adjust the `defaults` and `aliases` sections in `vuetify.ts`. Priority order when replicating a style is props > class > SASS variables > custom CSS.
- **Typography / SASS variables**: tweak `src/styles/settings.scss`. If you switch fonts, load the new font and update `$body-font-family`.
- **Per-component overrides**: the files in `src/styles/overrides/` contain the minimal custom CSS needed for components that can't be matched with props/classes/variables alone.

## Available scripts

- `pnpm dev` — start the dev server
- `pnpm build` — type-check and build for production
- `pnpm preview` — preview the production build
- `pnpm type-check` — run `vue-tsc`
- `pnpm lint` / `pnpm lint:fix` — run ESLint
- `pnpm mcp` / `pnpm mcp:revert` — apply/revert Ruler (Vuetify MCP) config

## Troubleshooting

- **Blueprint styles are not applied**
  Ensure `vuetify.ts` is registered via `app.use(vuetify)` and that its `@/styles/...` imports resolve (check the `@` alias).

- **SCSS styles have no effect**
  Check that `configFile` in the Vuetify plugin points to the actual path of `settings.scss`.

- **Font does not change**
  In DevTools, confirm Inter is loaded and that the `font-family` matches `$body-font-family`. Make sure global CSS is not overriding it.

- **Icons do not show**
  Verify that `@iconify/vue` and `@iconify-json/prime` are installed and that icon names use the `prime:` prefix expected by the blueprint.

## References

- [Blueprints — Vuetify](https://vuetifyjs.com/en/features/blueprints/)
- [SASS variables — Vuetify](https://vuetifyjs.com/en/features/sass-variables/)
- [Text and typography — Vuetify](https://vuetifyjs.com/en/styles/text-and-typography/)
- [Icon fonts — Vuetify](https://vuetifyjs.com/en/features/icon-fonts/)
- [PrimeVue](https://primevue.org/) · [Aura theme](https://primevue.org/theming/styled/)
