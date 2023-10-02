# [Day 16] API in Astro - Endpoints

之前有說過 , Astro 可以設定成 SSR mode , 當我們使用 SSR Server 在服務使用者時

其實後面就是在運行一個 Node Server , 因此 Node 中 http 套件終能做到的事情都可以做到

不過 , Astro 有定義 Endpoints 這個東西 , 提供我們較簡易的 HTTP API 功能

### 預先設定

- 安裝 Astro
- 安裝支援 Node.js 的 SSR Mode

### HTTP API 常見功能

1. 回傳特定檔案 (大多用於某網址對應影片下載)
2. JSON 回傳
3. 網址 params 
4. queryString

### HTTP methods

In addition to the GET function, you can export a function with the name of any HTTP method. When a request comes in, Astro will check the method and call the corresponding function.

You can also export an ALL function to match any method that doesn’t have a corresponding exported function. If there is a request with no matching method, it will redirect to your site’s 404 page.

```jsx
export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify({
      message: "This was a GET!"
    })
  )
}

export const POST: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
      message: "This was a POST!"
    })
  )
}

export const DELETE: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
      message: "This was a DELETE!"
    })
  )
}

export const ALL: APIRoute = ({ request }) => {
  return new Response(JSON.stringify({
      message: `This was a ${request.method}!`
    })
  )
}
```

### 參考資料

- [astro doc - Endpoints](https://docs.astro.build/en/core-concepts/endpoints/)

