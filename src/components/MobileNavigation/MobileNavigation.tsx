'use client';

/* Namespaces */
import React, { useState, useEffect } from 'react';

/* Components */
import FocusTrap from 'focus-trap-react';
import Link from 'next/link';
import SocialIcons from '../SocialIcons/SocialIcons';

/* Utils */
import styles from './MobileNavigation.module.scss';
import { NavigationItem } from '@/types/navigation';
import { topNavItems } from '@/scripts/getNavigationItems';

const MobileNavigation: React.FunctionComponent<{}> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleShowMenu = (): void => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const escKeyHandler = (event: KeyboardEvent): void => {
      if (showMenu && event.key === 'Escape') {
        setShowMenu(false);
      }
    };
    document.addEventListener('keydown', escKeyHandler);
    return () => {
      document.removeEventListener('keydown', escKeyHandler);
    };
  }, [showMenu]);
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__menu-stripe']}>
        <Link className="link--neutral" href={'/'}>
          Evgenii Grigorev
        </Link>
        <button
          className={`${styles['menu-button']} paragraph--bolder link--lighter transition--color`}
          onClick={handleShowMenu}
        >
          {showMenu ? 'Close' : 'Menu'}
        </button>
      </div>
      {showMenu ? (
        <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
          <ul className={styles['links']}>
            {topNavItems.map((item: NavigationItem, index: number) => (
              <li key={index}>
                <Link
                  className="link--lighter transition--color"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <SocialIcons />
            </li>
          </ul>
        </FocusTrap>
      ) : null}
    </div>
  );
};

export default MobileNavigation;
