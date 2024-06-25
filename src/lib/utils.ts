import type { CollectionEntry } from 'astro:content';
import { siteMetadata } from '@lib/config';

export const getPublishedPosts = (
  allPosts: CollectionEntry<'blog'>[],
) => {
  return allPosts
    .filter((post) => {
      if (import.meta.env.PROD) {
        return !post.data.draft;
      }

      return siteMetadata.devMode.showDraftPages ? true : !post.data.draft;
    })
};

// helper function to check if date1 is before date2
export const isDateBefore = (date1: Date, date2: Date) =>
  date1.getTime() < date2.getTime();