/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Data */
import socialIcons from '@/data/socialIcons.json';

/* Style */
import styles from './SocialIcons.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

type Props = {
  style: 'header' | 'footer';
};

const SocialIcons: React.FunctionComponent<Props> = ({ style }) => {
  return (
    <div className={styles['wrapper']}>
      <p className={`header-navigation__links ${styles[`style--${style}`]}`}>
        follow:
      </p>
      <ul className={styles['icons']}>
        {socialIcons.map(
          (item: NavigationItem, index: number): React.JSX.Element => (
            <li key={index}>
              <Link href={item.url}>
                <Image
                  className={`animation--decrease-opacity ${styles['icon']}`}
                  src={`images/icons/icons8-${item.title.toLowerCase()}-${style}.svg`}
                  alt={`${item.title} icon`}
                  width={25}
                  height={25}
                />
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SocialIcons;
