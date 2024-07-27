/* Utils */
import { PostCard, PostMeta } from '@/utils/types';
import { generateCardOptions } from './generateCardOptions';

const postMeta: PostMeta = {
  title: 'Test Title',
  slug: 'test',
  datePublished: 'January 31, 1999',
  dateEdited: 'March 4, 2001',
  postType: 'blogpost',
  category: 'Life Updates',
  featuredImage: 'test.jpg',
  author: undefined,
  image: undefined,
  url: undefined,
  excerpt: 'Test excerpt',
};

const blogpostCard: PostCard = {
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

test('Should generate the proper card object', () => {
  expect(generateCardOptions('blogpost', postMeta)).toStrictEqual(blogpostCard);
});
