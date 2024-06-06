import styles from './SinglePageSplitTemplate.module.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import ImageWithCaption from '@/components/ImageWithCaption/ImageWithCaption';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';

const SinglePageSplitTemplate = ({
  showSeparator,
  showMeta,
  post,
  imageSrc,
  imageAlt,
  imageCaption,
  imageLayout,
}) => {
  return (
    <main className="container">
      <PageTitle
        title={post.meta.title}
        showSeparator={showSeparator}
        showMeta={showMeta}
      />
      <section className={`${styles['wrapper']} grid`}>
        <ImageWithCaption
          src={imageSrc}
          alt={imageAlt}
          caption={imageCaption}
          layout={imageLayout}
        />
        <div className={styles['wrapper--content']}>
          <MarkdownWrapper content={post.content} />
        </div>
      </section>
    </main>
  );
};

export default SinglePageSplitTemplate;
