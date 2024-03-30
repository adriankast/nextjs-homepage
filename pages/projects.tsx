import Head from "next/head";
import Container from "../components/container";
import { getAllProjects } from "../lib/api";

export default function Index({ allProjects }) {

  return (
    <>
        <Head>
          <title>Projects 🛠</title>
        </Head>
        <Container>
          {allProjects.map(project => <div>{project.name}</div>)}
        </Container>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects();

  return {
    props: { allProjects },
  };
}
