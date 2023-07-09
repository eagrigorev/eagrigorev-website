import fs from 'fs';
import matter from 'gray-matter';
import { Post, PostType } from './interfaces';
import { relativeDate } from './relativeDate';

export const getPostContent = (folder: PostType): Post[] => {
  return fs.readdirSync(`posts/${folder}`).map((post) => {
    const postContent = fs.readFileSync(`posts/${folder}/${post}`, 'utf-8');
    const { data: meta, content } = matter(postContent);
    return {
      meta: {
        title: meta.title,
        type: meta.type,
        excerpt: meta.excerpt,
        category: meta.category,
        date: relativeDate(new Date(meta.date)),
        slug: post.replace('.mdx', ''),
      },
      content,
    };
  });
};
