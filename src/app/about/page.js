import styles from './page.module.scss';
import { getPage } from '@/scripts/getMarkdown';
import PageTitle from '@/components/PageTitle/PageTitle';
import ImageWithCaption from '@/components/ImageWithCaption/ImageWithCaption';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';

const About = () => {
  const page = getPage('about.mdx');
  return (
    <main className="container">
      <PageTitle title={page.meta.title} showSeparator={true} />
      <section className={`${styles['wrapper']} grid`}>
        <ImageWithCaption
          src="about.jpg"
          alt="Evgenii Grigorev"
          caption="Image by Svetlana Krestiantseva"
          layout="layout--left-split"
        />
        <div className={styles['wrapper--content']}>
          <MarkdownWrapper content={page.content} />
        </div>
      </section>
    </main>
  );
};

export default About;