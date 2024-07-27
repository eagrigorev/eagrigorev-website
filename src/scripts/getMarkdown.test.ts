/* Utils */
import {
  getPostsFromSingleCategory,
  getAllPosts,
  getPage,
  getPostsSlugs,
} from './getMarkdown';
import { Post } from '@/utils/types';

test('Should get the correct posts category', () => {
  expect(
    getPostsFromSingleCategory('Illustrations').find(
      (post: Post) => post.meta.category === 'Illustrations'
    )
  ).toBeTruthy();
});
test('Should get all posts', () => {
  expect(getAllPosts().length).toBe(34);
});
test('Should get the correct page', () => {
  expect(getPage('about.mdx').meta.title).toBe('About');
});
test('Should generate the correct slugs amount', () => {
  expect(getPostsSlugs().length).toBe(29);
});
