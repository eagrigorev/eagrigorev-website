/* Utils */
import { getSortedPosts } from '../getPosts';
import { postsSorted } from '../../../DUMP/mocks/postsSorted';

describe('GetSortedPosts', () => {
  it('should sort books correctly', () => {
    expect(getSortedPosts('Reading this Year')).toStrictEqual(postsSorted);
  });
});
