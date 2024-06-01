import fs from 'fs';
import matter from 'gray-matter';

const categories = [
  'illustrations',
  'music-and-tabs',
  'reading-this-year',
  'want-to-read',
  'years-of-reading',
];

export const getPostsFromSingleCategory = (category) => {
  const path = `src/markdown/posts/${category}`;
  return fs.readdirSync(path).map((file) => {
    const markdown = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    return {
      meta: data,
      content,
    };
  });
};

export const getAllPosts = () => {
  let allPosts = [];
  categories.forEach((category) => {
    allPosts.push(...getPostsFromSingleCategory(category));
  });
  return allPosts;
};

export const getPage = (file) => {
  const page = fs.readFileSync(`src/markdown/pages/${file}`, 'utf-8');
  const { data, content } = matter(page);
  return {
    meta: data,
    content,
  };
};

export const getPostsSlugs = () => {
  const allPosts = getAllPosts();
  const slugs = allPosts.map((post) => ({ slug: post.meta.slug }));
  return slugs;
};
