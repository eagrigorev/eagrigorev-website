/* Utils */
import { mapCategoriesToSlugs } from './mappers';
import { POST_CATEGORIES } from '../const/categories';

export const categoriesList: string[] = [
  ...mapCategoriesToSlugs(POST_CATEGORIES.JOURNAL),
  ...mapCategoriesToSlugs(POST_CATEGORIES.LIBRARY),
  ...mapCategoriesToSlugs(POST_CATEGORIES.WORKS),
];
