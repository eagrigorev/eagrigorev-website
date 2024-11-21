/* Utils */
import { getAllPosts } from '@/scripts/getMarkdown';
import { sortPostsDesc } from './utils';
import {
  Post,
  PostCategory,
  JournalCategories,
  LibraryCategories,
  WorksCategories,
  ParentCategories,
} from '../types/post';
import { POST_CATEGORIES } from '../../DUMP/const/categories';

export const getSortedPosts = (
  category: PostCategory | ParentCategories,
  postToExclude = ''
): Post[] => {
  const allPosts: Post[] = getAllPosts();
  let sortedPosts: Post[] = [];
  if (category === 'Journal') {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post: Post) => {
        return POST_CATEGORIES.JOURNAL.find(
          (category: JournalCategories) => category === post.meta.category
        );
      })
    );
  } else if (category === 'Library') {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post: Post) => {
        return POST_CATEGORIES.LIBRARY.find(
          (category: LibraryCategories) => category === post.meta.category
        );
      })
    );
  } else if (category === 'Works') {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post: Post) => {
        return POST_CATEGORIES.WORKS.find(
          (category: WorksCategories) => category === post.meta.category
        );
      })
    );
  } else {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post: Post) => {
        return (
          post.meta.category === category && post.meta.title !== postToExclude
        );
      })
    );
  }
  return sortedPosts;
};
