import Filters from '@/components/filters';
import PageTitle from '@/components/pageTitle';
import PostsGrid from '@/components/postsGrid';

export default function Music() {
  return (
    <main className="container">
      <PageTitle
        title="Music"
        subtitle="Boreal Heights is my musical project since 2013."
      />
      <section className="content-wrapper content-flex">
        <Filters />
        <PostsGrid category="music" />
      </section>
    </main>
  );
}
