'use client';

/* GLobal */
import React, { useEffect, useState } from 'react';
import styles from './HeaderNavigation.module.scss';

/* Components */
import FocusTrap from 'focus-trap-react';
import Link from 'next/link';
import SocialIcons from '@/components/navigation/SocialIcons/SocialIcons';

/* Utils */
import headerNavigation from '@/utils/data/headerNavigation.json';
import { NavigationItem } from '@/utils/types/common';

const HeaderNavigation: React.FunctionComponent<{}> = () => {
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
    <nav className="paragraph--bolder">
      <div className={styles['wrapper--desktop']}>
        <Link className="link--neutral" href={'/'}>
          Evgenii Grigorev
        </Link>
        <div className={styles['navigation']}>
          <ul className={`${styles['links']} ${styles['links--desktop']}`}>
            {headerNavigation.map(
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
      <div className={styles['wrapper--mobile']}>
        <div className={styles['menu__stripe']}>
          <Link className="link--neutral" href={'/'}>
            Evgenii Grigorev
          </Link>
          <button
            className={`${styles['menu__button']} paragraph--bolder link--lighter transition--color`}
            onClick={handleShowMenu}
          >
            {showMenu ? 'Close' : 'Menu'}
          </button>
        </div>
        {showMenu ? (
          <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
            <ul className={`${styles['links']} ${styles['links--mobile']}`}>
              {headerNavigation.map((item: NavigationItem, index: number) => (
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
    </nav>
  );
};

export default HeaderNavigation;
