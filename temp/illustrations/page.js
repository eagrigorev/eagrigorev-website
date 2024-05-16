import Title from '@/components/title/title';
import ContentGrid from '@/components/contentGrid/contentGrid';

export default function Illustrations() {
  return (
    <main className="container">
      <Title
        isWide={true}
        showMeta={false}
        title="Illustrations"
        subtitle="Pixel art drawings."
      />
      <ContentGrid showHeader={false} category="illustrations" />
    </main>
  );
}
