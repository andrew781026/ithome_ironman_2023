# [Day 15] Astro MDX

Astro 預設為 NO JS 的模式 , 對於 BLOG 網站非常友善 , 因此 Astro 官方也強力發展自身在 BLOG 相關功能的支援

說到 BLOG 近期常見的檔案格式就是 Markdown ( .md ) 

> 提外話 , 目前 notion 就是從支援 Markdown 發展進而變成一個暢銷的筆記軟體


### frontmatter - 定義 md 的檔案描述

```yaml
# src/pages/posts/post-1.md
---
layout: ../../layouts/BlogPostLayout.astro
title: Astro in brief
author: Himanshu
description: Find out what makes Astro awesome!
---
This is a post written in Markdown.
```

### MDX - 在 md 檔案中引用 變數

```yaml
# /src/pages/posts/post-1.mdx
export const title = 'My first MDX post'

# {title}
```

### MDX - 在 md 檔案中引用 元件

```vue
# src/pages/about.mdx
---
layout: ../layouts/BaseLayout.astro
title: About me
---
import Button from '../components/Button.astro';
import ReactCounter from '../components/ReactCounter.jsx';

I live on **Mars** but feel free to <Button title="Contact me" />.

Here is my counter component, working in MDX:

<ReactCounter client:load />
```

### 參考資料

- [frontmatter YAML](https://dev.to/paulasantamaria/introduction-to-yaml-125f)
- [astro doc - Markdown & MDX](https://docs.astro.build/en/guides/markdown-content/)

