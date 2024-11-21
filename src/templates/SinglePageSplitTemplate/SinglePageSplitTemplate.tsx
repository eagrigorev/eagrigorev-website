/* Namespaces */
import React from 'react';

/* Components */
import ImageWithCaption from '@/components/ImageWithCaption/ImageWithCaption';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';
import PageTitle from '@/components/PageTitle/PageTitle';

/* Utils */
import styles from './SinglePageSplitTemplate.module.scss';
import { Page } from '../../../DUMP/types/page';
import { ImageLayout } from '../../../DUMP/types/layout';

type Props = {
  showSeparator: boolean;
  showMeta: boolean;
  post: Page;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  imageLayout: ImageLayout;
};

const SinglePageSplitTemplate: React.FunctionComponent<Props> = ({
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
          <MarkdownWrapper layout="split" content={post.content} />
        </div>
      </section>
    </main>
  );
};

export default SinglePageSplitTemplate;
