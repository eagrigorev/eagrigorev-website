/* Utils */
import { PostMeta } from './types';

export const markdownDataToPostMetaMapper = (data: {
  [key: string]: any;
}): PostMeta => {
  return {
    title: data.title,
    slug: data.slug,
    datePublished: data.datePublished,
    dateEdited: data.dateEdited,
    postType: data.postType,
    category: data.category,
    featuredImage: data.featuredImage,
    author: data.author,
    image: data.image,
    url: data.url,
    excerpt: data.excerpt,
  };
};
