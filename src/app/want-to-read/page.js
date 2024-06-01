import { libraryLinks } from '@/const/libraryLinks';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const WantToRead = () => {
  return (
    <main className="container">
      <PageTitle title="Library: Want to Read" />
      <CategoriesNavigation categories={libraryLinks} showAll={false} />
      <PostsGrid
        type="book"
        category="Want to Read"
        postsToShow={12}
        postsToLoad={6}
      />
    </main>
  );
};

export default WantToRead;
