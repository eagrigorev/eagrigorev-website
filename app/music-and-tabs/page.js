import Title from '@/components/title/title';
import PostsGrid from '@/components/postsGrid/postsGrid';

export default function Music() {
  return (
    <main className="container">
      <Title
        isPage={true}
        title="Music & Tabs"
        subtitle="My original music, fingerstyle guitar and ukulele arrangements, and related articles."
      />
      <PostsGrid showHeader={false} category="music-and-tabs" />
    </main>
  );
}
