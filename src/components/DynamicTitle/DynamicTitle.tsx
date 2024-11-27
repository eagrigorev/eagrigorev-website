/* Global */
import React from 'react';

/* Components */
import PageTitleLeft from '@/components/PageTitleLeft/PageTitleLeft';

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
      {layout === 'page-left' ? <PageTitleLeft title={title} /> : null}
    </header>
  );
};

export default DynamicTitle;
