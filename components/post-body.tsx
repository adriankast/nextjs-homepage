import Link from 'next/link'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Link href="/posts">
              <a className="hover:underline m-4 font-bold">&lt; back to all posts</a>
      </Link>
    </div>
  )
}
