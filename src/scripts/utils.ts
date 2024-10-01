/* Utils */
import {
  Post,
  PostCategory,
  PostMeta,
  JournalCategories,
  LibraryCategories,
  WorksCategories,
} from '@/types/post';
import { PageMeta } from '@/types/page';
import { Matter } from '@/types/matter';
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

export const mapMatterDataToPostMeta = (data: Matter): PostMeta => {
  return {
    title: data.title,
    slug: data.slug,
    category: data.category,
    datePublished: data.datePublished,
    dateEdited: data.dateEdited,
    featuredImage: data.featuredImage,
    bookAuthor: data.bookAuthor,
    excerpt: data.excerpt,
    tags: data.tags,
  };
};

export const mapMatterDataToPageMeta = (data: Matter): PageMeta => {
  return {
    title: data.title,
    slug: data.slug,
  };
};

export const mapCategoriesToSlugs = (
  categories:
    | typeof JOURNAL_CATEGORIES
    | typeof LIBRARY_CATEGORIES
    | typeof WORKS_CATEGORIES
): string[] => {
  return categories.map((category: PostCategory) => normalize(category));
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
