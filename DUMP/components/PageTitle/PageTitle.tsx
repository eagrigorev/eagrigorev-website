/* Namespaces */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Utils */
import styles from './PageTitle.module.scss';
import { PostCategory } from '../../types/post';
import { normalize } from '@/scripts/utils';

type Props = {
  title: string;
  showSeparator?: boolean;
  showMeta?: boolean;
  dateEdited?: string;
  category?: PostCategory;
};

const PageTitle: React.FunctionComponent<Props> = ({
  title,
  showSeparator,
  showMeta,
  dateEdited,
  category,
}) => {
  const classList = showSeparator
    ? `${styles['heading--centered']} ${styles['separator']} heading--h1`
    : `${styles['heading--left']} heading--h1`;
  return (
    <header className={styles['wrapper']}>
      <div className="grid">
        <h1 className={classList}>{title}</h1>
      </div>
      {showMeta ? (
        <div className={`${styles['meta']} small-uppercase`}>
          <p>{dateEdited}</p>
          <Link
            className="link--darker transition--color"
            href={`/${normalize(category)}`}
          >
            {category}
          </Link>
        </div>
      ) : null}
    </header>
  );
};

export default PageTitle;
