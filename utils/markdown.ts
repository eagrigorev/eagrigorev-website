import fs from 'fs';
import matter from 'gray-matter';
import { Markdown, MdxPath } from './interfaces';

export const getMarkdownSinglePath = (path: MdxPath): Markdown[] => {
  return fs.readdirSync(path).map((file) => {
    const markdownSinglePath = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdownSinglePath);
    return {
      meta: {
        title: data.title,
        slug: data.slug,
        date: data.date,
        type: data.type,
        excerpt: data.excerpt,
        category: data.category,
        images: data.images,
      },
      content,
    };
  });
};

export const getMarkdownAllPaths = (): Markdown[] => {
  const paths = Object.values(MdxPath);
  let markdownAllPaths: Markdown[] = [];
  paths.map((path: MdxPath) => {
    markdownAllPaths = [...markdownAllPaths, ...getMarkdownSinglePath(path)];
  });
  return markdownAllPaths;
};

export const getMarkdownSlugsAllPaths = (): { slug: string }[] => {
  const markdownAllPaths = getMarkdownAllPaths();
  const slugs: { slug: string }[] = markdownAllPaths.map((markdown) => ({
    slug: markdown.meta.slug,
  }));
  return slugs;
};

export const getMarkdownSlugsFromCategoriesAllPaths = (): {
  slug: string;
}[] => {
  const markdownAllPaths = getMarkdownAllPaths();
  const slugs: { slug: string }[] = markdownAllPaths.map((markdown) => {
    if (markdown.meta.category != undefined)
      return { slug: markdown.meta.category.toLowerCase().replace(' ', '-') };
  });
  return slugs;
};

export const sortMarkdownDesc = (
  markdownSinglePath: Markdown[]
): Markdown[] => {
  return markdownSinglePath.sort((prev, next) => {
    if (new Date(prev.meta.date) < new Date(next.meta.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};
