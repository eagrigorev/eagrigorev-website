import fs from 'fs';
import matter from 'gray-matter';

const getPage = (file) => {
  const page = fs.readFileSync(`public/pages/${file}`, 'utf-8');
  const { data, content } = matter(page);
  return {
    meta: {
      title: data.title,
      subtitle: data.subtitle,
      slug: data.slug,
    },
    content,
  };
};

export default getPage;
