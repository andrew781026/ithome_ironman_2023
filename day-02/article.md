# [Day 02]  簡介 Micro-Frontend 

## 什麼是 Micro-Frontend ?

簡單來說 , 就是在一個頁面中可以使用多個技術 ( React . Vue . Angular . Svelte...等)

![](https://static.coderbridge.com/img/techbridge/images/arvinh/three-teams.png)

- [Playground](https://micro-frontends.org/0-model-store/)

## 大公司中 Frontend 團隊的痛點

每個團隊各自獨立 , 使用不同的技術來實作頁面 , 有 React . Vue . Angular . Svelte...等

大多時候 , 有一個已經完成的 web 頁面 , 公司想要取出其中個區塊拿到另一個團隊做重復使用時 , 

常會遇到 , 目前的實作與另一團隊衝突 ( css conflict 或是 Vue Component 無法在 React 專案中使用 )

對於公司來說每次做 web app 都需要重新來開發頁面 , 真的很費時費力

```
## Extra Note :

有些公司 , 乾脆指定前端團隊只能使用一種技術線 ex : Angular 對應 Google / React 對應 Meta  
這對於開發技術的公司沒有任何問題 , 因為需要如何修改技術就跟著走 , 可是如果你的公司使採用那些技術的公司 ex : React 對應 Uber  
那於公司就會比較有問題 , 因為你把公司開發的產品都綁在其他公司開發的技術上面 , 你不只需要考量技術走向 , 你還需要考量法律問題  
例如 React 的開源政策改變 , 那你公司的產品就只能等著被 FB 複製貼上吧 ~~  
```

> [Facebook 曾經的開源爭議 - BSD licensed](https://zhuanlan.zhihu.com/p/28894079)

## Micro-Frontend 的概念由來與優點

- 以下說明源於 [What are Micro Frontends?](https://micro-frontends.org/) 這篇文章

在 Micro-Frontend 紅火之前 , 後端的生態早已有一個有名的概念 - Micro-service 

> 後端中每個 Microservices 彼此之間獨立作業，各個團隊可以擁有自己的部署與開發技術，溝通可以透過各樣 API 介面來達成，
> 如果需要一份包含 historyPosts . userEmail . userFriends 的 UserData 可以透過多個團隊的 API 來組合出來

![](https://static.coderbridge.com/img/techbridge/images/arvinh/monolithic-fe-micro-be.png)

> 那網頁 APP 有沒有可能 ? 用組合的方式來完成 , 而各自的區塊由不同的團隊來維護

![](https://static.coderbridge.com/img/techbridge/images/arvinh/micro-fe-micro-be.png)


## 目前的幾種可行方式

1. 使用 iframe 拼裝 - 古早的解決方式 , [事件傳遞的複雜性](https://www.letswrite.tw/postmessage/) & [clickjacking](https://blog.huli.tw/2021/09/26/what-is-clickjacking/) 的問題 , 導致較少團隊使用此方法
2. Client Side 利用 JavaScript 載入模組 - [single-spa](https://single-spa.js.org/)
3. Web Component - 用 shadow dom 做天然的 dom 區塊分隔
4. Module Federation with wrapper ( 用  vite . webpack 幫我們做到 JS 的區塊分離 )
5. SSR 中的 Server Component + Partial hydration  ( 根據需要取得對應的 Component , 並 Render 它 )


## 參考資料

- [技术雷达之「微前端」- 将微服务理念扩展到前端开发（上：理论篇）](https://blog.jimmylv.info/2017-12-24-tech-radar-microfrontends-extending-microservice-to-fed/)
- [What are Micro Frontends?](https://micro-frontends.org/)
- [一起探討 Micro Frontends 的世界](https://blog.techbridge.cc/2019/01/12/micro-frontends-concept/)
- [微服務很夯，那你有聽過微前端嗎？初探 Micro Frontends 程式架構](https://medium.com/starbugs/%E5%BE%AE%E6%9C%8D%E5%8B%99%E5%BE%88%E5%A4%AF-%E9%82%A3%E4%BD%A0%E6%9C%89%E8%81%BD%E9%81%8E%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%97%8E-%E5%88%9D%E6%8E%A2-micro-frontends-%E6%9E%B6%E6%A7%8B-e0a8469be601)

```
現在 IT 邦可以直接用 emoji 🤗 , 想當初 2021 還需要用  &what; 查表才能使用 😂
```

- [歷史文章 -  請問 iT邦 發文時 emoji 一定要這樣使用才不會變成" ? " 是正常的嗎 ? ?](https://ithelp.ithome.com.tw/questions/10205286)
