export const categories = [
  {
    title: 'Illustrations',
    url: '/',
  },
  {
    title: 'Music & Tabs',
    url: '/music-and-tabs',
  },
  {
    title: 'Projects',
    url: '/',
  },
  {
    title: 'Journal',
    url: '/',
  },
];

export const desktopNavigation = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Categories',
    url: '#',
    submenu: categories,
  },
  {
    title: 'About',
    url: '/',
  },
  {
    title: 'Now',
    url: '/',
  },
];

export const mobileNavigation = [
  {
    title: 'Navigation',
    url: '#',
    submenu: [
      {
        title: 'Home',
        url: '/',
      },
      ...categories,
      {
        title: 'About',
        url: '/',
      },
      {
        title: 'Now',
        url: '/',
      },
    ],
  },
];

export const desktopCategories = [...categories];

export const mobileCategories = [
  {
    title: 'Select Category',
    url: '#',
    submenu: [...categories],
  },
];
