# [Day 10] Adding an Adapter - 部屬到 vercel

之前說明了 , 如何做單頁的 SSR 設定 , 那如果想要全站的設定都改成 SSR 模式呢 ?

只要在 `astro.config.mjs` 中修改 output 設定

- `output: 'static'`: SSR mode.<預設> 所有頁面產生靜態頁面 , 無法設定特定頁面成 SSR
- `output: 'server'`: SSR mode. 所有頁面都是 Server-side Render , 設定 `export const prerender = true;` 的頁面才預先產生
- `output: 'hybrid'`: SSG mode. 產生靜態頁面 , 設定 `export const prerender = false;` 的頁面才做 Server-side Render

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // static . server . hybrid
  adapter: vercel(),
});
```

當我們切換 output 模式成 server 或是 hybrid 時記得要加 adapter 不然他會抱錯

![](https://raw.githubusercontent.com/andrew781026/ithome_ironman_2023/master/day-10/imgs/server-error.png)

### 安裝 vercel Adapter

```shell
npx astro add vercel
```

### 產出 vercel serverless 需要用的 js 檔案

```shell
npm run build
```

### 利用 Vercel CLI 部屬

```shell
# 安裝 vercel CLI 
npm install -g vercel
# vercel CLI 登入
vercel login
# 只將 .vercel/output 內的檔案部屬到 vercel  
vercel deploy --prebuilt
# 部屬專案到 vercel , 並讓其自動 build .vercel/output
vercel
```

```shell
PS E:\ezoom\ithome_ironman_2023\day-10\adapter-vercel> vercel
Vercel CLI 32.3.1
? Set up and deploy “E:\ezoom\ithome_ironman_2023\day-10\adapter-vercel”? [Y/n] y
? Which scope do you want to deploy to? andrew781026
? Link to existing project? [y/N] n
? What’s your project’s name? adapter-vercel-02
? In which directory is your code located? ./
Local settings detected in vercel.json:
Auto-detected Project Settings (Astro):
- Build Command: astro build
- Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
- Output Directory: dist
? Want to modify these settings? [y/N] n # 記得這步要選 N
🔗  Linked to andrew781026/adapter-vercel-02 (created .vercel and added it to .gitignore)
✅  Preview: https://adapter-vercel-02-h2ib131ul-andrew781026.vercel.app [1s]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/andrew781026/adapter-vercel-02/settings
```

然後我們就可以在 `https://adapter-vercel-02-h2ib131ul-andrew781026.vercel.app` 看到部屬的專案

[![](https://raw.githubusercontent.com/andrew781026/ithome_ironman_2023/master/day-10/imgs/deployed.png)](https://adapter-vercel-02-h2ib131ul-andrew781026.vercel.app)

### 參考資料

- [astro doc - Add Adapter](https://docs.astro.build/en/guides/server-side-rendering/#adding-an-adapter)
- [astro doc - deploy to vercel](https://docs.astro.build/en/guides/deploy/vercel/)
