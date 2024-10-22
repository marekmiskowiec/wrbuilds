// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

const championsCollection = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    author: z.string(),
    role: z.array(z.string()),
    tier: z.string(),
    abilities: z.object({
      ability0: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        video: z.string(),
      }),
      ability1: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        video: z.string(),
      }),
      ability2: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        video: z.string(),
      }),
      ability3: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        video: z.string(),
      }),
      ability4: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        video: z.string(),
      }),
    }),
    builds: z.object({
      items: z.array(z.string()),
      runes: z.array(z.string()),
      summoners: z.array(z.string()),
      skills: z.array(z.string()),
      skillsorder: z.array(z.string()),
    }),
    early_game: z.string(),
    mid_game: z.string(),
    late_game: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  champions: championsCollection,
};
