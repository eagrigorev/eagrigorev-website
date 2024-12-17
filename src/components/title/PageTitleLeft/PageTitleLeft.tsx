/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Data */
import categories from '@/data/navigation-items/categories.json';

/* Style */
import styles from './PageTitleLeft.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

type Props = {
  title?: string;
  showBackLink: boolean;
};

const PageTitleLeft: React.FunctionComponent<Props> = ({
  title,
  showBackLink,
}) => {
  return (
    <div className={styles['wrapper']}>
      <h1 className="spectral-heading--h1">{title}</h1>
      <div className="jost-uppercase--xs">
        <ul className={`list-simple ${styles['categories']}`}>
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
  );
};

export default PageTitleLeft;
