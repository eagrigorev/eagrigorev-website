import { projectCategories } from '@/const/projectCategories';
import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const Home = () => {
  return (
    <main className="container">
      <PageTitle title="Software developer and artist based in Thessaloniki, Greece." />
      <CategoriesNavigation categories={projectCategories} showAll={false} />
      <PostsGrid
        type="project"
        category="all"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default Home;
