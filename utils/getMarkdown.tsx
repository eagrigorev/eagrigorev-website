import fs from 'fs';
import matter from 'gray-matter';
import { Markdown, Path } from './interfaces';

export const getMarkdown = (path: Path): Markdown[] => {
  return fs.readdirSync(path).map((file) => {
    const markdown = fs.readFileSync(`${path}/${file}`, 'utf-8');
    const { data: meta, content } = matter(markdown);
    return {
      meta: {
        title: meta.title,
        slug: file.replace('.mdx', ''),
        date: meta.date,
        excerpt: meta.excerpt,
        category: meta.category,
        featuredImage: meta.featuredImage,
      },
      content,
    };
  });
};

export const getAllMarkdowns = (): Markdown[] => {
  const paths = Object.values(Path);
  let allMarkdowns: Markdown[] = [];
  paths.map((path: Path) => {
    allMarkdowns = [...allMarkdowns, ...getMarkdown(path)];
  });
  return allMarkdowns;
};

export const getAllMarkdownSlugs = (): { slug: string }[] => {
  const paths = Object.values(Path);
  let slugs: { slug: string }[] = [];
  paths.map((path: Path) => {
    const allMarkdowns = [...getMarkdown(path)];
    slugs = [
      ...slugs,
      ...allMarkdowns.map((markdown) => ({
        slug: markdown.meta.slug,
      })),
    ];
  });
  return slugs;
};
