import Title from '@/components/title/title';
import ContentGrid from '@/components/contentGrid/contentGrid';

export default function Music() {
  return (
    <main className="container">
      <Title
        isWide={true}
        showMeta={false}
        title="Music & Tabs"
        subtitle="My original music, fingerstyle guitar and ukulele arrangements, and related articles."
      />
      <ContentGrid showHeader={false} category="music-and-tabs" />
    </main>
  );
}
