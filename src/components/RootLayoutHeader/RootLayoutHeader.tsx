'use client';

/* Global */
import React, { useState, useEffect } from 'react';

/* Components */
import FocusTrap from 'focus-trap-react';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

/* Data */
import headerNavigation from '@/data/navigation-items/headerNavigation.json';

/* Style */
import styles from './RootLayoutHeader.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

const RootLayoutHeader: React.FunctionComponent<{}> = () => {
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
    <nav className={`${styles['wrapper']}`}>
      <div className={styles['desktop']}>
        <Link className="jost-bold--m link-black" href={'/'}>
          Evgenii Grigorev
        </Link>
        <div className={styles['desktop__nav-items']}>
          <ul
            className={`jost-bold--s list-simple ${styles['desktop__links']}`}
          >
            {headerNavigation.map(
              (item: NavigationItem, index: number): React.JSX.Element => (
                <li key={index}>
                  <Link className="link-black" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              )
            )}
          </ul>
          <SocialIcons showFollowText={true} />
        </div>
      </div>
      <div className={styles['mobile']}>
        <Link className="jost-bold--m link-black" href={'/'}>
          Evgenii Grigorev
        </Link>
        <button
          className={styles['mobile__menu-button']}
          onClick={handleShowMobileMenu}
        >
          <Image
            className={`opacity--decrease ${styles['mobile__menu-icon']}`}
            src="images/icons/icons8-menu.svg"
            alt="Menu icon"
            width={25}
            height={25}
          />
        </button>
      </div>
      {showMobileMenu ? (
        <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
          <div className={styles['mobile__nav-items']}>
            <ul
              className={`jost-bold--s list-simple ${styles['mobile__links']}`}
            >
              {headerNavigation.map((item: NavigationItem, index: number) => (
                <li key={index}>
                  <Link className="link-black" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialIcons showFollowText={false} />
          </div>
        </FocusTrap>
      ) : null}
    </nav>
  );
};

export default RootLayoutHeader;
