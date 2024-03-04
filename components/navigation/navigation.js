'use client';

import { useState } from 'react';
import styles from './navigation.module.scss';
import { topLevelNavigation, mobileNavigation } from '@/utils/navigationItems';
import MenuItem from '../menuItem/menuItem';

const DesktopNavigation = () => {
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const handleDropdown = () => {
    setCategoriesDropdown(!categoriesDropdown);
  };
  return (
    <ul className={`${styles['wrapper']} ${styles['wrapper__desktop']}`}>
      {topLevelNavigation.map((item, index) => (
        <MenuItem
          item={item}
          isVisible={categoriesDropdown}
          visibilityHandler={handleDropdown}
          key={index}
        />
      ))}
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
      {mobileNavigation.map((item, index) => (
        <MenuItem
          item={item}
          isVisible={menuDropdown}
          visibilityHandler={handleDropdownMobile}
          key={index}
        />
      ))}
    </ul>
  );
};

export { DesktopNavigation, MobileNavigation };
