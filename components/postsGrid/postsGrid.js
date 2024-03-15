import styles from './postsGrid.module.scss';
import { getPosts, getPostsFromSingleCategory } from '@/utils/getPosts';
import { sortPostsDesc } from '@/utils/sort';
import { categoriesNavigation } from '@/utils/getNavigationItems';
import Navigation from '../navigation/navigation';
import PostCard from '../postCard/postCard';

const PostsGrid = ({ showHeader, category }) => {
  let allPosts = [];
  if (category === 'all') {
    allPosts = sortPostsDesc(getPosts()).slice(0, 6);
  } else {
    allPosts = sortPostsDesc(getPostsFromSingleCategory(category));
  }
  return (
    <section className={`${styles['wrapper']} ${styles['wrapper--section']}`}>
      {showHeader ? (
        <header className={`${styles['wrapper']} ${styles['wrapper--header']}`}>
          <div className={`${styles['wrapper']} ${styles['wrapper--title']}`}>
            <h3 className="heading heading--medium-xl-100">Updates</h3>
            <Navigation links={categoriesNavigation} />
          </div>
          <h4 className="paragraph paragraph--light-m-125">
            Recent posts from all the categories
          </h4>
        </header>
      ) : null}
      <div className="grid">
        {allPosts.map((post) => (
          <PostCard
            title={post.meta.title}
            slug={post.meta.slug}
            dateEdited={post.meta.dateEdited}
            category={post.meta.category}
            image={post.meta.featuredImage}
            key={post.meta.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default PostsGrid;
