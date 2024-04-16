'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';

const Navigation = ({ links }) => {
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
  return (
    <ul className={styles['wrapper']} ref={ref}>
      {links.map((item, index) => (
        <MenuItem
          item={item}
          showDropdown={showDropdown}
          handleDropdown={handleDropdown}
          key={index}
        />
      ))}
    </ul>
  );
};

export default Navigation;

const MenuItem = ({ item, showDropdown, handleDropdown }) => {
  return (
    <li className={item.isDesktop ? styles['desktop'] : styles['mobile']}>
      {item.submenu ? (
        <>
          <span
            className="link link--dropdown heading heading--regular-m-100"
            onClick={handleDropdown}
          >
            {item.title}
          </span>
          {showDropdown ? (
            <ul className={styles['dropdown-wrapper']}>
              {item.submenu.map((subItem, index) => (
                <li key={index}>
                  <Link
                    className="link link--color heading heading--regular-s-100"
                    href={subItem.url}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : (
        <Link
          className="link link--underline heading heading--regular-m-100"
          href={item.url}
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};
