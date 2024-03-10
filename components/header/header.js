import styles from './header.module.scss';
import { topNavigation } from '@/utils/getNavigationItems';
import Logo from '../logo/logo';
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
