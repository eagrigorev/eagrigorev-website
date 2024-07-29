/* Utils */
import { normalize, sortPostsDesc } from '../utils';
import { postsSorted } from '@/mocks/postsSorted';
import { postsUnsorted } from '@/mocks/postsUnsorted';
import { normalizedCategory, notNormalizedcategory } from '@/mocks/category';

describe('Normalize', () => {
  it('should remove ampersands and convert to lower case', () => {
    expect(normalize(notNormalizedcategory)).toBe(normalizedCategory);
  });
});

describe('SortPostsDesc', () => {
  it('should sort posts correctly', () => {
    expect(sortPostsDesc(postsUnsorted)).toStrictEqual(postsSorted);
  });
});
