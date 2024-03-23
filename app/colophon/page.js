import getPage from '@/utils/getPage';
import Title from '@/components/title/title';
import ContentDefault from '@/components/contentDefaut/contentDefault';

const Colophon = () => {
  const page = getPage('colophon.mdx');
  return (
    <main className="container">
      <Title
        isWide={false}
        showMeta={false}
        title={page.meta.title}
        subtitle={page.meta.subtitle}
      />
      <ContentDefault content={page.content} />
    </main>
  );
};

export default Colophon;
