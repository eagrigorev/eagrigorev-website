import { projectCategories } from '@/const/projectCategories';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const MusicAndTabs = () => {
  return (
    <main className="container">
      <PageTitle title="Music & Tabs." />
      <CategoriesNavigation categories={projectCategories} showAll={true} />
      <PostsGrid
        type="project"
        category="Music & Tabs"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default MusicAndTabs;
