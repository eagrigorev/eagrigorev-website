/* Utils */
import { Markdown, Meta } from '@/utils/types/markdown';

export const sortPostsDesc = (posts: Markdown[]): Markdown[] => {
  return posts.sort((prev, next) =>
    new Date(prev.meta.dateEdited) < new Date(next.meta.dateEdited) ? 1 : -1
  );
};

export const sortBooksDesc = (books: Meta[]): Meta[] => {
  return books.sort((prev, next) =>
    new Date(prev.dateEdited) < new Date(next.dateEdited) ? 1 : -1
  );
};
