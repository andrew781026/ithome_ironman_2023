# [Day 07] Nanostore - 跨越 Island 的資料管理

我們可解到頁面由 Islands 組成代表的每個區塊都分開處理 , 不過有些時候 , 我們還是希望 Islands 中的資料能互通有無

Astro 提供了一個工具 [Nanostore](https://github.com/nanostores/nanostores) 讓我們可以把 React 中的 data 與 Vue 中的 data 做同步

今天我們就來用一個小範例來使用 Nanostore 吧！

## 第一步：建立新專案

```shell
npm create astro@latest nanostore-test -- --template basics --no-install --no-git --typescript relaxed
```

## 第二步：追加 Integrations

```shell
# add vue framework
npx astro add vue -y
# add react framework
npx astro add react -y
```

## 第三步：建立對應的元件

> Counter.jsx

```jsx
import { useState } from 'react';

const counterStyle = {
  display: 'grid',
  fontSize: '2em',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  placeItems: 'center',
  marginTop:'2em',
  backgroundColor:'blue'
};

export default function Counter({
                                  children,
                                  count: initialCount,
                                }) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div style={counterStyle}>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
    </>
  );
}
```

> Counter.vue

```vue
<template>
  <div class="counter">
    <button @click="subtract()">-</button>
    <pre>{{ count }}</pre>
    <button @click="add()">+</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const add = () => (count.value = count.value + 1);
    const subtract = () => (count.value = count.value - 1);

    return {
      count,
      add,
      subtract,
    };
  },
};
</script>

<style>
.counter {
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2em;
  place-items: center;
  background-color: greenyellow ;
}
</style>
```

## 第四步：安裝 Nanostore

```shell
# add nanostores
npm i -s nanostores @nanostores/react @nanostores/vue
```

## 第五步：建立 store 檔案

> store/counter.js

```javascript
import { atom } from 'nanostores';

export const storeCounter = atom(0);
```

## 第六步：在各元件中使用 store

```jsx
import { useStore } from '@nanostores/react';
import { storeCounter } from 'store/counter.js';

// read the store value with the `useStore` hook
const $counter = useStore(storeCounter);

// write to the new value to store using `.set`
storeCounter.set($counter+1)
```

```vue
<script setup>
  import { useStore } from '@nanostores/vue';
  import { storeCounter } from 'store/counter.js';

  // read the store value with the `useStore` hook
  const $counter = useStore(storeCounter);
  const add = () => storeCounter.set($counter+1)
  const subtract = () => storeCounter.set($counter-1)
</script>
```

## 第七步：在 astro page 中 import

> nanostore.astro

```vue
---
import ReactCounter from '../components/NanoCounter.jsx';
import VueCounter from '../components/NanoCounter.vue';
---

<main>
<ReactCounter client:only="react" />
<VueCounter client:only="vue"/>
</main>
```

### 參考資料

- [astro doc - Nanostore](https://docs.astro.build/en/core-concepts/sharing-state/#why-nano-stores)
