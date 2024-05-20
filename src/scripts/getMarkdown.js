import fs from 'fs';
import matter from 'gray-matter';

export const getMarkdownSingleCategory = (type, category) => {
  const path = `src/markdown/${type}/${category}`;
  return fs.readdirSync(path).map((file) => {
    const markdown = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    return {
      meta: data,
      content,
    };
  });
};

export const getProjects = () => {
  const musicAndTabs = getMarkdownSingleCategory('projects', 'music-and-tabs');
  const illustrations = getMarkdownSingleCategory('projects', 'illustrations');
  const allProjects = [...musicAndTabs, ...illustrations];
  return allProjects;
};

export const getPage = (file) => {
  const page = fs.readFileSync(`src/markdown/pages/${file}`, 'utf-8');
  const { data, content } = matter(page);
  return {
    meta: data,
    content,
  };
};

export const getProjectsSlugs = () => {
  const allProjects = getProjects();
  const slugs = allProjects.map((project) => ({ slug: project.meta.slug }));
  return slugs;
};
