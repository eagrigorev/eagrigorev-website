/* Global */
import fs from 'fs';
import matter from 'gray-matter';

/* Data */
import categories from '@/data/categories.json';

/* Scripts */
import generateRssFeed from './generateRssFeed';
import { mapMatterToMeta } from './mapMatterToMeta';
import { sortPostsDesc } from './sort';

/* Utils */
import { Markdown } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';
import { Slug } from '@/utils/types/common';
import { URL } from '@/utils/const/url';

export const getPostsFromSingleCategory = (category: string): Markdown[] => {
  const path: string = `${URL.POSTS}/${category}`;
  const allPosts: Markdown[] = fs.readdirSync(path).map((file: string) => {
    const markdown: string = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    return {
      meta: mapMatterToMeta(data),
      content,
    };
  });
  return sortPostsDesc(allPosts);
};

export const getAllPosts = (): Markdown[] => {
  let allPosts: Markdown[] = [];
  fs.readdirSync(URL.POSTS).forEach((category: string) =>
    allPosts.push(...getPostsFromSingleCategory(category))
  );
  sortPostsDesc(allPosts);
  return allPosts;
};

export const getPage = (file: string): Markdown => {
  const page: string = fs.readFileSync(`${URL.PAGES}/${file}`, 'utf-8');
  const { data, content } = matter(page);
  return {
    meta: mapMatterToMeta(data),
    content,
  };
};

export const getPostsSlugs = (): Slug[] => {
  const allPosts: Markdown[] = getAllPosts().filter(
    (post: Markdown) => post.meta.slug !== undefined
  );
  generateRssFeed(allPosts);
  const postSlugs: Slug[] = allPosts.map((post: Markdown) => ({
    slug: post.meta.slug,
  }));
  const categorySlugs: Slug[] = categories.map((category: NavigationItem) => ({
    slug: category.url.slice(1),
  }));
  const slugs: Slug[] = [...postSlugs, ...categorySlugs];
  return slugs;
};
