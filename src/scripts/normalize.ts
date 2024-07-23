/* Utils */
import { PostCategory } from '@/utils/types';

export const normalize = (category: PostCategory): string => {
  return category.toLowerCase().replace(/ /g, '-').replace('&', 'and');
};
