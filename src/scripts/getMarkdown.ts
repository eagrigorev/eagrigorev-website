/* Global */
import fs from 'fs';
import matter from 'gray-matter';

/* Scripts */
import generateRssFeed from './generateRssFeed';
import {
  mapCategoriesToSlugs,
  mapLibraryBooksToSlugs,
  mapMatterDataToPageMeta,
  mapMatterDataToPostMeta,
  mapPostsToSlugs,
} from './mappers';

/* Utils */
import { Page, Post } from '@/utils/types/markdown';
import { Slug } from '@/utils/types/common';
import { URL } from '@/utils/const/url';

export const getPostsFromSingleType = (postType: string) => {
  const path: string = `${URL.POSTS}/${postType}`;
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
  const postTypes = [
    'illustrations',
    'journal',
    'music',
    'programming',
    'tabs',
  ];
  postTypes.forEach((postType: string) =>
    allPosts.push(...getPostsFromSingleType(postType))
  );
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

export const getLibraryBooks = (): Post[] => {
  return fs.readdirSync(URL.LIBRARY).map((file: string) => {
    const markdown: string = fs.readFileSync(`${URL.LIBRARY}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    return {
      meta: mapMatterDataToPostMeta(data),
      content,
    };
  });
};

export const getSlugs = (): Slug[] => {
  const allPosts: Post[] = getAllPosts();
  const indexableBooks: Post[] = getLibraryBooks().filter(
    (book: Post) => !book.meta.externalLink
  );
  const slugs: Slug[] = [
    ...mapPostsToSlugs(allPosts),
    ...mapLibraryBooksToSlugs(indexableBooks),
    ...mapCategoriesToSlugs(),
  ];
  const allRssPosts: Post[] = [...allPosts, ...indexableBooks];
  generateRssFeed(allRssPosts);
  return slugs;
};
