# [Day 04] 分而治理的區塊 - Astro Island

在 day-02 中我們說明了 Micro-Frontend 的起因 , 跟五種已在執行的解決方案

1. 使用 iframe 拼裝 - 古早的解決方式 , [事件傳遞的複雜性](https://www.letswrite.tw/postmessage/) & [clickjacking](https://blog.huli.tw/2021/09/26/what-is-clickjacking/) 的問題 , 導致較少團隊使用此方法
2. Client Side 利用 JavaScript 載入模組 - [single-spa](https://single-spa.js.org/)
3. Web Component - 用 shadow dom 做天然的 dom 區塊分隔
4. Module Federation with wrapper ( 用  vite . webpack 幫我們做到 JS 的區塊分離 )
5. SSR 中的 Server Component + Partial hydration  ( 根據需要取得對應的 Component , 並 Render 它 )

Q. 那 Astro 又是使用了哪一個解決方案呢 ? 🤔  
A. Astro Island

## 什麼是 Astro Island ?

Islands Architecture 這個概念是由 Jason Miller 提出 , 每個網頁的區塊可以視為一座島嶼 , 各自維護各自的區塊

這樣我們可以很輕鬆地做到 `Partial Hydration` 同一個頁面分區塊 Hydration , 

如下圖所示 , Header 跟 Image carousel , 視為不同的區塊 , 由不同的團隊維護 , 

![](https://raw.githubusercontent.com/andrew781026/ithome_ironman_2023/master/day-04/imgs/astro-island.png)

那我們就可以在同一個頁面中 , 利用不同的技術來區分區塊 & 組合成完整的頁面 , 以下為頁面的想像

```vue
//--- src/pages/index.astro
---
import VueHeaderComponent from '../components/VueHeaderComponent.vue';
import StaticSidebarComponent from '../components/StaticSidebarComponent.astro';
import StaticContentComponent from '../components/StaticContentComponent.astro';
import SvelteCarouselComponent from '../components/SvelteCarouselComponent.svelte';
import StaticFooterComponent from '../components/StaticFooterComponent.astro';
---

<VueHeaderComponent client:load />
<main class="flex">
  <StaticSidebarComponent />
  <div class="flex flex-col">
    <StaticContentComponent />
    <SvelteCarouselComponent client:load />
  </div>
</main>
<StaticFooterComponent />
```

### 優點

1. 我們可以先產生那個區塊的 html , 之後再 `Partial Hydration` 顯示對應的內容 , 這樣有助於我們的 SEO
2. 區塊各自獨立 , 不會有 js/css global pollution 問題
3. 區塊化還有助於我們做 js-lazy-loading , 區塊在視野中才載入對應需要的 js , 減少 LCP 頁面內容載入的時間

### 參考資料

- [astro concepts - islands](https://docs.astro.build/en/concepts/islands/)
