import { getPosts, getPostsFromSingleCategory } from '@/utils/getPosts';
import { sortPostsDesc } from '@/utils/sort';
import PostCard from './postCard';

const PostsGrid = ({ category }) => {
  let allPosts = [];
  if (category === 'all') {
    allPosts = sortPostsDesc(getPosts()).slice(0, 6);
  } else {
    allPosts = sortPostsDesc(getPostsFromSingleCategory(category));
  }
  return (
    <div className="grid">
      {allPosts.map((post) => (
        <PostCard
          title={post.meta.title}
          slug={post.meta.slug}
          date={post.meta.date}
          category={post.meta.category}
          key={post.meta.slug}
        />
      ))}
    </div>
  );
};

export default PostsGrid;
