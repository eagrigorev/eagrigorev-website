'use client';

import styles from './TopNavigation.module.scss';
import { useState, useRef, useEffect } from 'react';
import { TOP_NAVIGATION } from '@/const/navigation';
import Link from 'next/link';

const TopNavigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dropdownWrapper = useRef();
  const button = useRef();
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        (showDropdown &&
          dropdownWrapper.current &&
          !dropdownWrapper.current.contains(event.target) &&
          !button.current.contains(event.target)) ||
        event.key === 'Escape'
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);
    document.addEventListener('keydown', clickOutsideHandler);
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
      document.removeEventListener('keydown', clickOutsideHandler);
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
          ref={button}
        >
          {showDropdown ? 'Close' : 'Menu'}
        </button>
      </div>
      {showDropdown ? (
        <ul className={styles['links--mobile']} ref={dropdownWrapper}>
          {TOP_NAVIGATION.map((item, index) => (
            <li key={index}>
              <Link className="link--lighter transition--color" href={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default TopNavigation;
