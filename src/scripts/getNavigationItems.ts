/* Utils */
import { NavigationItem } from '@/types/navigation';
import {
  JournalCategories,
  LibraryCategories,
  PostType,
  WorksCategories,
} from '@/types/post';
import {
  JOURNAL_CATEGORIES,
  LIBRARY_CATEGORIES,
  WORKS_CATEGORIES,
} from '@/const/categories';
import { normalize } from './utils';

const getNavigationItems = (postType: PostType): NavigationItem[] => {
  const navigationItems: NavigationItem[] = [];
  const categories =
    postType === 'blogpost'
      ? JOURNAL_CATEGORIES
      : postType === 'library'
        ? LIBRARY_CATEGORIES
        : WORKS_CATEGORIES;
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
  ...getNavigationItems('blogpost'),
];

export const libraryNavItems: NavigationItem[] = [
  {
    title: 'All',
    url: '/library',
  },
  ...getNavigationItems('library'),
];

export const worksNavItems: NavigationItem[] = [
  {
    title: 'All',
    url: '/',
  },
  ...getNavigationItems('project'),
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
