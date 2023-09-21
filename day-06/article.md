# [Day 06] Client Directives - 設定 JS 不同的生效類型

在昨天的 Vue 範例中 , 我們使用了 `<Counter client:idle/>` 如果眼尖的邦友一定有注意到

我們在引用 Counter 元件時多加一個 `client:idle` 這個屬性

其實 , Astro 是 Zero JS, by default , 減少 JS 檔案的傳輸 & 避免 JS runtime 拖慢頁面的呈現

所以當我們直接使用 `<Counter />` 元件時 , 他是 Zero JS , 因此當你點擊 + 號時 , 數字並不會增加

因此我們需要追加 client:* 屬性 , 告訴 Astro , 這個元件是需要 JS 的麻煩幫我使用之



Client Directives
Section titled Client Directives
These directives control how UI Framework components are hydrated on the page.

By default, a UI Framework component is not hydrated in the client. If no client:* directive is provided, its HTML is rendered onto the page without JavaScript.

A client directive can only be used on a UI framework component that is directly imported into a .astro component. Hydration directives are not supported when using dynamic tags and custom components passed via the components prop.

client:load
Section titled client:load
Priority: High
Useful for: Immediately-visible UI elements that need to be interactive as soon as possible.
Load and hydrate the component JavaScript immediately on page load.

<BuyButton client:load />

client:idle
Section titled client:idle
Priority: Medium
Useful for: Lower-priority UI elements that don’t need to be immediately interactive.
Load and hydrate the component JavaScript once the page is done with its initial load and the requestIdleCallback event has fired. If you are in a browser that doesn’t support requestIdleCallback, then the document load event is used.

<ShowHideButton client:idle />

client:visible
Section titled client:visible
Priority: Low
Useful for: Low-priority UI elements that are either far down the page (“below the fold”) or so resource-intensive to load that you would prefer not to load them at all if the user never saw the element.
Load and hydrate the component JavaScript once the component has entered the user’s viewport. This uses an IntersectionObserver internally to keep track of visibility.

<HeavyImageCarousel client:visible />

client:only

<SomeReactComponent client:only="react" />
<SomePreactComponent client:only="preact" />
<SomeSvelteComponent client:only="svelte" />
<SomeVueComponent client:only="vue" />
<SomeSolidComponent client:only="solid-js" />


### 參考資料

- [astro doc - client-directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)
