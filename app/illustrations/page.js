import Title from '@/components/title/title';
import PostsGrid from '@/components/postsGrid/postsGrid';

export default function Illustrations() {
  return (
    <main className="container">
      <Title
        isPage={true}
        title="Illustrations"
        subtitle="Pixel art drawings."
      />
      <PostsGrid showHeader={false} category="illustrations" />
    </main>
  );
}
