/* Utils */
import { POST_CATEGORIES } from '@/const/categories';

export type JournalCategories = (typeof POST_CATEGORIES.JOURNAL)[number];
export type LibraryCategories = (typeof POST_CATEGORIES.LIBRARY)[number];
export type WorksCategories = (typeof POST_CATEGORIES.WORKS)[number];
export type ParentCategories = (typeof POST_CATEGORIES.PARENT)[number];

export type PostCategory =
  | WorksCategories
  | JournalCategories
  | LibraryCategories;

export interface PostMeta {
  title: string;
  slug: string;
  category: PostCategory;
  datePublished?: string;
  dateEdited: string;
  featuredImage: string;
  bookAuthor?: string;
  excerpt?: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}
