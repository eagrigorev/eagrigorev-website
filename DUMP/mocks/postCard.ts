/* Utils */
import { PostCard } from '../types/postCard';
import { postMeta } from './postMeta';
import { URL } from '../const/url';

export const postCard: PostCard = {
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
