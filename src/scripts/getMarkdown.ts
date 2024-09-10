/* Namespaces */
import fs from 'fs';
import matter from 'gray-matter';

/* Utils */
import generateRssFeed from './generateRssFeed';
import { categoriesList } from '@/scripts/getCategoriesList';
import {
  mapCategoriesToSlugs,
  mapMatterDataToPageMeta,
  mapMatterDataToPostMeta,
} from './utils';
import { Post, PostCategory } from '@/types/post';
import { Page } from '@/types/page';
import { Slug } from '@/types/slug';
import { NavigationItem } from '@/types/navigation';
import { URL } from '@/const/url';
import {
  JOURNAL_CATEGORIES,
  LIBRARY_CATEGORIES,
  WORKS_CATEGORIES,
} from '@/const/categories';

export const getWorksPostsFromSingleCategory = (
  category: PostCategory
): Post[] => {
  const path: string = `${URL.WORKS}/${category}`;
  return fs.readdirSync(path).map((file: string) => {
    const markdown: string = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    return {
      meta: mapMatterDataToPostMeta(data),
      content,
    };
  });
};

export const getJournalPostsFromSingleCategory = (
  category: PostCategory
): Post[] => {
  const path: string = `${URL.JOURNAL}/${category}`;
  return fs.readdirSync(path).map((file: string) => {
    const markdown: string = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    return {
      meta: mapMatterDataToPostMeta(data),
      content,
    };
  });
};

export const getLibraryPostsFromSingleCategory = (
  category: PostCategory
): Post[] => {
  const path: string = `${URL.LIBRARY}/${category}`;
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
  mapCategoriesToSlugs(JOURNAL_CATEGORIES).forEach((category: PostCategory) => {
    allPosts.push(...getJournalPostsFromSingleCategory(category));
  });
  mapCategoriesToSlugs(LIBRARY_CATEGORIES).forEach((category: PostCategory) => {
    allPosts.push(...getLibraryPostsFromSingleCategory(category));
  });
  mapCategoriesToSlugs(WORKS_CATEGORIES).forEach((category: PostCategory) => {
    allPosts.push(...getWorksPostsFromSingleCategory(category));
  });
  return allPosts;
};

export const getAllTags = (): NavigationItem[] => {
  let allPosts: Post[] = getAllPosts();
  const tags: NavigationItem[] = [];
  allPosts
    .filter((post: Post) => post.meta.tags?.length)
    .forEach((post: Post) => {
      post.meta.tags.forEach((tag: string) =>
        tags.push({ title: tag, url: `/${tag}` })
      );
    });
  const uniqueTags: NavigationItem[] = tags.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
  return uniqueTags;
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
  const allPosts: Post[] = getAllPosts().filter(
    (post: Post) => !post.meta.slug.includes('http')
  );
  generateRssFeed(allPosts);
  const postSlugs: Slug[] = allPosts.map((post: Post) => ({
    slug: post.meta.slug,
  }));
  const categorySlugs: Slug[] = categoriesList.map(
    (category: PostCategory) => ({
      slug: category,
    })
  );
  const tagsSlugs: Slug[] = getAllTags().map((tag: NavigationItem) => ({
    slug: `${tag.title}`,
  }));
  const slugs: Slug[] = [...postSlugs, ...categorySlugs, ...tagsSlugs];
  return slugs;
};
