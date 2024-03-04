'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './navigation.module.scss';
import {
  categories,
  desktopNavigation,
  mobileNavigation,
} from '@/utils/navigationItems';
import MenuItem from '../menuItem/menuItem';

const DesktopNavigation = () => {
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const handleDropdown = () => {
    setCategoriesDropdown(!categoriesDropdown);
  };
  let ref = useRef();
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        categoriesDropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setCategoriesDropdown(false);
      }
    };
    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
    };
  }, [categoriesDropdown]);
  return (
    <ul
      className={`${styles['wrapper']} ${styles['wrapper__desktop']}`}
      ref={ref}
    >
      {desktopNavigation.map((item, index) => (
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
  let ref = useRef();
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (menuDropdown && ref.current && !ref.current.contains(event.target)) {
        setMenuDropdown(false);
      }
    };
    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
    };
  }, [menuDropdown]);
  return (
    <ul
      className={`${styles['wrapper']} ${styles['wrapper__mobile']}`}
      ref={ref}
    >
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

const CategoriesNavigation = () => {
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const handleDropdown = () => {
    setCategoriesDropdown(!categoriesDropdown);
  };
  let ref = useRef();
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        categoriesDropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setCategoriesDropdown(false);
      }
    };
    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
    };
  }, [categoriesDropdown]);
  return (
    <ul
      className={`${styles['wrapper']} ${styles['wrapper__desktop']}`}
      ref={ref}
    >
      {categories.map((item, index) => (
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

export { DesktopNavigation, MobileNavigation, CategoriesNavigation };
