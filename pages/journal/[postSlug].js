import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const Post = ({ meta, content }) => {
  return (
    <>
      <h2>{meta.title}</h2>
      <p>Posted on {meta.datePosted}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      <div>Tags: {meta.tags}</div>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const fetchedDir = fs.readdirSync(path.join('markdown/posts'));
  const paths = fetchedDir.map((file) => {
    return {
      params: {
        postSlug: file.replace('.mdx', ''),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { postSlug } }) => {
  const fetchedFile = fs.readFileSync(
    path.join('markdown/posts', `${postSlug}.mdx`),
    'utf-8'
  );
  const { data: meta, content } = matter(fetchedFile);
  return {
    props: {
      meta,
      postSlug,
      content,
    },
  };
};
