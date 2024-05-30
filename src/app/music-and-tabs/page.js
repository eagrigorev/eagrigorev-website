import { projectCategories } from '@/const/projectCategories';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import ContentGrid from '@/components/ContentGrid/ContentGrid';

const MusicAndTabs = () => {
  return (
    <main className="container">
      <PageTitle title="Music & Tabs." />
      <CategoriesNavigation categories={projectCategories} showAll={true} />
      <ContentGrid
        type="project"
        category="Music & Tabs"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default MusicAndTabs;
