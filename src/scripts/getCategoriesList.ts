/* Utils */
import {
  JOURNAL_SLUGS,
  LIBRARY_SLUGS,
  WORKS_SLUGS,
} from '@/const/categoriesSlugs';

export const categoriesList: string[] = [
  ...JOURNAL_SLUGS,
  ...LIBRARY_SLUGS,
  ...WORKS_SLUGS,
];
