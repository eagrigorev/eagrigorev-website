import getPage from '@/src/utils/getPage';
import Title from '@/components/title/title';
import ImageSingle from '@/components/imageSingle/imageSingle';
import MdxWrapper from '@/components/mdxWrapper/mdxWrapper';

const About = () => {
  const page = getPage('about.mdx');
  return (
    <main className="container">
      <Title
        isWide={true}
        showMeta={false}
        title={page.meta.title}
        subtitle={page.meta.subtitle}
      />
      <section className="content-wrapper grid">
        <ImageSingle
          src="about.jpg"
          alt="Evgenii Grigorev"
          description="Image by Svetlana Krestiantseva"
          type="wide-half"
        />
        <div className="content-wide-split">
          <MdxWrapper content={page.content} />
        </div>
      </section>
    </main>
  );
};

export default About;
