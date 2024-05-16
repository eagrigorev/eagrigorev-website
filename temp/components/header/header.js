import styles from './header.module.scss';
import { topNavigation } from '@/temp/getNavigationItems';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../navigation/navigation';

const Header = () => {
  return (
    <nav className={styles['wrapper']}>
      <Logo />
      <Navigation links={topNavigation} />
    </nav>
  );
};

export default Header;

const Logo = () => {
  return (
    <Link className={`${styles['logo__wrapper']} link`} href={'/'}>
      <Image
        className={styles['logo__image']}
        src={'/images/logo.png'}
        width={60}
        height={60}
        alt="Evgenii Grigorev Website Logo"
      />
      <p className="paragraph paragraph--medium-m-100">Evgenii Grigorev</p>
    </Link>
  );
};
