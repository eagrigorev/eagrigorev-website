/* Global */
import React from 'react';

/* Data */
import categories from '@/data/categories.json';

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
    <header className={`${styles['wrapper']} ${styles[`wrapper--${style}`]}`}>
      {style === 'page-left' ? (
        <div>
          <h1 className="heading--h1">{title}</h1>
        </div>
      ) : null}
    </header>
  );
};

export default DynamicTitle;
