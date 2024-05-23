import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import ContentGrid from '@/components/ContentGrid/ContentGrid';

export default function Home() {
  return (
    <main className="container">
      <PageTitle title={'Music & Tabs.'} />
      <CategoriesNavigation showAll={true} />
      <ContentGrid
        type={'projects'}
        category={'music-and-tabs'}
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
}
