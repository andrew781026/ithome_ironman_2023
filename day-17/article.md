# [Day 17] Astro - Fonts

Astro.js 作為一個強調 BLOG 的 framework , 那肯定少不了字型的設定啦 ~

下面我們來說明在 Astro.js 如何設定字型吧~

### Using a local font file

This example will demonstrate adding a custom font using the font file DistantGalaxy.woff.

1. Add your font file to public/fonts/.

2. Add the following @font-face statement to your CSS. This could be in a global .css file you import, a <style is:global> block, or a <style> block in a specific layout or component where you want to use this font.

```css
/* Register your custom font family and tell the browser where to find it. */
@font-face {
  font-family: 'DistantGalaxy';
  src: url('/fonts/DistantGalaxy.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

3. Use the font-family value from the @font-face statement to style elements in your component or layout. In this example, the <h1> heading will have the custom font applied, while the paragraph <p> will not.

```vue
---
---

<h1>In a galaxy far, far away...</h1>

<p>Custom fonts make my headings much cooler!</p>

<style>
h1 {
  font-family: 'DistantGalaxy', sans-serif;
}
</style>
```

### Using Fontsource

```shell
npm install @fontsource/twinkle-star
```

### Register fonts in Tailwind

```diff
+const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // ...
  theme: {
    extend: {
+      fontFamily: {
+        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
+      },
    },
  },
  // ...
};
```

### 參考資料

- [astro doc - fonts](https://docs.astro.build/en/guides/fonts/)
- [google font - list](https://fonts.google.com/)
- [fontspace](https://www.fontspace.com/)
- [google font - effect](https://developers.google.com/fonts/docs/getting_started?hl=zh-tw#enabling_font_effects_beta)
- [網頁加載字型Web Font FOIT& FOUT與效能測試](https://282714.medium.com/%E7%B6%B2%E9%A0%81%E5%8A%A0%E8%BC%89%E5%AD%97%E5%9E%8Bfoit-fout%E8%88%87%E6%95%88%E8%83%BD%E6%B8%AC%E8%A9%A6-cb0b03daad60)
