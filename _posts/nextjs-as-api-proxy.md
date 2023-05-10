---
title: Next.JS as API Proxy
excerpt: In my current side-project I could not access an API from the client, since the CORS-headers prohibited cross-origin requests. But I still wanted to use the API and display its data in a way that is different than what the vendor provided iframe does. That lead me to using Next.JS as an API Proxy. Actually more or less, since I’m also converting the data with the API route, it is not strictly limited to proxying the request, but it’s the main purpose.
coverImage: /assets/blog/nextjs-as-api-proxy/cover.png
coverImageInfo: Self created
date: "2023-05-09T08:35Z"
source: https://adriankast.notion.site/Next-JS-as-API-Proxy-e3e32bf7aaf14bab827058f773023c00
---

In my current side-project I could not access an API from the client, since the CORS-headers prohibited cross-origin requests. But I still wanted to use the API and display its data in a way that is different than what the vendor provided iframe does. That lead me to using Next.JS as an API Proxy. Actually more or less, since I’m also converting the data with the API route, it is not strictly limited to proxying the request, but it’s the main purpose.

## TLDR;

Next.JS works great as API Proxy, I love the developer experience, for side projects the free tier is quite generous imo and you can check out my side-project here: [https://ff-agent-stats.vercel.app](https://ff-agent-stats.vercel.app/)

## General usage

The ability of [Next.JS](https://nextjs.org/) to function as an API proxy is one of its lesser known features. This means that Next.JS can be used to forward requests to an API endpoint and return the response to the client. This feature is possible due to the [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) that function server executed functions, powered by an express server.

There are several advantages to using Next.JS as an API proxy. Firstly, it allows for easy integration of third-party APIs into a Next.JS application. Instead of having to make requests to the API directly from the client-side code, the API requests can be made from the server-side code, improving privacy and reducing the load on the client-side.

Secondly, Next.JS can be used to cache API responses, improving performance and reducing the load on the API server. By caching responses, Next.JS can avoid making unnecessary requests to the API server, which can be particularly useful when dealing with APIs that have rate limits or are slow to respond.

Lastly, another prominent use case is querying private APIs that need some authentication (like a token) to be accessed. If you would fetch from such APIs directly from your frontend, your token would be visible to anyone inspecting your page with the browser dev tools.

To use Next.JS as an API proxy, simply create an API route and forward the request to the desired API endpoint. The response from the API can then be returned to the client. Here is an example API route that forwards requests to the GitHub API:

```jsx
export default async (req, res) => {
  const { query } = req;
  const url = `https://api.github.com/search/repositories?q=${query.q}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
};
```

In this example, the API route is called `/api/search`. When a GET request is made to this route with a `q` query parameter, the route forwards the request to the GitHub API and returns the response as JSON.

While you might see a lot of examples importing a fetch library such as “node-fetch” or “axios”, Node.JS meanwhile even ships with its own fetch implementation, which further reduces complexity & bundle size, even if that might be less important on the server.

Overall, Next.JS as an API proxy is a powerful feature that can improve the performance, security and privacy of a Next.JS application. By using Next.JS to proxy API requests, developers can easily integrate third-party APIs into their applications and reduce the load on client-side code.

## My side project

I want to display statistics (yearly, monthly, daily) for missions of a voluntary fire department with a little widget on the homepage of the fire department. 

But the vendor of the mission management software only provides an iframe that shows a large table together with a diagram that does not fit my needs. Since there is no CORS-header set that allows using the API from other origins, I came up with the Proxy API as an solution.

This works very well meanwhile, but I had some smaller problems to overcome:

- The timezone on the backend is UTC but I wanted to convert the data already instead of leaving all of the computation on the client. This lead me to converting the dates before comparing them:
    
    ```jsx
    const [strDay, strMonth, strYear]  = date.toLocaleDateString("de-DE", {timeZone: "Europe/Berlin"}).split(".")
    ```
    
    Otherwise the missions might be counted to the wrong day/month/year if it has been another day in UTC. Currently I only provide german timezone conversion, since the API is only active for german fire departments as far as I know.
    
- Since I would like to integrate the UI for displaying the data separate from the Proxy API in an existing homepage, I had to set CORS-headers for the API responses, that allow querying them from any origin. That also allows other devs to use this Proxy API and I also plan on making the UI integration reusable. Luckily for me setting the CORS-headers with Next.JS is [well documented](https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors).

So how does the results look like?

- Play with the API: [https://ff-agent-stats.vercel.app/](https://ff-agent-stats.vercel.app/)
- GitHub repo: https://github.com/adriankast/ff-agent-stats

Next up will be designing and implementing the UI integration (I’m thinking about web-components, media-queries and a smooth animation) so stay tuned and feel free to reach out for any questions 😉
