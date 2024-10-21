/* Global */
import React from 'react';
import styles from './SecondaryNavigation.module.scss';

/* Components */
import Link from 'next/link';

/* Types */
import { NavigationItem } from '@/types/navigationItem';

type Props = {
  navigationItems: NavigationItem[];
  showAll: boolean;
};

const SecondaryNavigation: React.FunctionComponent<Props> = ({
  navigationItems,
  showAll,
}) => {
  if (!showAll) {
    navigationItems = navigationItems.filter((item) => {
      return item.title !== 'All';
    });
  }
  return (
    <div className={`${styles['wrapper']} small-uppercase`}>
      <ul className={styles['links']}>
        {navigationItems.map((item, index) => (
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
