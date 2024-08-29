/* Utils */
import {
  getJournalPostsFromSingleCategory,
  getAllPosts,
  getPage,
  getPostsSlugs,
} from '../getMarkdown';
import { Post } from '@/types/post';

describe('GetJournalPostsFromSingleCategory', () => {
  it('should get the correct posts category', () => {
    expect(
      getJournalPostsFromSingleCategory('Notes').find(
        (post: Post) => post.meta.category === 'Notes'
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
