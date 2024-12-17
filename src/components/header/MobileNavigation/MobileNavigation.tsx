'use client';

/* Global */
import React, { useState, useEffect } from 'react';

/* Components */
import FocusTrap from 'focus-trap-react';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '@/components/common/SocialIcons/SocialIcons';

/* Data */
import headerNavigation from '@/data/navigation-items/headerNavigation.json';

/* Style */
import styles from './MobileNavigation.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

const MobileNavigation: React.FunctionComponent<{}> = () => {
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
    <>
      <div className={styles['wrapper']}>
        <Link className="jost-bold--m link-simple" href={'/'}>
          Evgenii Grigorev
        </Link>
        <button
          className={styles['menu__button']}
          onClick={handleShowMobileMenu}
        >
          <Image
            className={`opacity--decrease ${styles['menu__icon']}`}
            src="images/icons/icons8-menu.svg"
            alt="Menu icon"
            width={25}
            height={25}
          />
        </button>
      </div>
      {showMobileMenu ? (
        <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
          <div className={styles['nav-items-wrapper']}>
            <ul className={`jost-bold--s list-simple ${styles['links']}`}>
              {headerNavigation.map((item: NavigationItem, index: number) => (
                <li key={index}>
                  <Link className="link-simple" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialIcons showFollowText={false} />
          </div>
        </FocusTrap>
      ) : null}
    </>
  );
};

export default MobileNavigation;
