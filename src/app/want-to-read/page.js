import { libraryLinks } from '@/const/libraryLinks';
import { wantToRead } from '@/const/wantToRead';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import BooksGrid from '@/components/BooksGrid/BooksGrid';

const WantToRead = () => {
  return (
    <main className="container">
      <PageTitle title="Library: Want to Read" />
      <CategoriesNavigation categories={libraryLinks} showAll={false} />
      <BooksGrid content={wantToRead} postsToShow={12} postsToLoad={6} />
    </main>
  );
};

export default WantToRead;
