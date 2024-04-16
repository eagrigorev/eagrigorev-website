import getPage from '@/utils/getPage';
import Title from '@/components/title/title';
import MdxWrapper from '@/components/mdxWrapper/mdxWrapper';

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
      <section className="content-wrapper grid">
        <MdxWrapper layout="content-narrow" content={page.content} />
      </section>
    </main>
  );
};

export default Colophon;
