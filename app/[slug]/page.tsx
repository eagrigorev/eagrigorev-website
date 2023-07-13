import { getPostContent } from '../../utils/getPostContent';
import Markdown from 'markdown-to-jsx';

const Post = (props) => {
  const slug = props.params.slug;
  const postContent = getPostContent().filter(
    (post) => post.meta.slug === slug
  );
  return (
    <>
      {postContent.map((post) => (
        <Markdown key={post.meta.slug}>{post.content}</Markdown>
      ))}
    </>
  );
};

export default Post;

export const generateStaticParams = async () => {
  const postContent = getPostContent();
  return postContent.map((post) => ({ slug: post.meta.slug }));
};
