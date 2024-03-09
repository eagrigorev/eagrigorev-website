import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { topNavigation } from '@/utils/getNavigationItems';
import Navigation from '../navigation/navigation';

const Header = () => {
  return (
    <nav className={styles['wrapper']}>
      <Link className={styles['identity']} href={'/'}>
        <Image
          className={styles['logo']}
          src={'/images/logo.png'}
          width={60}
          height={60}
          alt="Website Logo"
        />
        <p className={styles['title']}>Evgenii Grigorev</p>
      </Link>
      <Navigation links={topNavigation} />
    </nav>
  );
};

export default Header;
