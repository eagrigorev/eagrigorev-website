/* Utils */
import { PostType, PostMeta } from '@/types/post';
import { PostCard } from '@/types/postCard';

export const generateCardOptions = (
  cardType: PostType,
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
        src: `/images/books/${postMeta.featuredImage}`,
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
        src: `/images/books/years-of-reading/${postMeta.featuredImage}`,
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
        src: `/images/featured/${postMeta.featuredImage}`,
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
