/* Utils */
import { NavigationItem } from '@/types/navigation';

export const TOP_NAVIGATION: NavigationItem[] = [
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

export const JOURNAL_SUB_NAVIGATION: NavigationItem[] = [
  {
    title: 'All',
    url: '/journal',
  },
  {
    title: 'Hobbies',
    url: '/hobbies',
  },
  {
    title: 'Notes',
    url: '/notes',
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
    title: 'All',
    url: '/library',
  },
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
    title: 'Check Latest Works',
    url: '/',
  },
  {
    title: 'Read the Journal',
    url: '/journal',
  },
];
