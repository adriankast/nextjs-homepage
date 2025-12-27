import Head from "next/head";
import Container from "../components/container";

export default function About() {
  return (
    <>
      <Head>
        <title>About 🧐</title>
      </Head>
      <Container>
        <div className="flex justify-center">
          <main className="w-fit">
            <h1 className="pt-4">this website:</h1>
            <ul>
              <li>
                built with <a href="https://nextjs.org/">Next.js</a>
              </li>
              <li>
                <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter">
                  this template
                </a>
              </li>
              <li>
                <a href="https://www.notion.so/">notion</a> and manual export
                for blog posts
              </li>
              <li>
                <a href="https://prismjs.com/">prism</a> for code highlighting
              </li>
              <li>
                <a href="https://primer.style/octicons/">Octicons</a> as icon
                library
              </li>
              <li>
                lives{" "}
                <a href="https://github.com/adriankast/nextjs-homepage">here</a>
              </li>
              <li>
                automatically deployed on git push, read more in{" "}
                <a href="https://adriankast.de/posts/website-publishing-workflow/">
                  this post
                </a>
              </li>
            </ul>

            <h1 className="pt-4">me (I):</h1>
            <ul>
              <li>Am a voluntary firefighter 👨‍🚒</li>
              <li>
                Work as Software Engineer at{" "}
                <a href="https://www.msg.group/" target="_blank">
                  msg
                </a>{" "}
                👨‍💻
              </li>
              <li>Recently mostly write TypeScript &amp; Java 💻</li>
              <li>Am interested in company founding &amp; indie hacking 🏭</li>
              <li>
                Like to tinker with tech - (Electrical Engineering &amp; IT{" "}
                <a href="https://www.tum.de/" target="_blank">
                  @TUM
                </a>
                ) 🎓
              </li>
              <li>
                Like biking, running, skiing, sailing, fitness, sometimes
                tennis, ... 🏃‍♂️
              </li>
              <li>
                Would love to hear from you, contact methods are at the site
                bottom 👇
              </li>
            </ul>
          </main>
        </div>
      </Container>
    </>
  );
}
