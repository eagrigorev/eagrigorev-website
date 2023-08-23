import { redirect } from 'next/navigation';
import {
  getMarkdownAllPaths,
  getMarkdownSlugsAllPaths,
} from '../../utils/markdown';
import Markdown from 'markdown-to-jsx';

const Page = (props) => {
  const slug = props.params.slug;
  const markdown = getMarkdownAllPaths().find(
    (markdown) => markdown.meta.slug === slug
  );
  if (markdown) {
    return (
      <>
        <h2>{markdown.meta.title}</h2>
        <Markdown key={markdown.meta.slug}>{markdown.content}</Markdown>
      </>
    );
  } else {
    redirect('/');
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getMarkdownSlugsAllPaths();
};
