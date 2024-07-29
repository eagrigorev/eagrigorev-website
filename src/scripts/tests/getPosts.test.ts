/* Utils */
import { getSortedPosts } from '../getPosts';
import { postsSorted } from '@/mocks/postsSorted';

describe('GetSortedPosts', () => {
  it('should sort books correctly', () => {
    expect(getSortedPosts('book', 'Reading this Year')).toStrictEqual(
      postsSorted
    );
  });
});
