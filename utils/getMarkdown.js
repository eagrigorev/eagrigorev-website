import fs from 'fs';
//import matter from 'gray-matter';

export const getMarkdownSinglePath = (path) => {
  return fs.readdirSync(path).map((file) => {
    const markdownSinglePath = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdownSinglePath);
    return {
      meta: {
        title: data.title,
        slug: data.slug,
        date: data.date,
        type: data.type,
        excerpt: data.excerpt,
        category: data.category,
        images: data.images,
      },
      content,
    };
  });
};

export const getMarkdownAllPaths = () => {
  const paths = Object.values(MdxPath);
  let markdownAllPaths = [];
  paths.map((path) => {
    markdownAllPaths = [...markdownAllPaths, ...getMarkdownSinglePath(path)];
  });
  return markdownAllPaths;
};

export const getMarkdownSlugsAllPaths = () => {
  const markdownAllPaths = getMarkdownAllPaths();
  const slugs = markdownAllPaths.map((markdown) => ({
    slug: markdown.meta.slug,
  }));
  return slugs;
};

export const getMarkdownSlugsFromCategoriesAllPaths = () => {
  const markdownAllPaths = getMarkdownAllPaths();
  const slugs = markdownAllPaths.map((markdown) => {
    if (markdown.meta.category != undefined)
      return { slug: markdown.meta.category.toLowerCase().replace(' ', '-') };
  });
  return slugs;
};

export const sortMarkdownDesc = (markdownSinglePath) => {
  return markdownSinglePath.sort((prev, next) => {
    if (new Date(prev.meta.date) < new Date(next.meta.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};
