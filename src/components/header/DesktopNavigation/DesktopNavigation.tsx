/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';
import SocialIcons from '@/components/common/SocialIcons/SocialIcons';

/* Data */
import headerNavigation from '@/data/navigation-items/headerNavigation.json';

/* Style */
import styles from './DesktopNavigation.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

const DesktopNavigation: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <Link className="jost-bold--m link-simple" href={'/'}>
        Evgenii Grigorev
      </Link>
      <div className={styles['nav-items-wrapper']}>
        <ul className={`jost-bold--s list-simple ${styles['links']}`}>
          {headerNavigation.map(
            (item: NavigationItem, index: number): React.JSX.Element => (
              <li key={index}>
                <Link className="link-simple" href={item.url}>
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
        <SocialIcons showFollowText={true} />
      </div>
    </div>
  );
};

export default DesktopNavigation;
