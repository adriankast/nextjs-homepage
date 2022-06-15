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
          <h1>About this website</h1>
          <ul>
            <li>
              built with <a href="https://nextjs.org/">Next.js</a>
            </li>
            <li>this template</li>
            <li>notion and manual export for blog posts</li>
            <li>
              <a href="https://prismjs.com/">prism</a> for code highlighting
            </li>
          </ul>

          <h1>About me</h1>
          <ul>
            <li>first</li>
            <li>second</li>
          </ul>
        </main>
      </Container>
    </>
  );
}
