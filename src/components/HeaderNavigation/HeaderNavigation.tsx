'use client';

/* Global */
import React, { useState, useEffect } from 'react';

/* Components */
import FocusTrap from 'focus-trap-react';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

/* Data */
import headerNavigation from '@/data/headerNavigation.json';

/* Style */
import styles from './HeaderNavigation.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

const HeaderNavigation: React.FunctionComponent<{}> = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const handleShowMobileMenu = (): void => {
    setShowMobileMenu(!showMobileMenu);
  };
  useEffect(() => {
    const escKeyHandler = (event: KeyboardEvent): void => {
      if (showMobileMenu && event.key === 'Escape') {
        setShowMobileMenu(false);
      }
    };
    document.addEventListener('keydown', escKeyHandler);
    return () => {
      document.removeEventListener('keydown', escKeyHandler);
    };
  }, [showMobileMenu]);
  return (
    <nav className={`container header-navigation ${styles['wrapper']}`}>
      <div className={styles['wrapper__desktop']}>
        <Link className="header-navigation__logo" href={'/'}>
          Evgenii Grigorev
        </Link>
        <div className={styles['navigation__desktop']}>
          <ul
            className={`header-navigation__links ${styles['links__desktop']}`}
          >
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
          <SocialIcons style="extended" />
        </div>
      </div>
      <div className={styles['wrapper__mobile']}>
        <Link className="header-navigation__logo" href={'/'}>
          Evgenii Grigorev
        </Link>
        <button
          className={styles['menu-button']}
          onClick={handleShowMobileMenu}
        >
          <Image
            className={`animation--decrease-opacity ${styles['icon']}`}
            src="images/icons/icons8-menu.svg"
            alt="Menu icon"
            width={25}
            height={25}
          />
        </button>
      </div>
      {showMobileMenu ? (
        <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
          <div className={styles['navigation__mobile']}>
            <ul
              className={`header-navigation__links ${styles['links__mobile']}`}
            >
              {headerNavigation.map((item: NavigationItem, index: number) => (
                <li key={index}>
                  <Link className="animation--decrease-opacity" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialIcons style="default" />
          </div>
        </FocusTrap>
      ) : null}
    </nav>
  );
};

export default HeaderNavigation;
