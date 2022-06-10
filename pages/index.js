import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>Welcome 👋</title>
      </Head>
      <Container>
        <Intro />
      </Container>
    </>
  );
}
