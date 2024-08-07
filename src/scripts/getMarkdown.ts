/* Namespaces */
import fs from 'fs';
import matter from 'gray-matter';

/* Utils */
import generateRssFeed from './generateRssFeed';
import { categoriesList } from '@/scripts/getCategoriesList';
import { mapMatterDataToPageMeta, mapMatterDataToPostMeta } from './utils';
import { Post, PostCategory } from '@/types/post';
import { Page } from '@/types/page';
import { Slug } from '@/types/slug';
import { URL } from '@/const/url';

export const getPostsFromSingleCategory = (category: PostCategory): Post[] => {
  const path: string = `${URL.POSTS}/${category}`;
  return fs.readdirSync(path).map((file: string) => {
    const markdown: string = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    return {
      meta: mapMatterDataToPostMeta(data),
      content,
    };
  });
};

export const getAllPosts = (): Post[] => {
  let allPosts: Post[] = [];
  categoriesList.forEach((category: PostCategory) => {
    allPosts.push(...getPostsFromSingleCategory(category));
  });
  return allPosts;
};

export const getPage = (file: string): Page => {
  const page: string = fs.readFileSync(`${URL.PAGES}/${file}`, 'utf-8');
  const { data, content } = matter(page);
  return {
    meta: mapMatterDataToPageMeta(data),
    content,
  };
};

export const getPostsSlugs = (): Slug[] => {
  const allPosts: Post[] = getAllPosts().filter((post: Post) => {
    return post.meta.type !== 'book';
  });
  generateRssFeed(allPosts);
  const postSlugs: Slug[] = allPosts.map((post: Post) => ({
    slug: post.meta.slug,
  }));
  const categorySlugs: Slug[] = categoriesList.map(
    (category: PostCategory) => ({
      slug: category,
    })
  );
  const slugs: Slug[] = [...postSlugs, ...categorySlugs];
  return slugs;
};
