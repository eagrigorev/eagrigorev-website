import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const fetchData = (source) => {
  const fetchedFiles = fs.readdirSync(path.join(source));
  const contentData = fetchedFiles.map((file) => {
    const slug = file.replace('.mdx', '');
    const fileContent = fs.readFileSync(path.join(source, file), 'utf-8');
    const { data: meta } = matter(fileContent);
    return { slug, meta };
  });
};
