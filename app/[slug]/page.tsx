import { redirect } from 'next/navigation';
import {
  getMarkdownAllPaths,
  getMarkdownSlugsAllPaths,
} from '../../utils/markdown';
import PageSplit from '../components/pageSplit';

const Page = (props) => {
  const slug = props.params.slug;
  const markdown = getMarkdownAllPaths().find(
    (markdown) => markdown.meta.slug === slug
  );
  if (
    markdown &&
    (markdown.meta.type === 'music' || markdown.meta.type === 'illustrations')
  ) {
    return <PageSplit markdown={markdown} />;
  } else {
    redirect('/');
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getMarkdownSlugsAllPaths();
};
