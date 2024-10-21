/* Global */
import React from 'react';
import styles from './DesktopNavigation.module.scss';

/* Components */
import Link from 'next/link';
import SocialIcons from '@/components/navigation/SocialIcons/SocialIcons';

/* Data */
import navigationItemsHeader from '@/data/navigationItemsHeader.json';

/* Types */
import { NavigationItem } from '@/types/navigationItem';

const DesktopNavigation: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <Link className="link--neutral" href={'/'}>
        Evgenii Grigorev
      </Link>
      <div className={styles['navigation']}>
        <ul className={styles['links']}>
          {navigationItemsHeader.map(
            (item: NavigationItem, index: number): React.JSX.Element => (
              <li key={index}>
                <Link
                  className="link--lighter transition--color"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
        <SocialIcons />
      </div>
    </div>
  );
};

export default DesktopNavigation;
