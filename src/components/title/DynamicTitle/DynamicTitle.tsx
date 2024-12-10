/* Global */
import React from 'react';

/* Components */
import PageTitleCentered from '@/components/title/PageTitleCentered/PageTitleCentered';
import PageTitleLeft from '@/components/title/PageTitleLeft/PageTitleLeft';
import PostTitle from '@/components/title/PostTitle/PostTitle';

/* Style */
import styles from './DynamicTitle.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';

type Props = {
  layout: 'page-left' | 'page-centered' | 'post';
  postMeta?: Meta;
  title?: string;
};

const DynamicTitle: React.FunctionComponent<Props> = ({
  layout,
  postMeta,
  title,
}) => {
  return (
    <header className={`grid ${styles['wrapper']}`}>
      {layout === 'page-left' ? (
        <PageTitleLeft title={title} />
      ) : layout === 'page-centered' ? (
        <PageTitleCentered title={title} />
      ) : layout === 'post' ? (
        <PostTitle postMeta={postMeta} />
      ) : null}
    </header>
  );
};

export default DynamicTitle;
