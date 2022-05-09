import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism';

// TODO: make code highlighting work
export default async function markdownToHtml(markdown) {
  const result = await remark().use(prism).use(html).process(markdown)
  return result.toString()
}
