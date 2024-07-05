'use client';

import styles from './MobileNavigation.module.scss';
import { useState, useEffect } from 'react';
import { TOP_NAVIGATION } from '@/const/navigation';
import Link from 'next/link';
import FocusTrap from 'focus-trap-react';
import SocialIcons from '../SocialIcons/SocialIcons';

const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const escKeyHandler = (event) => {
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
            {TOP_NAVIGATION.map((item, index) => (
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
