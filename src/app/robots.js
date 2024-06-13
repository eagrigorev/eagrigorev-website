const robots = () => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://eagrigorev.com/sitemap.xml',
  };
};

export default robots;
