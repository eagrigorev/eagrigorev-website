import Link from 'next/link';
import { getPostMeta } from '../utils/getPostContent';

const Home = () => {
  const postMeta = getPostMeta('blog');
  const postPreviews = postMeta.map((post) => (
    <article key={post.slug}>
      <Link href={post.slug}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.excerpt}</p>
      <p>
        Posted {post.date} in {post.category}
      </p>
    </article>
  ));
  return <div>{postPreviews}</div>;
};

export default Home;
