import { PostType } from '../utils/interfaces';
import { getPostContent } from '../utils/getPostContent';
import { sortPostsDesc } from '../utils/sortPosts';
import Intro from './components/intro';
import BlogPostCard from './components/blogPostCard';

const Home = () => {
  const postContent = sortPostsDesc(getPostContent());
  return (
    <>
      <Intro />
      <div>
        {postContent
          .filter((post) => post.meta.type === PostType.blog)
          .map((post) => (
            <BlogPostCard post={post} key={post.meta.slug} />
          ))}
      </div>
    </>
  );
};

export default Home;
