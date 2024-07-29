/* Utils */
import { PostCard } from '@/types/postCard';
import { postMeta } from './postMeta';

export const postCard: PostCard = {
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
