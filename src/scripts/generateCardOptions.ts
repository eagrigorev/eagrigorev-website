/* Utils */
import {
  PostMeta,
  JournalCategories,
  LibraryCategories,
  WorksCategories,
} from '../../DUMP/types/post';
import { PostCard } from '../../DUMP/types/postCard';
import { URL } from '../const/url';
import { POST_CATEGORIES } from '../const/categories';

export const generateCardOptions = (postMeta: PostMeta): PostCard => {
  let cardOptions: PostCard;
  if (
    POST_CATEGORIES.JOURNAL.find(
      (category: JournalCategories) => category === postMeta.category
    )
  ) {
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
  }
  if (
    POST_CATEGORIES.WORKS.find(
      (category: WorksCategories) => category === postMeta.category
    )
  ) {
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
      },
      style: 'default',
    };
  }
  return cardOptions;
};
