/* Scripts */
import { getAllPosts } from './getMarkdown';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

export const generateTagsCloud = (): string[] => {
  const allPosts = getAllPosts().filter(
    (post: Markdown) => post.meta.category !== 'Library'
  );
  let allTags: string[] = [];
  allPosts.forEach((post: Markdown) => {
    allTags.push(...post.meta.tags);
  });
  return allTags.filter(
    (value, index, array) => array.indexOf(value) === index
  );
};
