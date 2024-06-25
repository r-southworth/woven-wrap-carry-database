import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean(),
  }),
});
const carries = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    wrapSize: z.string(),
    altName: z.string().optional(),
    position: z.object({
      front: z.object({
        preTied: z.boolean(),
      }),
      back: z.object({
        carryHeight: z.string(),
        startingPosition: z.string(),
      }),
    }),

    carryQualities: z.object({
      nursingFriendly: z.boolean(),
      beginnerFriendly: z.boolean(),
      leanerFriendly: z.boolean(),
      heatFriendly: z.boolean(),
      experienceRecommended: z.boolean(),
    }),

    childSize: z.object({
      newborn: z.boolean(),
      infant: z.boolean(),
      toddler: z.boolean(),
      bigKid: z.boolean(),
    }),

    weightDistribution: z.object({
      upperBack: z.boolean(),
      lowerBack: z.boolean(),
      shoulders: z.boolean(),
      oneShoulder: z.boolean(),
      chest: z.boolean(),
      midBack: z.boolean(),
      waist: z.boolean(),
      hips: z.boolean(),
    }),
    tutorial: z.string(),
    popularizedBy: z.string(),
  }),
});

export const collections = { blog };
