import styles from './sectionHeader.module.scss';
import { desktopCategories, mobileCategories } from '@/utils/navigationItems';
import Navigation from '../navigation/navigation';
const SectionHeader = () => {
  return (
    <header className={styles['wrapper']}>
      <div className={styles['title-wrapper']}>
        <h3 className={styles['title']}>Updates</h3>
        <Navigation links={desktopCategories} isDesktop={true} />
        <Navigation links={mobileCategories} isDesktop={false} />
      </div>
      <h4 className={styles['subtitle']}>
        Recent posts from all the categories
      </h4>
    </header>
  );
};

export default SectionHeader;
