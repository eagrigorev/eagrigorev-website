/* Scripts */
import getCategoriesList from './getCategoriesList';
import { formatSlug } from './format';

/* Utils */
import { Matter, PageMeta, Post, PostMeta } from '@/utils/types/markdown';
import { Slug } from '@/utils/types/common';

export const mapMatterDataToPostMeta = (data: Matter): PostMeta => {
  return {
    title: data.title,
    slug: data.slug,
    type: data.type,
    category: data.category,
    description: data.description,
    datePublished: data.datePublished,
    dateEdited: data.dateEdited,
    externalLink: data.externalLink,
  };
};

export const mapMatterDataToPageMeta = (data: Matter): PageMeta => {
  return {
    title: data.title,
    slug: data.slug,
  };
};

export const mapPostsToSlugs = (posts: Post[]): Slug[] => {
  return posts.map((post: Post) => ({
    slug: post.meta.slug,
  }));
};

export const mapCategoriesToSlugs = (): Slug[] => {
  const categories = getCategoriesList();
  return categories.map((category) => ({
    slug: formatSlug(category),
  }));
};

export const mapLibraryBooksToSlugs = (books: Post[]): Slug[] => {
  return books.map((book: Post) => ({
    slug: book.meta.slug,
  }));
};
