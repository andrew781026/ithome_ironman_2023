# [Day 08] SSG 與 SSR

Astro.js 在預設情況下 , 都是使用 SSG 模式 , 這個模式預先 Generate 要回傳的內容 , 因此可以 Time to Interactive (TTI) 可以較小

![](https://raw.githubusercontent.com/andrew781026/ithome_ironman_2023/master/day-08/imgs/ssg.png)

不過有時 , 內容的資料需要從 API 取得 , 因此可能需要先在 server 端先生成對應的 HTML , 再傳送給 browser 端

![](https://raw.githubusercontent.com/andrew781026/ithome_ironman_2023/master/day-08/imgs/ssr.png)

-----

只要在 astro 頁面中加上 `export const prerender = true;` 他就會認得這個 page 要做 ssr 了~

```vue
---
+ export const prerender = true;
// ...
---
<html>
  <!-- Static, pre-rendered page here... -->
</html>
```

### 參考資料

- [Choosing between SSR, SSG, and dynamic rendering in Astro](https://www.youtube.com/watch?v=aIHRjloFASU)
- [astro doc - Server-side Rendering](https://docs.astro.build/en/guides/server-side-rendering/)
