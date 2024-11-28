/* Utils */
import { Markdown } from '@/utils/types/markdown';

export const sortPostsDesc = (posts: Markdown[]): Markdown[] => {
  return posts.sort((prev, next) =>
    new Date(prev.meta.dateEdited) < new Date(next.meta.dateEdited) ? 1 : -1
  );
};
