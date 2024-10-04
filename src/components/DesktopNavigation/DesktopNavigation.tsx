/* Namespaces */
import React from 'react';

/* Components */
import Link from 'next/link';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

/* Utils */
import styles from './DesktopNavigation.module.scss';
import { NavigationItem } from '@/types/navigationItem';
import { navigationItems } from '@/scripts/getNavigationItems';

const DesktopNavigation: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <Link className="link--neutral" href={'/'}>
        Evgenii Grigorev
      </Link>
      <ul className={styles['links']}>
        {navigationItems.top.map(
          (item: NavigationItem, index: number): React.JSX.Element => (
            <li key={index}>
              <Link className="link--lighter transition--color" href={item.url}>
                {item.title}
              </Link>
            </li>
          )
        )}
        <li>
          <SocialIcons />
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavigation;
