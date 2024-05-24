'use client';

import styles from './DropdownMenu.module.scss';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const DropdownMenu = ({ links }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dropdown = useRef();
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        showDropdown &&
        dropdown.current &&
        !dropdown.current.contains(event.target)
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
    <div className={styles['wrapper']} ref={dropdown}>
      <button
        className={`${styles['menu']} paragraph--bolder`}
        onClick={handleShowDropdown}
      >
        {showDropdown ? 'Close' : 'Menu'}
      </button>
      {showDropdown ? (
        <ul className={styles['links']}>
          {links.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
