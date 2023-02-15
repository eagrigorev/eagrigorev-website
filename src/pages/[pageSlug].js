import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const Page = ({ meta, pageSlug, content }) => {
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
  const fetchedFiles = fs.readdirSync(path.join('src/content/pages'));
  const paths = fetchedFiles.map((file) => {
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
  const fileContent = fs.readFileSync(
    path.join('src/content/pages', `${pageSlug}.mdx`),
    'utf-8'
  );
  const { data: meta, content } = matter(fileContent);
  return {
    props: {
      meta,
      pageSlug,
      content,
    },
  };
};
