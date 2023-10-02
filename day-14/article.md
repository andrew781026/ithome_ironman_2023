# [Day 14] Astro Routing 

之前 day-07 我們可以在

http://localhost:4321/ - 看到 /src/pages/index.astro 的內容
http://localhost:4321/nanostore - 看到 /src/pages/nanostore.astro 的內容

那是因為 Astro 有預設一組 Routing 的規則 , 今天來說明 Routing in Astro

Static routes
Section titled Static routes
.astro page components as well as Markdown and MDX Files (.md, .mdx) within the src/pages/ directory automatically become pages on your website. Each page’s route corresponds to its path and filename within the src/pages/ directory.

# Example: Static routes
src/pages/index.astro        -> mysite.com/
src/pages/about.astro        -> mysite.com/about
src/pages/about/index.astro  -> mysite.com/about
src/pages/about/me.astro     -> mysite.com/about/me
src/pages/posts/1.md         -> mysite.com/posts/1

TIP

There is no separate “routing config” to maintain in an Astro project! When you add a file to the src/pages/ directory, a new route is automatically created for you. In static builds, you can customize the file output format using the build.format configuration option.

Dynamic routes
Section titled Dynamic routes
An Astro page file can specify dynamic route parameters in its filename to generate multiple, matching pages. For example, src/pages/authors/[author].astro generates a bio page for every author on your blog. author becomes a parameter that you can access from inside the page.

In Astro’s default static output mode, these pages are generated at build time, and so you must predetermine the list of authors that get a corresponding file. In SSR mode, a page will be generated on request for any route that matches.

Static (SSG) Mode
Section titled Static (SSG) Mode
Because all routes must be determined at build time, a dynamic route must export a getStaticPaths() that returns an array of objects with a params property. Each of these objects will generate a corresponding route.

[dog].astro defines the dynamic dog parameter in its filename, so the objects returned by getStaticPaths() must include dog in their params. The page can then access this parameter using Astro.params.

src/pages/dogs/[dog].astro
---
export function getStaticPaths() {
return [
{params: {dog: 'clifford'}},
{params: {dog: 'rover'}},
{params: {dog: 'spot'}},
];
}

const { dog } = Astro.params;
---
<div>Good dog, {dog}!</div>

This will generate three pages: /dogs/clifford, /dogs/rover, and /dogs/spot, each displaying the corresponding dog name.

The filename can include multiple parameters, which must all be included in the params objects in getStaticPaths():

src/pages/[lang]-[version]/info.astro
---
export function getStaticPaths () {
return [
{params: {lang: 'en', version: 'v1'}},
{params: {lang: 'fr', version: 'v2'}},
];
}

const { lang, version } = Astro.params;
---
...

### 參考資料

- [astro doc - routing](https://docs.astro.build/en/core-concepts/routing/)

