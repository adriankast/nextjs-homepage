import Head from "next/head";
import Container from "../components/container";
import { getAllProjects } from "../lib/api";
import Image from "../components/Image";

type Project = {
  name: string;
  slug: string;
  url: string;
  type?: string;
  description?: string;
  date: string;
};

export default function Index({ allProjects }: { allProjects: Project[] }) {
  return (
    <>
      <Head>
        <title>Projects 🛠</title>
      </Head>
      <Container>
        <div className="grid my-20 gap-10 justify-center">
          {allProjects
            .sort(sortProjectsNewToOld)
            .map((project) => (
            <a href={project.url} target="_blank" title={project.description} key={project.name}>
              <div
                className="border border-cyan rounded shadow-sm hover:shadow-xl flex flex-col justify-center"
              >
                <h1 className="p-6 flex justify-center">{project.name}</h1>
                <Image
                  className="opacity-50 hover:opacity-80 transition-all"
                  src={`/assets/projects/${project.slug}.jpg`}
                  width={500}
                  height={500}
                  alt={`${project.name} screenshot`}
                />
                <span className="self-end text-center bottom-1 right-1 bg-cyan text-white w-24">{project.type ?? "other"}</span>
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

function sortProjectsNewToOld(a: Project, b: Project): number {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);
  return bDate.getTime() - aDate.getTime();
}
