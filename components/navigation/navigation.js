'use client';

import { useState } from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';
import Dropdown from '../dropdown/dropdown';

const DesktopNavigation = () => {
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const handleDropdown = () => {
    setCategoriesDropdown(!categoriesDropdown);
  };
  return (
    <ul className={`${styles['wrapper']} ${styles['wrapper__desktop']}`}>
      <li>
        <Link className="link-underline" href={'/'}>
          Home
        </Link>
      </li>
      <li className="link-dropdown" onClick={handleDropdown}>
        <span className="link-underline">Categories</span>
        {categoriesDropdown ? (
          <Dropdown
            className={styles['dropdown__desktop']}
            items={['Music', 'Illustrations', 'Very Long Item Goes Here']}
          />
        ) : null}
      </li>
    </ul>
  );
};

const MobileNavigation = () => {
  const [menuDropdown, setMenuDropdown] = useState(false);
  const handleDropdownMobile = () => {
    setMenuDropdown(!menuDropdown);
  };
  return (
    <ul className={`${styles['wrapper']} ${styles['wrapper__mobile']}`}>
      <li className="link-dropdown" onClick={handleDropdownMobile}>
        <span className="link-underline">
          {menuDropdown ? 'Close' : 'Menu'}
        </span>
        {menuDropdown ? (
          <Dropdown
            className={styles['dropdown__mobile']}
            items={['Home', 'Music', 'Something very long goes here']}
          />
        ) : null}
      </li>
    </ul>
  );
};

export { DesktopNavigation, MobileNavigation };
