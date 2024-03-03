'use client';

import styles from './navigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownMobile, setShowDropdownMobile] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleDropdownMobile = () => {
    setShowDropdownMobile(!showDropdownMobile);
  };
  return (
    <nav className={styles['wrapper']}>
      <Link className={styles['left']} href={'/'}>
        <Image
          className={styles['logo']}
          src={'/images/logo.png'}
          width={60}
          height={60}
          alt="Website Logo"
        />
        <p className={styles['title']}>Evgenii Grigorev</p>
      </Link>
      <ul className={styles['right-desktop']}>
        <li>
          <Link className="link-underline" href={'/'}>
            Home
          </Link>
        </li>
        <li className="link-dropdown" onClick={handleDropdown}>
          <span className="link-underline">Categories</span>
        </li>
      </ul>
      <ul className={styles['right-mobile']}>
        <li className="link-dropdown" onClick={handleDropdownMobile}>
          <span className="link-underline">Menu</span>
        </li>
      </ul>
      {showDropdown ? (
        <ul className={`${styles['dropdown']} ${styles['right-desktop']}`}>
          <li>
            <Link className="link-color" href={'/music'}>
              Music
            </Link>
          </li>
        </ul>
      ) : null}
      {showDropdownMobile ? (
        <ul
          className={`${styles['dropdown-mobile']} ${styles['right-mobile']}`}
        >
          <li>
            <Link className="link-color" href={'/music'}>
              Music
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navigation;
