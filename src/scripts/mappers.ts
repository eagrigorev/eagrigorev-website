/* Utils */
import { PostCategory } from '@/types/post';
import { Matter } from '@/types/matter';
import { POST_CATEGORIES } from '@/const/categories';
import { normalize } from './utils';
import { Meta } from '@/utils/types/markdown';

export const mapMatterDataToMarkdownMeta = (data: Matter): Meta => {
  return {
    title: data.title,
    slug: data.slug,
    type: data.type,
    category: data.category,
    dateEdited: data.dateEdited,
    datePublished: data.datePublished,
    description: data.description,
    externalLink: data.externalLink,
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
