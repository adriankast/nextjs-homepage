import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism';

// TODO: images
export default async function markdownToHtml(markdown) {
  const result = await remark().use(html, {sanitize: false}).use(prism, {transformInlineCode: true}).process(markdown)
  const htmlString = result.toString();
  return htmlString
}
