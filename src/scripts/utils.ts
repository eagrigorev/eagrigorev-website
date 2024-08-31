/* Utils */
import { Post, PostCategory, PostMeta } from '@/types/post';
import { PageMeta } from '@/types/page';
import { Matter } from '@/types/matter';

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
    type: data.type,
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
