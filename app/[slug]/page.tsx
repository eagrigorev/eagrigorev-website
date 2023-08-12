import { redirect } from 'next/navigation';
import { getAllMarkdowns, getAllMarkdownSlugs } from '../../utils/getMarkdown';
import Markdown from 'markdown-to-jsx';

const Post = (props) => {
  const slug = props.params.slug;
  const markdown = getAllMarkdowns().find(
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

export default Post;

export const generateStaticParams = async () => {
  return getAllMarkdownSlugs();
};
