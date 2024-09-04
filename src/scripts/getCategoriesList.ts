/* Utils */
import { mapCategoriesToSlugs } from './utils';
import {
  JOURNAL_CATEGORIES,
  LIBRARY_CATEGORIES,
  WORKS_CATEGORIES,
} from '@/const/categories';

export const categoriesList: string[] = [
  ...mapCategoriesToSlugs(JOURNAL_CATEGORIES),
  ...mapCategoriesToSlugs(LIBRARY_CATEGORIES),
  ...mapCategoriesToSlugs(WORKS_CATEGORIES),
];
