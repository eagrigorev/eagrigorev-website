/* Utils */
import { NavigationItem } from '@/types/navigationItem';
import {
  JournalCategories,
  LibraryCategories,
  WorksCategories,
  ParentCategories,
} from '@/types/post';
import { POST_CATEGORIES } from '@/const/categories';
import { normalize } from './utils';

const getNavigationItems = (
  parentCategory: ParentCategories
): NavigationItem[] => {
  const navigationItems: NavigationItem[] = [];
  const categories =
    parentCategory === 'Journal'
      ? POST_CATEGORIES.JOURNAL
      : parentCategory === 'Library'
        ? POST_CATEGORIES.LIBRARY
        : POST_CATEGORIES.WORKS;
  categories.forEach(
    (category: JournalCategories | LibraryCategories | WorksCategories) => {
      return navigationItems.push({
        title: category,
        url: normalize(category),
      });
    }
  );
  return navigationItems;
};

export const journalNavItems: NavigationItem[] = [
  {
    title: 'All',
    url: '/journal',
  },
  ...getNavigationItems('Journal'),
];

export const libraryNavItems: NavigationItem[] = [
  {
    title: 'All',
    url: '/library',
  },
  ...getNavigationItems('Library'),
];

export const worksNavItems: NavigationItem[] = [
  {
    title: 'All',
    url: '/',
  },
  ...getNavigationItems('Works'),
];

export const topNavItems: NavigationItem[] = [
  {
    title: 'Works',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Journal',
    url: '/journal',
  },
];

export const miscNavItems: NavigationItem[] = [
  {
    title: 'Check Latest Works',
    url: '/',
  },
  {
    title: 'Read the Journal',
    url: '/journal',
  },
];
