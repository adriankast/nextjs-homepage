import Head from "next/head";
import News from "../components/news"
import { PRIMARY_COLOR } from "../lib/constants"

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>Welcome 👋</title>
      </Head>
      <div className="grid justify-center h-full items-center">
        <div className="border-2 font-extrabold font-sans  m-4 border-black">
          <div
            className="border-4 border-black"
            style={{ borderColor: PRIMARY_COLOR }}
          >
            <div className="border-2 border-black p-4 rounded">
              Hi, I share learnings in programming, indie-hacking and sports
              <News />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
