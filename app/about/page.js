import getPage from '@/utils/getPage';
import Title from '@/components/title/title';
import ContentWide from '@/components/contentWide/contentWide';

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
      <ContentWide
        image="about.jpg"
        alt="Evgenii Grigorev"
        description="Image by Svetlana Krestiantseva"
        content={page.content}
      />
    </main>
  );
};

export default About;
