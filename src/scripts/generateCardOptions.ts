/* Utils */
import { PostCardType, PostCard, PostMeta } from '@/utils/types';

export const generateCardOptions = (
  cardType: PostCardType,
  postMeta: PostMeta
): PostCard => {
  let cardOptions: PostCard;
  if (cardType === 'blogpost') {
    cardOptions = {
      href: postMeta.slug,
      image: {
        src: `/images/featured/${postMeta.featuredImage}`,
        alt: postMeta.title,
        width: 440,
        height: 330,
      },
      blogpost: {
        title: postMeta.title,
        dateEdited: postMeta.dateEdited,
        category: postMeta.category,
        excerpt: postMeta.excerpt,
      },
    };
  }
  if (cardType === 'book') {
    cardOptions = {
      href: postMeta.url,
      image: {
        src: `/images/books/${postMeta.image}`,
        alt: `${postMeta.title} by ${postMeta.author}`,
        width: 250,
        height: 375,
      },
      book: {
        author: postMeta.author,
        title: postMeta.title,
      },
    };
  }
  if (cardType === 'booklist') {
    cardOptions = {
      href: postMeta.slug,
      image: {
        src: `/images/books/years-of-reading/${postMeta.featuredImage}`,
        alt: postMeta.title,
        width: 250,
        height: 375,
      },
      booklist: {
        title: postMeta.title,
      },
    };
  }
  if (cardType === 'project') {
    cardOptions = {
      href: postMeta.slug,
      image: {
        src: `/images/featured/${postMeta.featuredImage}`,
        alt: postMeta.title,
        width: 440,
        height: 330,
      },
      project: {
        title: postMeta.title,
      },
    };
  }
  return cardOptions;
};
