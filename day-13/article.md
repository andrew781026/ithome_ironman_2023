# [Day 13] Custom Client Directives - 自定義 hydrated 時機

在 day-06 我們表列了很多 , client:* Directives , 說明 Astro 提供不同類型的 js hydrate 時機

複習一下有

- client:load - 頁面載入時 hydrate
- client:idle - 頁面有空閒時 , 才做 hydrate , 用 requestIdleCallback 控制
- client:visible - 元件可被看見時 hydrate , 用 IntersectionObserver 控制
- client:media - 根據 media-query 的條件做 hydrate
- client:only - 由各程式語言做 CSR , Astro 不產生元件的 html 內容 , 因此不用 hydrate

----

其實還有一種 , 那就是今天要討論的 Custom Client Directives

addClientDirective option
Section titled addClientDirective option
Added in: astro@2.6.0
Type: (directive: ClientDirectiveConfig ) => void;

Adds a custom client directive to be used in .astro files.

Note that directive entrypoints are only bundled through esbuild and should be kept small so they don’t slow down component hydration.

Example usage:

```js
// ------- astro.config.mjs -------- //
import { defineConfig } from 'astro/config';
import clickDirective from './astro-click-directive/register.js'

// https://astro.build/config
export default defineConfig({
  integrations: [
    clickDirective()
  ],
});
```

```js
// ------- astro-click-directive/register.js -------- //
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "client:click",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "click",
        entrypoint: "./astro-click-directive/click.js",
      });
    },
  },
});
```

```js
// ------- astro-click-directive/click.js -------- //
/**
 * Hydrate on first click on the window
 * @type {import('astro').ClientDirective}
 */
export default (load, opts, el) => {
  window.addEventListener('click', async () => {
    const hydrate = await load()
    await hydrate()
  }, { once: true })
}
```

You can also add types for the directives in your library’s type definition file:

```ts
// ------- astro-click-directive/index.d.ts -------- //
import 'astro'
declare module 'astro' {
  interface AstroClientDirectives {
    'client:click'?: boolean
  }
}
```

### 參考資料

- [astro doc - client-directives](https://docs.astro.build/en/reference/directives-reference/#custom-client-directives)
- [astro doc - addClientDirective](https://docs.astro.build/en/reference/integrations-reference/#addclientdirective-option)

