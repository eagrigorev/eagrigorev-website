/* Global */
import fs from 'fs';
import matter from 'gray-matter';

/* Data */
import categories from '@/data/navigation-items/categories.json';

/* Scripts */
import generateRssFeed from './generateRssFeed';
import { generateSlug } from './generateSlug';
import { generateTagsCloud } from './generateTagsCloud';
import { sortPostsDesc } from './sort';

/* Utils */
import { Markdown, Matter, Meta } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';
import { Slug } from '@/utils/types/common';
import { URL } from '@/utils/const/url';

const mapMatterToMeta = (data: Matter): Meta => {
  return {
    title: data.title,
    slug: data.slug,
    category: data.category,
    tags: data.tags,
    dateEdited: data.dateEdited,
    datePublished: data.datePublished,
    description: data.description,
    externalLink: data.externalLink,
  };
};

export const getPostsFromSingleCategory = (category: string): Markdown[] => {
  const path: string = `${URL.POSTS}/${category}`;
  let categoryPosts: Markdown[] = [];
  fs.readdirSync(path).forEach((file: string) => {
    const markdown: string = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    categoryPosts.push({
      meta: mapMatterToMeta(data),
      content,
    });
  });
  return sortPostsDesc(categoryPosts);
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
  const tagsSlugs: Slug[] = generateTagsCloud().map((tag: string) => {
    return { slug: generateSlug(tag) };
  });
  const slugs: Slug[] = [...postSlugs, ...categorySlugs, ...tagsSlugs];
  return slugs;
};
