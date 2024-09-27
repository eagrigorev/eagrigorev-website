/* Utils */
import {
  PostMeta,
  JournalCategories,
  LibraryCategories,
  WorksCategories,
} from '@/types/post';
import { PostCard } from '@/types/postCard';
import { URL } from '@/const/url';
import {
  JOURNAL_CATEGORIES,
  LIBRARY_CATEGORIES,
  WORKS_CATEGORIES,
} from '@/const/categories';

export const generateCardOptions = (postMeta: PostMeta): PostCard => {
  let cardOptions: PostCard;
  if (
    JOURNAL_CATEGORIES.find(
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
    LIBRARY_CATEGORIES.find(
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
    WORKS_CATEGORIES.find(
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
