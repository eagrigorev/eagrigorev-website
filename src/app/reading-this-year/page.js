import { libraryLinks } from '@/const/libraryLinks';
import { readingThisYear } from '@/const/bookMeta';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import ContentGrid from '@/components/ContentGrid/ContentGrid';

const ReadingThisYear = () => {
  return (
    <main className="container">
      <PageTitle title="Library: Reading this Year" />
      <CategoriesNavigation categories={libraryLinks} showAll={false} />
      <ContentGrid
        type="project"
        category="Music & Tabs"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default ReadingThisYear;
