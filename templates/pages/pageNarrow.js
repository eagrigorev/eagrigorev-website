import styles from './page.module.scss';
import Title from '@/components/title/title';
import MdxWrapper from '@/components/mdxWrapper/mdxWrapper';

const PageNarrow = ({
  isWide,
  showMeta,
  title,
  subtitle,
  category,
  datePosted,
  dateEdited,
  content,
}) => {
  return (
    <main className="container">
      <Title
        isWide={isWide}
        showMeta={showMeta}
        title={title}
        subtitle={subtitle}
        category={category}
        datePosted={datePosted}
        dateEdited={dateEdited}
      />
      <section className={`${styles['wrapper']} grid`}>
        <MdxWrapper layout="content-narrow" content={content} />
      </section>
    </main>
  );
};

export default PageNarrow;
