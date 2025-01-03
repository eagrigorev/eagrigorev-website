/* Scripts */
import {
  getPostsFromSingleCategory,
  getAllPosts,
  getPage,
  getPostsSlugs,
} from '../getMarkdown';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

describe('GetPostsFromSingleCategory', () => {
  it('should get the correct posts category', () => {
    expect(
      getPostsFromSingleCategory('music').find(
        (post: Markdown) => post.meta.category === 'Music'
      )
    ).toBeTruthy();
  });
});

describe('GetAllPosts', () => {
  it('should get all posts', () => {
    expect(getAllPosts().length).toBe(29);
  });
});

describe('GetPage', () => {
  it('should get the correct page', () => {
    expect(getPage('about.mdx').meta.title).toBe('About');
  });
});

describe('GetPostsSlugs', () => {
  it('should generate the correct slugs amount', () => {
    expect(getPostsSlugs().length).toBe(33);
  });
});
