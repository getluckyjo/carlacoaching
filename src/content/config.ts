import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
 * Content Layer API (Astro 5). Using the glob loader rather than the legacy
 * `type: "content"` shape matters here: under legacy, entry.id carries the file
 * extension ("post.mdx"), which silently produced /journal/post.mdx URLs.
 * With the loader, id IS the slug.
 */
const journal = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      "Field Notes",
      "Programme Design",
      "Leadership",
      "Coaching",
      "Interview",
    ]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
