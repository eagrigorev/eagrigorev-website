import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { desktopNavigation, mobileNavigation } from '@/utils/navigationItems';
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
      <Navigation links={desktopNavigation} isDesktop={true} />
      <Navigation links={mobileNavigation} isDesktop={false} />
    </nav>
  );
};

export default Header;
