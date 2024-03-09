'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './navigation.module.scss';
import MenuItem from '../menuItem/menuItem';

const Navigation = ({ links, isDesktop }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  let ref = useRef();
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (showDropdown && ref.current && !ref.current.contains(event.target)) {
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
  if (isDesktop) {
    return (
      <ul className={`${styles['wrapper']} ${styles['desktop']}`} ref={ref}>
        {links.map((item, index) => (
          <MenuItem
            item={item}
            isVisible={showDropdown}
            visibilityHandler={handleDropdown}
            key={index}
          />
        ))}
      </ul>
    );
  } else {
    return (
      <ul className={`${styles['wrapper']} ${styles['mobile']}`} ref={ref}>
        {links.map((item, index) => (
          <MenuItem
            item={item}
            isVisible={showDropdown}
            visibilityHandler={handleDropdown}
            key={index}
          />
        ))}
      </ul>
    );
  }
};

export default Navigation;
