'use client';

import styles from './navigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
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
        <li className="link-dropdown" onClick={() => console.log('CLICK')}>
          <span className="link-underline">Categories</span>
        </li>
      </ul>
      <ul className={styles['right-mobile']}>
        <li className="link-dropdown" onClick={() => console.log('CLICK')}>
          <span className="link-underline">Menu</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
