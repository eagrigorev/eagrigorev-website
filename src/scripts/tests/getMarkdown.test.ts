/* Utils */
import {
  getJournalPostsFromSingleCategory,
  getAllPosts,
  getPage,
  getPostsSlugs,
} from '../getMarkdown';
import { Post } from '@/types/post';
import { POSTS_AMOUNT, SLUGS_AMOUNT } from '@/const/global';

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
    expect(getAllPosts().length).toBe(POSTS_AMOUNT);
  });
});

describe('GetPage', () => {
  it('should get the correct page', () => {
    expect(getPage('about.mdx').meta.title).toBe('About');
  });
});

describe('GetPostsSlugs', () => {
  it('should generate the correct slugs amount', () => {
    expect(getPostsSlugs().length).toBe(SLUGS_AMOUNT);
  });
});
