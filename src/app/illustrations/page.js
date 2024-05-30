import { projectCategories } from '@/const/projectCategories';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const Illustrations = () => {
  return (
    <main className="container">
      <PageTitle title="Illustrations." />
      <CategoriesNavigation categories={projectCategories} showAll={true} />
      <PostsGrid
        type="project"
        category="Illustrations"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default Illustrations;
