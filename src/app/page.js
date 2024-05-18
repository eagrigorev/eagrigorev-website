import PageTitle from '@/components/PageTitle/PageTitle';
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import ContentGrid from '@/components/ContentGrid/ContentGrid';

export default function Home() {
  return (
    <main className="container">
      <PageTitle
        title={'Software developer and artist based in Thessaloniki, Greece.'}
      />
      <CategoriesNavigation />
      <ContentGrid type={'projects'} category={'all'} />
    </main>
  );
}
