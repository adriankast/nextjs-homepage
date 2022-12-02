---

title: More frontend dev learnings

excerpt: Some more frontend dev learnings, some inspired by learning from [web.dev](https://web.dev). This post was ready since quite a time, but I really wanted to get my site running with NextJS first and to simplify the whole publishing workflow (which is still kind of a work in progress tho). So finally my Site is ready (enough) to publish it 🎉. As always feedback is very much appreciated and I hope to be able to ship posts much more frequently from now on.

coverImage: /assets/blog/more-frontend-dev-learnings/cover.jpg

date: "2022-12-02T06:35:07.322Z"

ogImageUrl: /assets/blog/more-frontend-dev-learnings/cover.jpg

---

Some more frontend dev learnings, some inspired by learning from [web.dev](https://web.dev). This post was ready since quite a time, but I really wanted to get my site running with NextJS first and to simplify the whole publishing workflow (which is still kind of a work in progress tho). So finally my Site is ready (enough) to publish it 🎉. As always feedback is very much appreciated and I hope to be able to ship posts much more frequently from now on.

## **Set image width & height in html**

I always thought setting the image width and height in CSS is the proper way to do it and setting it in html is just a deprecated way of doing it. But I recently learned that there is a huge advantage of setting it also in html, because the Browser can respect the aspect ratio of the image before it has actually loaded and thus avoid unnecessary layout shifts. 
You can see it in this [REPL](https://replit.com/@adriankast/ShowcaseHtmlImgWidthHeight#index.html). Recently there is also a CSS property that allows to define the aspect ratio explicit and seems to have browser support from all new versions of major browsers ([aspect-ratio on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)).

## **Format an Array in a locale way**

The Internationalization methods keep surprising me of what is possible in modern browsers even without using any i18n library. The last thing I stumbled upon here, was the `ListFormat` method. It let’s you concatenate an array in a localized way.

```tsx
const inArray = ["apple", "microsoft", "google"];
const outString = new Intl.ListFormat("de").format(inArray);

console.log(outString); // apple, microsoft und google
```

## **Change access rights in git**

A colleague showed me this one, which is obviously better than changing access rights via `chmod` in bash scripts. The problem it solves is that you might get “Accessing scriptXY.sh not allowed” warnings when you commit scripts and try to execute them in you CI/CD pipeline.

- List the files in the current directory with access rights

```bash
git ls-files -s
```

- Change the access rights by adding execution rights for all scripts

```bash
git update-index --chmod=+x *.sh
```

## Open Graph meta tags

I new something like the [Open Graph protocol](https://ogp.me/) exists since quite some time, but never really looked into it. Maybe I was kind of scared away from turtle and such things, because I had to specify a Language in it during my final thesis. Anyway with enough distance to that I now have read about which attributes exist and how simple it is to include in web pages. Probably I will also use it more often in the future. If you’re also interested in letting websites render more meaningful integrations like previews of your own sites/projects, you can get started with only four attributes (but many more available).

```html
<html prefix="og: https://ogp.me/ns#">
<head>
<meta property="og:title" content="My second blog post" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.notion.so/adriankast/2-UI-Blog-Post-01ddd2337b4943f98fb3989064dbc09c" />
<meta property="og:image" content="https://unsplash.com/photos/jmZ6QjvJjvk" />
</head>
...
</html>
```

## Accent color for input elements

Before knowing the `accent-color` CSS property, I thought the way to go for html input elements was either:

1. Use the browser inputs and exactly how they look (since years the same actually)
2. Create custom input elements, which allows you styling just as you wish, but gives you a hard time making them as production ready as the browser inputs are, e.g., when it comes to accessibility.

So what is the accent color about? Letting you use the browser defined input elements, but with your primary color so you get at least some customization and they don’t totally crash your design. You can see an example of how simple it is to use below. So what is the downside? As you might guess browser support is a point, [all major browsers support it](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color#browser_compatibility), but only since a few months. Also this gives you only the ability to style checkboxes, radios, range & progress bars, but does not solve, e.g., adapting spacing of forms to your design.

```html
<body>
  RedLight GreenLight
  <form>
    <input type="checkbox" style="accent-color: red;" checked/>
    <input type="checkbox" style="accent-color: green;" checked/>
  </form>
</body>
```

![accentColorResult.png](/assets/blog/more-frontend-dev-learnings/accentColorResult.png)