/* Utils */
import {
  PostMeta,
  JournalCategories,
  LibraryCategories,
  WorksCategories,
} from '@/types/post';
import { PostCard } from '@/types/postCard';
import { URL } from '@/const/url';
import { POST_CATEGORIES } from '@/const/categories';

export const generateCardOptions = (postMeta: PostMeta): PostCard => {
  let cardOptions: PostCard;
  if (
    POST_CATEGORIES.LIBRARY.find(
      (category: LibraryCategories) => category === postMeta.category
    )
  ) {
    cardOptions = {
      href: postMeta.slug,
      image: {
        src: `/${URL.FEATURED_IMG}/${postMeta.featuredImage}`,
        alt: `${postMeta.title} by ${postMeta.bookAuthor}`,
        width: 250,
        height: 375,
      },
      content: {
        bookAuthor: postMeta.bookAuthor,
        title: postMeta.title,
      },
      style: 'small',
    };
  } else {
    cardOptions = {
      href: postMeta.slug,
      image: {
        src: `/${URL.FEATURED_IMG}/${postMeta.featuredImage}`,
        alt: postMeta.title,
        width: 440,
        height: 330,
      },
      content: {
        title: postMeta.title,
        dateEdited: postMeta.dateEdited,
        category: postMeta.category,
        excerpt: postMeta.excerpt,
      },
      style: 'default-with-excerpt',
    };
  }
  return cardOptions;
};
