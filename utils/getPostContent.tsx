import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';
import { PostMeta, PostType } from './interfaces';
import { relativeDate } from './relativeDate';

export const getPostMeta = (folder: PostType): PostMeta[] => {
  const path = `posts/${folder}`;
  return fs.readdirSync(path).map((post) => {
    const slug = post.replace('.mdx', '');
    const postContents = getPostContent(folder, slug);
    const { data: meta } = matter(postContents);
    return {
      title: meta.title,
      type: meta.type,
      excerpt: meta.excerpt,
      category: meta.category,
      date: relativeDate(new Date(meta.date)),
      slug: slug,
    };
  });
};

export const getPostContent = (
  folder: PostType,
  slug: string
): GrayMatterFile<string> => {
  return matter(fs.readFileSync(`posts/${folder}/${slug}.mdx`, 'utf-8'));
};
