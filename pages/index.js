import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Link from "next/link"

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Welcome 👋</title>
        </Head>
        <Container>
        <Link href={`/posts`}>
              <a className="hover:underline">To the posts</a>
            </Link>
          <Intro />
        </Container>
      </Layout>
    </>
  )
}

