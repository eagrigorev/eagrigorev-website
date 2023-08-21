import fs from 'fs';
import matter from 'gray-matter';
import { Markdown, Path } from './interfaces';

export const getMarkdownSinglePath = (path: Path): Markdown[] => {
  return fs.readdirSync(path).map((file) => {
    const markdownSinglePath = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data, content } = matter(markdownSinglePath);
    return {
      meta: {
        title: data.title,
        slug: data.slug,
        date: data.date,
        excerpt: data.excerpt,
        category: data.category,
        featuredImage: data.featuredImage,
      },
      content,
    };
  });
};

export const getMarkdownAllPaths = (): Markdown[] => {
  const paths = Object.values(Path);
  let markdownAllPaths: Markdown[] = [];
  paths.map((path: Path) => {
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

export const sortMarkdownDesc = (
  markdownSinglePath: Markdown[]
): Markdown[] => {
  return markdownSinglePath.sort((prev, next) => {
    if (prev.meta.date < next.meta.date) {
      return 1;
    } else {
      return -1;
    }
  });
};
