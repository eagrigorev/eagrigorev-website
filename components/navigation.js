import styles from './navigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <nav className={styles['wrapper']}>
      <Link className={styles['left']} href={'/'}>
        <Image className={styles['logo']} alt="Website Logo" />
        <p className={styles['title']}>Evgenii Grigorev</p>
      </Link>
      <ul className={styles['right-desktop']}>
        <li>
          <Link className="link-underline" href={'/'}>
            Work
          </Link>
        </li>
        <li>
          <Link className="link-underline" href={'/'}>
            About
          </Link>
        </li>
        <li>
          <Link className="link-underline" href={'/'}>
            Now
          </Link>
        </li>
      </ul>
      <ul className={styles['right-mobile']}>
        <li>
          <Link className="link-underline" href={'/'}>
            Menu
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
