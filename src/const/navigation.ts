/* Utils */
import { NavigationItem } from '@/utils/types';

export const TOP_NAVIGATION: NavigationItem[] = [
  {
    title: 'Portfolio',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Now',
    url: '/now',
  },
  // {
  //   title: 'Journal',
  //   url: '/journal',
  // },
  {
    title: 'Library',
    url: '/reading-this-year',
  },
];

export const JOURNAL_SUB_NAVIGATION: NavigationItem[] = [
  {
    title: 'All',
    url: '/journal',
  },
  {
    title: 'Life Updates',
    url: '/life-updates',
  },
];

export const PROJECTS_SUB_NAVIGATION: NavigationItem[] = [
  {
    title: 'All',
    url: '/',
  },
  {
    title: 'Illustrations',
    url: '/illustrations',
  },
  {
    title: 'Music & Tabs',
    url: '/music-and-tabs',
  },
];

export const LIBRARY_SUB_NAVIGATION: NavigationItem[] = [
  {
    title: 'Reading this Year',
    url: '/reading-this-year',
  },
  {
    title: 'Want to Read',
    url: '/want-to-read',
  },
  {
    title: 'Years of Reading',
    url: '/years-of-reading',
  },
];

export const NOT_FOUND_SUB_NAVIGATION: NavigationItem[] = [
  {
    title: 'Check Latest Projects',
    url: '/',
  },
  {
    title: 'Read the Journal',
    url: '/journal',
  },
];
