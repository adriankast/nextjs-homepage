import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Link from "next/link"

export default function Index ( { allPosts } )
{
  return (
    <>
      <Layout>
        <Head>
          <title>Welcome 👋</title>
        </Head>
        <Container>
          <header>
            <nav>
              <div className='flex py-4 justify-end gap-4'>
                <div>
                  <Link href={`/about`}>
                    About
                  </Link>
                </div>
                <div>
                  <Link href={`/posts`}>
                    Blog
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          <Intro />
        </Container>
      </Layout>
    </>
  )
}

