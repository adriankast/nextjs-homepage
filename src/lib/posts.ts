import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export function getCoverImage(post: Post): string {
  return post.data.coverImage ?? `/assets/blog/${post.id}/cover.jpg`;
}

export function getOgImageUrl(post: Post): string {
  return post.data.ogImageUrl ?? getCoverImage(post);
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection("posts");
  // sort posts by date in descending order
  return posts.sort((post1, post2) =>
    post1.data.date > post2.data.date ? -1 : 1
  );
}
