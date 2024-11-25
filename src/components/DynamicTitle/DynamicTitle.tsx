/* Global */
import React from 'react';

/* Style */
import styles from './DynamicTitle.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';

type Props = {
  style: 'page-left' | 'page-centered' | 'post';
  postMeta?: Meta;
  title?: string;
};

const DynamicTitle: React.FunctionComponent<Props> = ({
  style,
  postMeta,
  title,
}) => {
  return (
    <header className={`grid ${styles['wrapper']}`}>
      {style === 'page-left' ? (
        <div className={styles['layout--page-left']}>
          <h1 className="heading--h1">{title}</h1>
        </div>
      ) : null}
    </header>
  );
};

export default DynamicTitle;
