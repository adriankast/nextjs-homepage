import Head from "next/head";
import Container from "../components/container";
import { getAllProjects } from "../lib/api";
import Image from "../components/Image";

export default function Index({ allProjects }) {
  return (
    <>
      <Head>
        <title>Projects 🛠</title>
      </Head>
      <Container>
        <div className="grid my-20 gap-10 justify-center">
          {allProjects.map((project) => (
            <a href={project.url} target="_blank" title={project.description}>
              <div
                key={project.name}
                className="border border-cyan rounded shadow-sm hover:shadow-xl"
              >
                <h1 className="p-6 flex justify-center">{project.name}</h1>
                <Image
                  className="opacity-50 hover:opacity-80 transition-all"
                  src={`/assets/projects/${project.slug}.jpg`}
                  width={500}
                  height={500}
                  alt={`${project.name} screenshot`}
                />
              </div>
            </a>
          ))}
        </div>
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
