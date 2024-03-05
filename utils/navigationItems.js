export const categories = [
  {
    title: 'Music',
    url: '/music',
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
];

export const mobileNavigation = [
  {
    title: 'Menu',
    url: '#',
    submenu: [
      {
        title: 'Home',
        url: '/',
      },
      ...categories,
    ],
  },
];

export const desktopCategories = [...categories];

export const mobileCategories = [
  {
    title: 'Categories',
    url: '#',
    submenu: [...categories],
  },
];
