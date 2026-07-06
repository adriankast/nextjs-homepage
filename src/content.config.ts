import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./_posts" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.string(),
    coverImage: z.string().optional(),
    coverImageInfo: z.string().optional(),
    coverImageUrl: z.string().optional(),
    ogImageUrl: z.string().optional(),
    source: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./_projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    url: z.string(),
    date: z.string(),
    type: z.string().optional(),
  }),
});

export const collections = { posts, projects };
