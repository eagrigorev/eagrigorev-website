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

export const pages = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/',
  },
  {
    title: 'Now',
    url: '/',
  },
  {
    title: 'Shop',
    url: '/',
  },
  {
    title: 'Colophon',
    url: '/',
  },
  {
    title: 'Library',
    url: '/',
  },
];

export const socialIcons = [
  {
    title: 'Ig.',
    url: 'https://www.instagram.com/eagrigorev',
    icon: '',
  },
  {
    title: 'Bc.',
    url: 'https://borealheights.bandcamp.com',
    icon: '',
  },
  {
    title: 'Gh.',
    url: 'https://github.com/eagrigorev',
    icon: '',
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
