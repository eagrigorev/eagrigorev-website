import { LIBRARY_SUB_NAVIGATION } from '@/const/navigation';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';
PostsGrid;

const ReadingThisYear = () => {
  return (
    <main className="container">
      <PageTitle title="Library: Reading this Year" />
      <SubNavigation navigationItems={LIBRARY_SUB_NAVIGATION} showAll={false} />
      <PostsGrid
        postType="book"
        category="Reading this Year"
        postsToShow={12}
        postsToLoad={6}
      />
    </main>
  );
};

export default ReadingThisYear;
