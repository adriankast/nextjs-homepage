import Head from "next/head";
import Link from "next/link"

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>Welcome 👋</title>
      </Head>
      <div className='grid justify-center h-full items-center'>
        <div className='font-bold border border-black'>
          <span className='absolute -m-4'>📢</span>
          <span>Welcome to my new website!</span><br/>
          <span>Read more about it <Link href="/about"><a className='underline hover:underline-offset-2'>here</a></Link></span>
        </div>
      </div>
    </>
  );
}
