/* Utils */
import { PostCategory } from '@/utils/types';
import { normalize } from './normalize';

const category: PostCategory = 'Music & Tabs';

test('Should remove ampersands and convert to lower case', () => {
  expect(normalize(category)).toBe('music-and-tabs');
});
