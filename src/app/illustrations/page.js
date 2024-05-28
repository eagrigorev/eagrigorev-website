import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import ContentGrid from '@/components/ContentGrid/ContentGrid';

const Illustrations = () => {
  return (
    <main className="container">
      <PageTitle title="Illustrations." />
      <CategoriesNavigation showAll={true} />
      <ContentGrid
        type="project"
        category="Illustrations"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default Illustrations;
