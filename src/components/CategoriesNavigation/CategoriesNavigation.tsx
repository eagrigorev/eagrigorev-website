/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Data */
import categories from '@/data/categories.json';

/* Style */
import styles from './CategoriesNavigation.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

type Props = {
  showBackLink: boolean;
};

const CategoriesNavigation: React.FunctionComponent<Props> = ({
  showBackLink,
}) => {
  return (
    <div className={`categories ${styles['wrapper']}`}>
      <ul className={styles['items']}>
        {showBackLink ? (
          <li>
            <Link className="animation--increase-opacity" href="/">
              All
            </Link>
          </li>
        ) : null}
        {categories.map((item: NavigationItem, index: number) => (
          <li key={index}>
            <Link className="animation--increase-opacity" href={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesNavigation;
