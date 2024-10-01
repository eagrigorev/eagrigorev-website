/* Utils */
import {
  Post,
  PostCategory,
  JournalCategories,
  LibraryCategories,
  WorksCategories,
} from '@/types/post';

import {
  JOURNAL_CATEGORIES,
  LIBRARY_CATEGORIES,
  WORKS_CATEGORIES,
} from '@/const/categories';
import { PostsAmount } from '@/types/postsAmount';

export const normalize = (category: PostCategory): string => {
  return category.toLowerCase().replace(/ /g, '-').replace('&', 'and');
};

export const sortPostsDesc = (posts: Post[]): Post[] => {
  return posts.sort((prev, next) => {
    if (new Date(prev.meta.dateEdited) < new Date(next.meta.dateEdited)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const calculatePostsToShowAndLoad = (posts: Post[]): PostsAmount => {
  let postsAmount: PostsAmount;
  const postCategory = posts[0].meta.category;
  if (
    JOURNAL_CATEGORIES.find(
      (category: JournalCategories) => category === postCategory
    ) ||
    WORKS_CATEGORIES.find(
      (category: WorksCategories) => category === postCategory
    )
  ) {
    postsAmount = {
      grid: {
        toShow: 6,
        toLoad: 3,
      },
      related: {
        toShow: 3,
        toLoad: 3,
      },
    };
  }
  if (
    LIBRARY_CATEGORIES.find(
      (category: LibraryCategories) => category === postCategory
    )
  ) {
    postsAmount = {
      grid: {
        toShow: 12,
        toLoad: 6,
      },
      related: {
        toShow: 6,
        toLoad: 6,
      },
    };
  }
  return postsAmount;
};
