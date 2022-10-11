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
            <li>this template</li>{/* TODO: add link*/}
            <li><a href="https://www.notion.so/">notion</a> and manual export for blog posts</li>
            <li>
              <a href="https://prismjs.com/">prism</a> for code highlighting
            </li>
          </ul>

          <h1>About me</h1>
          <ul>
            <li>Likes to tinker with tech - (M.Sc. Electrical Engineering & Information Technology)</li>
            <li>second</li>
          </ul>
        </main>
      </Container>
    </>
  );
}
