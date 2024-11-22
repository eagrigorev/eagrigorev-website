'use client';

/* Global */
import React, { useState, useEffect } from 'react';

/* Components */
import FocusTrap from 'focus-trap-react';
import Link from 'next/link';
import SocialIcons from '../SocialIcons/SocialIcons';

/* Data */
import headerNavigation from '@/data/headerNavigation.json';

/* Style */
import styles from './HeaderNavigation.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

const HeaderNavigation: React.FunctionComponent<{}> = () => {
  return (
    <nav className={`container header-navigation ${styles['wrapper']}`}>
      <div className={styles['wrapper__desktop']}>
        <Link className="header-navigation__logo" href={'/'}>
          Evgenii Grigorev
        </Link>
        <div className={styles['navigation']}>
          <ul className={`header-navigation__links ${styles['links']}`}>
            {headerNavigation.map(
              (item: NavigationItem, index: number): React.JSX.Element => (
                <li key={index}>
                  <Link className="animation--decrease-opacity" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              )
            )}
          </ul>
          <SocialIcons style="header" />
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
