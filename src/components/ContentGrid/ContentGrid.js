import { getSortedPosts } from '@/scripts/getPosts';
import GridGenerator from '../GridGenerator/GridGenerator';

const ContentGrid = ({ type, category, postsToShow, postsToLoad }) => {
  const allPosts = getSortedPosts(type, category);
  return (
    <section>
      <GridGenerator
        type={type}
        content={allPosts}
        postsToShow={postsToShow}
        postsToLoad={postsToLoad}
      />
    </section>
  );
};

export default ContentGrid;
