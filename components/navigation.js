import styles from './navigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { LinkUnderline } from './link';

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
        <LinkUnderline link="/" title="Home" />
      </ul>
      <ul className={styles['right-mobile']}>
        <LinkUnderline link="/" title="Menu" />
      </ul>
    </nav>
  );
};

export default Navigation;
