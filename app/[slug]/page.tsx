import { redirect } from 'next/navigation';
import { getPostContent } from '../../utils/getPostContent';
import Markdown from 'markdown-to-jsx';

const Post = (props) => {
  const slug = props.params.slug;
  const post = getPostContent().find((post) => post.meta.slug === slug);
  if (post) {
    return (
      <>
        <h2>{post.meta.title}</h2>
        <Markdown key={post.meta.slug}>{post.content}</Markdown>
      </>
    );
  } else {
    redirect('/');
  }
};

export default Post;

export const generateStaticParams = async () => {
  const postContent = getPostContent();
  return postContent.map((post) => ({ slug: post.meta.slug }));
};
