/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Data */
import categories from '@/data/navigation-items/categories.json';

/* Style */
import styles from './PageTitle.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';

type Props = {
  layout: 'left' | 'centered' | 'centered-meta';
  meta?: Meta;
  title?: string;
  showBackLink?: boolean;
};

const PageTitle: React.FunctionComponent<Props> = ({
  layout,
  meta,
  title,
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
              {categories.map((item: NavigationItem, index: number) => (
                <li key={index}>
                  <Link className="link-grey" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default PageTitle;
