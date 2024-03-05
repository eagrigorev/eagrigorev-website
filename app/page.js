import { PageTitle } from '@/components/title/title';
import SectionHeader from '@/components/sectionHeader/sectionHeader';
import PostsGrid from '@/components/postsGrid/postsGrid';

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
