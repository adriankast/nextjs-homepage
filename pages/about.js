import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Link from "next/link"

export default function Index() {
  return (
    <>
        <Head>
          <title>About 👋</title>
        </Head>
        <Container>
        <div className='flex py-4 justify-end'>
          <div>
            <Link href={`/about`} className="underline">
              About
            </Link>
            <Link href={`/posts`}>
              Blog
            </Link>
          </div>
        </div>
        About this website:
        - built with nextjs
        - this template
        - notion for posts
        ...
          <Intro />
        </Container>
    </>
  )
}

