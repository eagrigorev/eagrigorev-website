import Markdown from 'markdown-to-jsx';
import { getPostMeta, getPostContent } from '../../utils/getPostContent';

const Post = (props) => {
  const slug = props.params.slug;
  const post = getPostContent('blog', slug);
  return (
    <>
      This is a post! {slug}
      <Markdown>{post.content}</Markdown>
    </>
  );
};

export default Post;

export const generateStaticParams = async () => {
  const posts = getPostMeta('blog');
  return posts.map((post) => ({ slug: post.slug }));
};
