---
title: "1. Blog Post - recent dev learnings"
excerpt: "New year new things to try...I thought about blogging for quite some time and yet never found the time or muse to get started...but here it is - my first blog post 🎉. It is entirely about my recent learnings in frontend development (Typescript/React) and probably not too sophisticated since I’m effectively working with React since a year. I plan on doing future posts like this but might also cover other topics and would highly appreciate any feedback 🙏 and also reading about related learnings you’ve made."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2022-01-09T05:35:07.322Z"
author:
  name: Adrian Kast
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

New year new things to try...I thought about blogging for quite some time and yet never found the time or muse to get started...but here it is - my first blog post 🎉. It is entirely about my recent learnings in frontend development (Typescript/React) and probably not too sophisticated since I’m effectively working with React since a year. I plan on doing future posts like this but might also cover other topics and would highly appreciate any feedback 🙏 and also reading about related learnings you’ve made. _January 9, 2022_

**Topics**:

# Data error loading hook pattern

I’ve seen this pattern in different versions repeatedly (I think for example at [Kent C. Dodds](https://twitter.com/kentcdodds)) and it improves the readability of a React component. It is probably nearly as old as hooks are, but since I really like it, I still want to share it.

It applies to components that involve server communication, the example deals with fetching and displaying a Todo card.

```javascript
const ToDoCard = ({ id }: { id: string }) => {
  const { data, error, loading } = useServerToDoCard(id);

  return (
    <BannerOrContent hasError={error} isLoading={loading}>
      <div>
        <h1>{data.title}</h1>
        <div>{data.description}</div>
      </div>
    </BannerOrContent>
  );
};
```

In the example you can see that all server calls, state management and reaction to fetch status changes are hidden in the component. This can be achieved by letting the `useServerToDoCard` hook take care of:

- Making server requests (fetch the Todo card title and description) and handling responses
- Storing the result in a store/state if it can be edited locally
- Returning appropriate loading and error conditions

and an additional `BannerOrContent` component that will display hints to the user when the content isn’t ready yet or show the content of the Todo card.

<aside>
🔜 There is more to that, by applying this pattern, using a store like redux and other custom hooks you can effectively forget about smart and dumb components. Just use components to define the view and get your content ready to show by custom hooks.

</aside>

# Npm update strategy

> TLDR; The following section describes the required commands and my strategy for updating npm dependencies. At the end you will find a small outlook to what can be automated.

## npm outdated

When updating npm dependencies the most useful command is `npm outdated` it lists all available updates when comparing the installed npm packages to the allowed semantic versioning newest release and the latest release of the package. Running the command should result in an output like:

![Command line output after running `npm outdated` (skipped location column)](assets/posts/../../../public/assets/blog/first-post/Untitled.png)

Command line output after running `npm outdated` (skipped location column)

Showing only the packages that have updates/upgrades available.

## batching updates

Since it is very time consuming to update every used package then run all tests then correct stuff, I mostly update a few packages at once. The number of packages bundled for updating depends on how likely changes will break something, e.g., if updating the react core package → no other package updated but if updating some `@types` type definitions → up to 10 packages at once. Another hint for batching is to group packages that are related, e.g., if I update react also updating react-dom obviously makes sense (yes even if it is two updates batched then).

<aside>
💡 Another approach I frequently use to speed up finding errors after updates is running the typescript compiler (without generating output). It takes ways less time than running all tests (or building with webpack) and catches most problems.

Command: `tsc tsconfig.json --noEmit`

</aside>

## command to update

If you don’t care about the version in your package.json but only the package-lock.json and the installed dependencies you can safely use `npm update [package]`. If you want your package.json to be updated to the installed version, depending on your npm version (changed with npm v7 [see GitHub Issue](https://github.com/npm/cli/issues/2704)) you can still stick with npm update or have to use `npm install [package]@[newVersion]`.

## other things to test

Maybe not after every update/batch update, but after a few you should also consider (depends highly on your project):

- run build command (for example `npm run build`),
- do manual UI testing,
- run more costly tests like e2e-tests
- run your linter (for example ESlint), when updating lint-rules

In general everything that can break after an update should run once in a while, it makes finding the source of trouble much easier if you haven’t meanwhile updated halve of you dependencies. If you have a sophisticated CI pipeline that shouldn’t even cost you extra time, just remember to push regularly.

## 🤖 automations

To continuously keep dependencies up to date you can check out the [Dependabot](https://github.com/dependabot/dependabot-core) project, it is integrated into GitHub/GitLab and creates PullRequests/MergeRequests with updated dependencies. This is probably the optimal case to achieve real CD. If you’re looking for a solution that requires less effort/maintenance (for example if your developing a product that isn’t even released yet) a pattern I find useful is to write a simple script for CI/CD that you can trigger manually. That script uses the output of npm outdated ( `npm outdated --json > output-file.json` [see example output](https://gist.github.com/adriankast/da642549df400a7a4e843cc4f5e280d3)), checks whether there are updates available (you also check for both, semver and latest) and creates a new CI/CD job for each possible update, which simply installs the updated package, then runs npm test. If you trigger the script you should get a good overview of which updates cause problems for sure (and can update the other ones in large batches).

# Prefer ?? over ||

> **Always use the nullish coalescing operator `??` instead of the OR operator `||` to provide a fallback value.**

## why

This avoids errors when values are falsy for JS (for example `0` or `“”`) but are not undefined or null. In the following example the current value would be 1 if the default value is 0, which is hardly the behavior we want or anybody can easily understand.

## examples

Assuming the default value is type number and we don’t want 0 to be treated as if there was no value provided.

```tsx
// good ✅
const currentValue = defaultValue ?? 1;

// error-prone ❌
const currentValue = defaultValue ?? 1;
```

## details

The Nullish Coalescing operator was introduced in [TypeScript 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing) and ES2020, more on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator).

# About this post

I created this blog post using [Notion](https://www.notion.so/) and downloaded the markdown as html files to host it together with the other parts of my website (to be reachable under my domain and also for GDPR reasons). You can find:

- The source of my whole website here https://github.com/adriankast/web2020
- The Notion source of this blog post [here](https://www.notion.so/1-Blog-Post-recent-dev-learnings-6e102dedf604410898278be45274659c) (and you can also leave comments 😃)
- After exporting to html I added [Prism](https://prismjs.com/) for code highlighting

The writing experience in Notion is really good, but I might move to writing simple markdown files and converting them to html in GitHub Actions in the future, haven’t decided on this one.

As you probably remember this is my first blog post and I would highly value if you provide me any feedback about what I can improve in the future, plus if you made related learnings I’m also interested in reading about them:

- You can comment on the Notion source (see bullet list above)
- You reach me via Mail [info@adriankast.de](mailto:info@adriankast.de), DM in [LinkedIn](https://www.linkedin.com/in/adriankast/)/[Xing](https://www.xing.com/profile/Adrian_Kast2/cv)
- If you would like to get a ping for future posts just let me know

In case you've read until the very end thank you very much 🤗 and have a great start in 2022 🚀.
