import fs from 'fs';
import matter from 'gray-matter';
import generateRssFeed from '@/scripts/generateRssFeed';
import { categoriesList } from './getCategoriesList';

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
  categoriesList.forEach((category) => {
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
  const rssFeedPosts = allPosts.filter((post) => {
    return post.meta.postType !== 'book';
  });
  generateRssFeed(rssFeedPosts);
  const postSlugs = allPosts.map((post) => ({ slug: post.meta.slug }));
  const categorySlugs = categoriesList.map((category) => ({ slug }));
  console.log('LOG: slugs', slugs);
  return slugs;
};
