import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import PostFooter from '../../components/post-footer'

export default function Post ( { post } )
{
  const router = useRouter()
  if ( !router.isFallback && !post?.slug )
  {
    return <ErrorPage statusCode={404} />
  }
  return ( 
  <>
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Adrian's Blog
                </title>
                <meta key={"og:image"} property="og:image" content={post.ogImageUrl} />
                <link href="/prism/prism.css" rel="stylesheet" />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                coverImageInfo={post.coverImageInfo}
                coverImageUrl={post.coverImageUrl}
              />
              <PostBody content={post.content} />
              <PostFooter source={post.source} />
            </article>
          </>
        )}
      </Container>
    </Layout>
    <script src="/prism/prism.js"></script>
  </>
  )
}

const postMetaData = [
  'title',
  'date',
  'slug',
  'author',
  'content',
  'ogImageUrl',
  'coverImage',
  'coverImageInfo',
  'coverImageUrl',
  'source'
];

type PostMetaDataKeysT = 
'title'
|'date'
|'slug'
|'author'
|'content'
|'ogImageUrl'
|'coverImage'
|'coverImageInfo'
|'coverImageUrl'
|'source'


type PostMetaDataT = {
  [key in PostMetaDataKeysT]: string | undefined;
}

export async function getStaticProps ( { params } )
{
  const post: PostMetaDataT = getPostBySlug( params.slug, postMetaData) as PostMetaDataT;
  const content = await markdownToHtml( post.content || '' )

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

type PostsT = {"slug": string | undefined}[]

export async function getStaticPaths ()
{
  const posts = getAllPosts( [ 'slug' ] ) as PostsT;

  return {
    paths: posts.map( ( post ) =>
    {
      return {
        params: {
          slug: post.slug,
        },
      }
    } ),
    fallback: false,
  }
}
