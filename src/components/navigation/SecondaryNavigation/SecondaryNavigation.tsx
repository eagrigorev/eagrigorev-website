/* Global */
import React from 'react';
import styles from './SecondaryNavigation.module.scss';

/* Components */
import Link from 'next/link';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

type Props = {
  navigationItems: NavigationItem[];
};

const SecondaryNavigation: React.FunctionComponent<Props> = ({
  navigationItems,
}) => {
  return (
    <div className={`${styles['wrapper']} small-uppercase`}>
      <ul className={styles['links']}>
        {navigationItems.map((item: NavigationItem, index: number) => (
          <li key={index}>
            <Link className="link--darker transition--color" href={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondaryNavigation;
