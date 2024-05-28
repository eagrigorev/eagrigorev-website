import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import ContentGrid from '@/components/ContentGrid/ContentGrid';

const Home = () => {
  return (
    <main className="container">
      <PageTitle title="Software developer and artist based in Thessaloniki, Greece." />
      <CategoriesNavigation showAll={false} />
      <ContentGrid
        type="project"
        category="all"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default Home;
