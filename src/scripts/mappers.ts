/* Utils */
import { PostCategory, PostMeta } from '@/types/post';
import { PageMeta } from '@/types/page';
import { Matter } from '@/types/matter';
import { POST_CATEGORIES } from '@/const/categories';
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
    | typeof POST_CATEGORIES.JOURNAL
    | typeof POST_CATEGORIES.LIBRARY
    | typeof POST_CATEGORIES.WORKS
): string[] => {
  return categories.map((category: PostCategory) => normalize(category));
};
