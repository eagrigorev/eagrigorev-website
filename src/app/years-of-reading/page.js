import { LIBRARY_SUB_NAVIGATION } from '@/const/SUB_NAVIGATION';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const YearsOfReading = () => {
  return (
    <main className="container">
      <PageTitle title="Library: Years of Reading" />
      <SubNavigation navigationItems={LIBRARY_SUB_NAVIGATION} showAll={false} />
      <PostsGrid
        postType="booklist"
        category="Years of Reading"
        postsToShow={12}
        postsToLoad={6}
      />
    </main>
  );
};

export default YearsOfReading;
