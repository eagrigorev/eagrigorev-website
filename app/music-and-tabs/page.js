import Title from '@/components/title/title';
import PostsGrid from '@/components/postsGrid/postsGrid';

export default function Music() {
  return (
    <main className="container">
      <Title
        isPage={true}
        title="Music & Tabs"
        subtitle="Boreal Heights is my musical project since 2013. I started with melodic doom metal but later switched to dark folk genre."
      />
      <PostsGrid showHeader={false} category="music" />
    </main>
  );
}
