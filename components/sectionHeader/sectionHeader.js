import styles from './sectionHeader.module.scss';
import { categoriesNavigation } from '@/utils/getNavigationItems';
import Navigation from '../navigation/navigation';
const SectionHeader = () => {
  return (
    <header className={styles['wrapper']}>
      <div className={styles['title-wrapper']}>
        <h3 className={styles['title']}>Updates</h3>
        <Navigation links={categoriesNavigation} />
      </div>
      <h4 className={styles['subtitle']}>
        Recent posts from all the categories
      </h4>
    </header>
  );
};

export default SectionHeader;
