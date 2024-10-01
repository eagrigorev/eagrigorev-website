/* Utils */
import { PostCategory, PostMeta } from '@/types/post';
import { PageMeta } from '@/types/page';
import { Matter } from '@/types/matter';
import {
  JOURNAL_CATEGORIES,
  LIBRARY_CATEGORIES,
  WORKS_CATEGORIES,
} from '@/const/categories';
import { normalize } from './utils';

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
