import { LIBRARY_SUB_NAVIGATION } from '@/const/SUB_NAVIGATION';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const WantToRead = () => {
  return (
    <main className="container">
      <PageTitle title="Library: Want to Read" />
      <SubNavigation navigationItems={LIBRARY_SUB_NAVIGATION} showAll={false} />
      <PostsGrid
        postType="book"
        category="Want to Read"
        postsToShow={12}
        postsToLoad={6}
      />
    </main>
  );
};

export default WantToRead;
