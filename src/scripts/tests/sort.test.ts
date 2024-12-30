/* Data */
import postsSorted from '@/data/mocks/postsSorted.json';
import postsUnsorted from '@/data/mocks/postsUnsorted.json';

/* Scripts */
import { sortPostsDesc } from '../sort';

describe('SortPostsDesc', () => {
  it('should sort posts correctly', () => {
    expect(sortPostsDesc(postsUnsorted)).toStrictEqual(postsSorted);
  });
});
