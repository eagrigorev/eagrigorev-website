import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Page from '@/templates/page';

const Content = ({ meta, content }) => {
  return <Page props={{ meta, content }} />;
};

export default Content;

export const getStaticPaths = async () => {
  const fetchedDir = fs.readdirSync(path.join('markdown'));
  const paths = fetchedDir.map((file) => {
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

export const getStaticProps = async ({ params: { slug } }) => {
  const fetchedFile = fs.readFileSync(
    path.join('markdown', `${slug}.mdx`),
    'utf-8'
  );
  const { data: meta, content } = matter(fetchedFile);
  return {
    props: {
      meta,
      slug,
      content,
    },
  };
};
