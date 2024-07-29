/* Utils */
import { PostType, PostMeta } from '@/types/post';
import { PostCard } from '@/types/postCard';
import { URL } from '@/const/url';

export const generateCardOptions = (
  cardType: PostType,
  postMeta: PostMeta
): PostCard => {
  let cardOptions: PostCard;
  if (cardType === 'blogpost') {
    cardOptions = {
      href: postMeta.slug,
      image: {
        src: `${URL.FEATURED_IMG}/${postMeta.featuredImage}`,
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
    };
  }
  if (cardType === 'book') {
    cardOptions = {
      href: postMeta.slug,
      image: {
        src: `${URL.BOOK_IMG}/${postMeta.featuredImage}`,
        alt: `${postMeta.title} by ${postMeta.bookAuthor}`,
        width: 250,
        height: 375,
      },
      content: {
        bookAuthor: postMeta.bookAuthor,
        title: postMeta.title,
      },
    };
  }
  if (cardType === 'booklist') {
    cardOptions = {
      href: postMeta.slug,
      image: {
        src: `${URL.YEARS_OF_READING}/${postMeta.featuredImage}`,
        alt: postMeta.title,
        width: 250,
        height: 375,
      },
      content: {
        title: postMeta.title,
      },
    };
  }
  if (cardType === 'project') {
    cardOptions = {
      href: postMeta.slug,
      image: {
        src: `${URL.FEATURED_IMG}/${postMeta.featuredImage}`,
        alt: postMeta.title,
        width: 440,
        height: 330,
      },
      content: {
        title: postMeta.title,
      },
    };
  }
  return cardOptions;
};
