import { libraryLinks } from '@/const/libraryLinks';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const YearsOfReading = () => {
  return (
    <main className="container">
      <PageTitle title="Library: Years of Reading" />
      <CategoriesNavigation categories={libraryLinks} showAll={false} />
      <PostsGrid
        type="booklist"
        category="Years of Reading"
        postsToShow={12}
        postsToLoad={6}
      />
    </main>
  );
};

export default YearsOfReading;
