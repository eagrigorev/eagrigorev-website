import Title from '@/components/title/title';
import PostsGrid from '@/components/postsGrid/postsGrid';

export default function Home() {
  return (
    <main className="container">
      <Title
        isPage={true}
        title="Evgenii makes illustrations, writes music, and code."
        subtitle="Welcome to my online journal where I share my illustrations, designs,
        projects and other things I'm interested in."
      />
      <PostsGrid showHeader={true} category="all" />
    </main>
  );
}
