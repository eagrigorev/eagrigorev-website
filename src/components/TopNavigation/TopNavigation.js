'use client';

import styles from './TopNavigation.module.scss';
import { useState, useRef, useEffect } from 'react';
import { TOP_NAVIGATION } from '@/const/navigation';
import Link from 'next/link';
import FocusTrap from 'focus-trap-react';

const TopNavigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dropdownWrapper = useRef();
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        showDropdown &&
        dropdownWrapper.current &&
        !dropdownWrapper.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };
    const escKeyHandler = (event) => {
      if (showDropdown && event.key === 'Escape') {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);
    document.addEventListener('keydown', escKeyHandler);
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
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
        </ul>
        <button
          className={`${styles['menu-button']} paragraph--bolder link--lighter transition--color`}
          onClick={handleShowDropdown}
        >
          {showDropdown ? 'Close' : 'Menu'}
        </button>
      </div>
      {showDropdown ? (
        <FocusTrap>
          <ul className={styles['links--mobile']} ref={dropdownWrapper}>
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
          </ul>
        </FocusTrap>
      ) : null}
    </nav>
  );
};

export default TopNavigation;
