const categories = [
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

export const topNavigation = [
  {
    title: 'Navigation',
    url: '#',
    isDesktop: false,
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
  {
    title: 'Home',
    url: '/',
    isDesktop: true,
  },
  {
    title: 'Categories',
    url: '#',
    isDesktop: true,
    submenu: categories,
  },
  {
    title: 'About',
    url: '/',
    isDesktop: true,
  },
  {
    title: 'Now',
    url: '/',
    isDesktop: true,
  },
];

export const categoriesNavigation = [
  {
    title: 'Select Category',
    url: '#',
    isDesktop: false,
    submenu: [...categories],
  },
  ...categories.map((item) => ({ ...item, isDesktop: true })),
];
