import PageTitle from '@/components/pageTitle';
import PostsGrid from '@/components/postsGrid';

export default function Music() {
  return (
    <main className="container">
      <PageTitle
        title="Music"
        subtitle="Boreal Heights is my musical project since 2013. I started with melodic doom metal but later switched to dark folk genre."
      />
      <section className="content-wrapper">
        <PostsGrid category="music" />
      </section>
    </main>
  );
}
