import styles from './navigation.module.scss';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className={styles['wrapper']}>
      <Link className={styles['left']} href={'/'}>
        <p>Image</p>
        <p>Evgenii Grigorev</p>
      </Link>
      <ul className={styles['right']}>
        <li>
          <Link href={'/'}>Work</Link>
        </li>
        <li>
          <Link href={'/'}>Work</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
