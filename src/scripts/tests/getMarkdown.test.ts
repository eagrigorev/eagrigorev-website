/* Utils */
import {
  getPostsFromSingleCategory,
  getAllPosts,
  getPage,
  getPostsSlugs,
} from '../getMarkdown';
import { Post } from '@/types/post';

describe('GetPostsFromSingleCategory', () => {
  it('should get the correct posts category', () => {
    expect(
      getPostsFromSingleCategory('Illustrations').find(
        (post: Post) => post.meta.category === 'Illustrations'
      )
    ).toBeTruthy();
  });
});

describe('GetAllPosts', () => {
  it('should get all posts', () => {
    expect(getAllPosts().length).toBe(33);
  });
});

describe('GetPage', () => {
  it('should get the correct page', () => {
    expect(getPage('about.mdx').meta.title).toBe('About');
  });
});

describe('GetPostsSlugs', () => {
  it('should generate the correct slugs amount', () => {
    expect(getPostsSlugs().length).toBe(28);
  });
});
