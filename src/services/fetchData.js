import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getStaticPaths = async (contentPath) => {
  const fetchedFiles = fs.readdirSync(path.join(contentPath));
  const paths = fetchedFiles.map((file) => {
    return {
      params: {
        slug: file.replace('.mdx', ''),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (
  { params: { slug } },
  contentPath,
  slugType
) => {
  const fileContent = fs.readFileSync(
    path.join(contentPath, `${slug}.mdx`),
    'utf-8'
  );
  const { data: meta, content } = matter(fileContent);
  return {
    props: {
      meta,
      [slugType]: slug,
      content,
    },
  };
};
