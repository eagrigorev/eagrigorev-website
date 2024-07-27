/* Namespaces */
import fs from 'fs';
import matter from 'gray-matter';

/* Utils */
import generateRssFeed from './generateRssFeed';
import { categoriesList } from '@/scripts/getCategoriesList';
import { markdownDataToPostMetaMapper } from '@/utils/markdownDataToPostMetaMapper';
import { Post, PostCategory } from '@/utils/types';

export const getPostsFromSingleCategory = (category: PostCategory): Post[] => {
  const path: string = `src/markdown/posts/${category}`;
  return fs.readdirSync(path).map((file: string) => {
    const markdown: string = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdown);
    return {
      meta: markdownDataToPostMetaMapper(data),
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

export const getPage = (file: string): Post => {
  const page: string = fs.readFileSync(`src/markdown/pages/${file}`, 'utf-8');
  const { data, content } = matter(page);
  return {
    meta: markdownDataToPostMetaMapper(data),
    content,
  };
};

export const getPostsSlugs = (): { slug: string }[] => {
  const allPosts: Post[] = getAllPosts().filter((post: Post) => {
    return post.meta.postType !== 'book';
  });
  generateRssFeed(allPosts);
  const postSlugs: { slug: string }[] = allPosts.map((post: Post) => ({
    slug: post.meta.slug,
  }));
  const categorySlugs: { slug: string }[] = categoriesList.map(
    (category: PostCategory) => ({
      slug: category,
    })
  );
  const slugs: { slug: string }[] = [...postSlugs, ...categorySlugs];
  return slugs;
};
