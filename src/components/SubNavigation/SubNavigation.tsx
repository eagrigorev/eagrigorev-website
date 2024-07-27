/* Namespaces */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Utils */
import styles from './SubNavigation.module.scss';
import { NavigationItem } from '@/utils/types';

type Props = {
  navigationItems: NavigationItem[];
  showAll: boolean;
};

const SubNavigation: React.FunctionComponent<Props> = ({
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

export default SubNavigation;
