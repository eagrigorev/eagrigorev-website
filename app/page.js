import styles from './page.module.scss';
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
      <section className={styles['wrapper']}>
        <SectionHeader />
        <PostsGrid category="all" />
      </section>
    </main>
  );
}
