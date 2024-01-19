import styles from './header.module.scss';

import Link from 'next/link';

const Header = () => {
  return (
    <nav className={styles['wrapper']}>
      <div className={styles['navigation-left']}>
        <p>LOGO.PNG</p>
        <p className={styles['title']}>Evgenii Grigorev</p>
      </div>
      <ul className={styles['navigation-right']}>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/roadmap'}>Roadmap</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
