import Title from '@/components/title/title';
import ContentGrid from '@/components/contentGrid/contentGrid';

export default function Home() {
  return (
    <main className="container">
      <Title
        isWide={true}
        showMeta={false}
        title="Evgenii makes illustrations, writes music, and code."
        subtitle="Welcome to my online journal where I share my illustrations, designs,
        projects and other things I'm interested in."
      />
      <ContentGrid showHeader={true} category="all" />
    </main>
  );
}
