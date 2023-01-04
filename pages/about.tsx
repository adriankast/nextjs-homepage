import Head from "next/head";
import Container from "../components/container";

export default function About() {
  return (
    <>
      <Head>
        <title>About 🧐</title>
      </Head>
      <Container>
        <main>
          <h1>About</h1>
            <h2 className="pt-4">this website:</h2>
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
            </ul>

            <h2 className="pt-4">me (I):</h2>
            <ul>
              <li>
                Like to tinker with tech - (M.Sc. Electrical Engineering &amp;
                Information Technology)
              </li>
              <li>
                Work as Software Engineer at{" "}
                <a href="https://www.msg.group/">msg</a>
              </li>
              <li>Love my fiancée</li>
              <li>Am a voluntary firefighter</li>
              <li>Am interested in company founding and indie hacking</li>
              <li>
                Like many sports, e.g., biking, running, skiing, sailing,
                fitness, sometimes tennis, ...
              </li>
              <li>
                Would love to hear from you, contact methods are at the site
                bottom 👇
              </li>
            </ul>
        </main>
      </Container>
    </>
  );
}
