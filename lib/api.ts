import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'


// POSTS
const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }


    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }

    // fallback values
    if (field === 'coverImage') {
      items[field] = data.coverImage ?? `/assets/blog/${realSlug}/cover.jpg`
    }
    if (field === 'ogImageUrl') {
      items[field] = data.ogImageUrl ?? (data.coverImage ?? `/assets/blog/${realSlug}/cover.jpg`)
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields) as {date?: string})
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}


// PROJECTS
const projectsDirectory = join(process.cwd(), '_projects')

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory)
}

export function getProjectBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, '')
  const fullPath = join(projectsDirectory, `${realSlug}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const projectData = JSON.parse(fileContents)
  projectData.slug = realSlug;

  return projectData
}

export function getAllProjects() {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    // TODO: sort by order criterion
  return projects
}
