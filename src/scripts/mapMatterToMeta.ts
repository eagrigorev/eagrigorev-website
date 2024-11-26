/* Utils */
import { Matter, Meta } from '@/utils/types/markdown';

export const mapMatterToMeta = (data: Matter): Meta => {
  return {
    title: data.title,
    slug: data.slug,
    category: data.category,
    tags: data.tags,
    dateEdited: data.dateEdited,
    datePublished: data.datePublished,
    description: data.description,
    externalLink: data.externalLink,
  };
};
