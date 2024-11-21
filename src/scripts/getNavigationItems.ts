/* Utils */
import {
  NavigationItem,
  NavigationItems,
} from '../../DUMP/types/navigationItem';
import {
  JournalCategories,
  LibraryCategories,
  WorksCategories,
  ParentCategories,
} from '../../DUMP/types/post';
import { POST_CATEGORIES } from '../const/categories';
import { normalize } from './utils';
import { STATIC_NAVIGATION_ITEMS } from '../const/staticNavigationItems';

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

export const navigationItems: NavigationItems = {
  journal: [
    {
      title: 'All',
      url: '/journal',
    },
    ...getNavigationItems('Journal'),
  ],
  library: [
    {
      title: 'All',
      url: '/library',
    },
    ...getNavigationItems('Library'),
  ],
  works: [
    {
      title: 'All',
      url: '/',
    },
    ...getNavigationItems('Works'),
  ],
  top: STATIC_NAVIGATION_ITEMS.TOP,
  error: STATIC_NAVIGATION_ITEMS.ERROR,
};
