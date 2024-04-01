import Head from "next/head";
import News from "../components/news"
import { PRIMARY_COLOR } from "../lib/constants"
import { useEffect, useRef } from "react"

const removeCssProps = (ref) => {
  if(ref.current) {
      ref.current.classList.remove("opacity-0");
      ref.current.classList.remove("-ml-96");
  }
}

export default function Index() {
  const contentBoxRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      removeCssProps(contentBoxRef)
    }, 100);
  }, [])

  return (
    <>
      <Head>
        <title>Welcome 👋</title>
      </Head>
      <div className="grid justify-center h-full items-center">
        <div ref={contentBoxRef} className={`border-2 font-extrabold font-sans  m-4 border-black -ml-96 opacity-0 `} style={{transition: "ease-in-out 2s opacity,ease-in-out 2s margin-left"}}>
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
