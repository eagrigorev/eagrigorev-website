import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const Page = ({ meta, content }) => {
  return (
    <>
      <h2>{meta.title}</h2>
      <p>Posted on {meta.datePosted}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const fetchedDir = fs.readdirSync(path.join('markdown/pages'));
  const paths = fetchedDir.map((file) => {
    return {
      params: {
        pageSlug: file.replace('.mdx', ''),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { pageSlug } }) => {
  const fetchedFile = fs.readFileSync(
    path.join('markdown/pages', `${pageSlug}.mdx`),
    'utf-8'
  );
  const { data: meta, content } = matter(fetchedFile);
  return {
    props: {
      meta,
      pageSlug,
      content,
    },
  };
};
