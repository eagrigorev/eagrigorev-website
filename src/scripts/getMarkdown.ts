import fs from 'fs';
import matter from 'gray-matter';
import generateRssFeed from './generateRssFeed';
import { mapMatterDataToMarkdownMeta } from './mappers';
import { Slug } from '@/utils/types/common';
import { URL } from '@/utils/const/url';
import { Markdown, MarkdownType } from '@/utils/types/markdown';

export const getMarkdownPostsFromSingleCategory = (
  category: string
): Markdown[] => {
  const path: string = `${URL.POSTS}/${category}`;
  return fs.readdirSync(path).map((file: string) => {
    const markdown: string = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    return {
      meta: mapMatterDataToMarkdownMeta(data),
      content,
    };
  });
};

export const getAllMarkdownPosts = (): Markdown[] => {
  let allPosts: Markdown[] = [];
  fs.readdirSync(URL.POSTS).forEach((category: string) => {
    allPosts.push(...getMarkdownPostsFromSingleCategory(category));
  });
  return allPosts;
};

export const getMarkdownPostsFromSingleType = (type: MarkdownType) => {
  const allPosts: Markdown[] = getAllMarkdownPosts();
  return allPosts.filter((post: Markdown) => post.meta.type === type);
};

export const getMarkdownPage = (file: string): Markdown => {
  const page: string = fs.readFileSync(`${URL.PAGES}/${file}`, 'utf-8');
  const { data, content } = matter(page);
  return {
    meta: mapMatterDataToMarkdownMeta(data),
    content,
  };
};

export const getPostsSlugs = (): Slug[] => {
  const allPosts: Markdown[] = getAllMarkdownPosts().filter(
    (post: Markdown) => post.meta.slug !== undefined
  );
  generateRssFeed(allPosts);
  const postSlugs: Slug[] = allPosts.map((post: Markdown) => ({
    slug: post.meta.slug,
  }));
  // const categorySlugs: Slug[] = categoriesList.map(
  //   (category: PostCategory) => ({
  //     slug: category,
  //   })
  // );
  const slugs: Slug[] = [...postSlugs];
  return slugs;
};
