import { getPostContent } from '../utils/getPostContent';
import BlogPostCard from './components/blogPostCard';

const Home = () => {
  const postContent = getPostContent('blog');
  const postPreviews = postContent.map((post) => (
    <BlogPostCard post={post} key={post.meta.slug} />
  ));
  return <div>{postPreviews}</div>;
};

export default Home;
