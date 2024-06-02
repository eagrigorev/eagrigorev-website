'use client';

import styles from './DropdownMenu.module.scss';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const DropdownMenu = ({ navigationItems }) => {
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
    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
    };
  }, [showDropdown]);
  return (
    <div className={styles['wrapper']} ref={dropdownWrapper}>
      <button
        className={`${styles['menu-button']} paragraph--bolder link--lighter transition--color`}
        onClick={handleShowDropdown}
      >
        {showDropdown ? 'Close' : 'Menu'}
      </button>
      {showDropdown ? (
        <ul className={styles['links']}>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link className="link--lighter transition--color" href={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
