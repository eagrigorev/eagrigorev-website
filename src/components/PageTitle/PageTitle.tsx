/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Scripts */
import { generateSlug } from '@/scripts/generateSlug';

/* Style */
import styles from './PageTitle.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';

type Props = {
  layout: 'left' | 'centered' | 'centered-meta';
  meta?: Meta;
  title?: string;
  navigationItems?: NavigationItem[];
  showBackLink?: boolean;
};

const PageTitle: React.FunctionComponent<Props> = ({
  layout,
  meta,
  title,
  navigationItems,
  showBackLink,
}) => {
  return (
    <header className={`grid ${styles['wrapper']}`}>
      {layout === 'left' ? (
        <div className={styles['left__wrapper']}>
          <h1 className="spectral-heading--h1">{title}</h1>
          <div className="jost-uppercase--xs">
            <ul className={`list-simple ${styles['left__categories']}`}>
              {showBackLink ? (
                <li>
                  <Link className="link-grey" href="/">
                    All
                  </Link>
                </li>
              ) : null}
              {navigationItems.map((item: NavigationItem, index: number) => (
                <li key={index}>
                  <Link className="link-grey" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : layout === 'centered' ? (
        <div className={styles['centered__wrapper']}>
          <h1 className="spectral-heading--h1">{title}</h1>
        </div>
      ) : layout === 'centered-meta' ? (
        <div className={styles['centered-meta__wrapper']}>
          <h1
            className={`spectral-heading--h1 ${styles['centered-meta__title']}`}
          >
            {meta.title}
          </h1>
          <div
            className={`jost-uppercase--xs ${styles['centered-meta__info']}`}
          >
            <p className={styles['centered-meta__info__date']}>
              {meta.dateEdited}
            </p>
            <Link className="link-grey" href={generateSlug(meta.category)}>
              {meta.category}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default PageTitle;
