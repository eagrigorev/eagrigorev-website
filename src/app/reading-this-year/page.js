import { libraryLinks } from '@/const/libraryLinks';
import { readingThisYear } from '@/const/readingThisYear';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import BooksGrid from '@/components/BooksGrid/BooksGrid';

const ReadingThisYear = () => {
  return (
    <main className="container">
      <PageTitle title="Library: Reading this Year" />
      <CategoriesNavigation categories={libraryLinks} showAll={false} />
      <BooksGrid content={readingThisYear} postsToShow={12} postsToLoad={6} />
    </main>
  );
};

export default ReadingThisYear;
