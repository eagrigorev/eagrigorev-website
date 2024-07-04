'use client';

import styles from './TopNavigation.module.scss';
import { useState, useEffect } from 'react';
import { TOP_NAVIGATION } from '@/const/navigation';
import Link from 'next/link';
import FocusTrap from 'focus-trap-react';

const TopNavigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  useEffect(() => {
    const escKeyHandler = (event) => {
      if (showDropdown && event.key === 'Escape') {
        setShowDropdown(false);
      }
    };
    document.addEventListener('keydown', escKeyHandler);
    return () => {
      document.removeEventListener('keydown', escKeyHandler);
    };
  }, [showDropdown]);
  return (
    <nav className="paragraph--bolder">
      <div className={styles['wrapper']}>
        <Link className="link--neutral" href={'/'}>
          Evgenii Grigorev
        </Link>
        <ul className={styles['links--desktop']}>
          {TOP_NAVIGATION.map((item, index) => (
            <li key={index}>
              <Link className="link--lighter transition--color" href={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <ul className={styles['links--socials']}>
              <Link
                className="link--lighter transition--color"
                href={'https://www.instagram.com/eagrigorev/'}
              >
                Ig.
              </Link>
              <Link
                className="link--lighter transition--color"
                href={'https://github.com/eagrigorev/'}
              >
                Gh.
              </Link>
            </ul>
          </li>
        </ul>
        <button
          className={`${styles['menu-button']} paragraph--bolder link--lighter transition--color`}
          onClick={handleShowDropdown}
        >
          {showDropdown ? 'Close' : 'Menu'}
        </button>
      </div>
      {showDropdown ? (
        <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
          <ul className={styles['links--mobile']}>
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
              <ul className={styles['links--socials']}>
                <Link
                  className="link--lighter transition--color"
                  href={'https://www.instagram.com/eagrigorev/'}
                >
                  Ig.
                </Link>
                <Link
                  className="link--lighter transition--color"
                  href={'https://github.com/eagrigorev/'}
                >
                  Gh.
                </Link>
              </ul>
            </li>
          </ul>
        </FocusTrap>
      ) : null}
    </nav>
  );
};

export default TopNavigation;
