# [Day 09] Fetch Data

昨天提到了 SSR 跟 SSG , 可能就是設定上多加一行  `export const prerender = true;`

不太會有感覺會有什麼差異 ?

今天我們用使用 Astro 中的 `fetch()` 來說明設兩者的差異性

在 SSG 的模式底下 , 資料 fetch 的時機是在 `npm run build` 的時候 , 如果 API 後來有增減資料 , 那就不太可能會跟著改變

```vue
---
import Contact from '../components/Contact.jsx';
import Location from '../components/Location.astro';

const response = await fetch('https://randomuser.me/api/');
const data = await response.json();
const randomUser = data.results[0];
---
<!-- Data fetched at build can be rendered in HTML -->
<h1>User</h1>
<h2>{randomUser.name.first} {randomUser.name.last}</h2>

<!-- Data fetched at build can be passed to components as props -->
<Contact client:load email={randomUser.email} />
<Location city={randomUser.location.city} />
```

在 SSR 的模式底下 , 資料 fetch 的時機是在每次 browser request 的時候 , 如果 API 後來有增減資料 , 內容就可以跟著增減

不過這也表示 SSR 需要有一個 node server 去跑

```vue
---
import Contact from '../components/Contact.jsx';
import Location from '../components/Location.astro';
export const prerender = true;

const response = await fetch('https://randomuser.me/api/');
const data = await response.json();
const randomUser = data.results[0];

---
<!-- Data fetched at build can be rendered in HTML -->
<h1>User</h1>
<h2>{randomUser.name.first} {randomUser.name.last}</h2>

<!-- Data fetched at build can be passed to components as props -->
<Contact client:load email={randomUser.email} />
<Location city={randomUser.location.city} />
```


### 參考資料

- [astro doc - Data Fetching](https://docs.astro.build/en/guides/data-fetching/)
