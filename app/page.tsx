import Link from 'next/link';
import { getPostMeta } from '../utils/getPostContent';

const Home = () => {
  const postMeta = getPostMeta('blog');
  const postPreviews = postMeta.map((post) => (
    <div key={post.slug}>
      <Link href={`/${post.slug}`}>{post.title}</Link>
      Posted {post.date} in {post.category}
    </div>
  ));
  return <div>{postPreviews}</div>;
};

export default Home;
