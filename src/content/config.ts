import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    status: z.enum(['active', 'coming-soon']),
    url: z.string().url(),
    github: z.string().url(),
    icon: z.string(),
    color: z.string(),
    stats: z.object({
      projects: z.number(),
      levels: z.number(),
      modules: z.number(),
      conceptGuides: z.number().optional(),
    }),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { courses };
