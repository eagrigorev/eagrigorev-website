import { libraryLinks } from '@/const/libraryLinks';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';
PostsGrid;

const ReadingThisYear = () => {
  return (
    <main className="container">
      <PageTitle title="Library: Reading this Year" />
      <CategoriesNavigation categories={libraryLinks} showAll={false} />
      <PostsGrid
        type="book"
        category="Reading this Year"
        postsToShow={12}
        postsToLoad={6}
      />
    </main>
  );
};

export default ReadingThisYear;
