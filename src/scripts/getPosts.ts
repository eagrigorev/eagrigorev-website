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
} from '@/types/post';
import {
  JOURNAL_CATEGORIES,
  LIBRARY_CATEGORIES,
  WORKS_CATEGORIES,
} from '@/const/categories';

export const getSortedPosts = (
  category: PostCategory | ParentCategories,
  postToExclude = ''
): Post[] => {
  const allPosts: Post[] = getAllPosts();
  let sortedPosts: Post[] = [];
  if (category === 'Journal') {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post: Post) => {
        return JOURNAL_CATEGORIES.find(
          (category: JournalCategories) => category === post.meta.category
        );
      })
    );
  } else if (category === 'Library') {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post: Post) => {
        return LIBRARY_CATEGORIES.find(
          (category: LibraryCategories) => category === post.meta.category
        );
      })
    );
  } else if (category === 'Works') {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post: Post) => {
        return WORKS_CATEGORIES.find(
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
