import { getSortedPosts } from '@/scripts/getPosts';
import GridGenerator from '../GridGenerator/GridGenerator';

const PostsGrid = ({ postType, category, postsToShow, postsToLoad }) => {
  const allPosts = getSortedPosts(postType, category);
  return (
    <section>
      <GridGenerator
        postType={postType}
        posts={allPosts}
        postsToShow={postsToShow}
        postsToLoad={postsToLoad}
      />
    </section>
  );
};

export default PostsGrid;
