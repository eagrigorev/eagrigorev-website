import PageTitle from '@/components/pageTitle';
import SectionHeader from '@/components/sectionHeader';
import PostsGrid from '@/components/postsGrid';

export default function Home() {
  return (
    <main className="container">
      <PageTitle
        title="Evgenii makes illustrations, writes music, and code."
        subtitle="Welcome to my online journal where I share my illustrations, designs,
        projects and other things I'm interested in."
      />
      <section className="content-wrapper content-flex">
        <SectionHeader />
        <PostsGrid category="all" />
      </section>
    </main>
  );
}
