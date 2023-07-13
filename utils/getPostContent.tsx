import fs from 'fs';
import matter from 'gray-matter';
import { Post } from './interfaces';
import { relativeDate } from './relativeDate';

export const getPostContent = (): Post[] => {
  return fs.readdirSync('posts/').map((post) => {
    const postContent = fs.readFileSync(`posts/${post}`, 'utf-8');
    const { data: meta, content } = matter(postContent);
    return {
      meta: {
        title: meta.title,
        slug: post.replace('.mdx', ''),
        date: relativeDate(new Date(meta.date)),
        type: meta.type,
        excerpt: meta.excerpt,
        category: meta.category,
      },
      content,
    };
  });
};
