import styles from './SubNavigation.module.scss';
import Link from 'next/link';

const SubNavigation = ({ navigationItems, showAll }) => {
  if (!showAll) {
    navigationItems = navigationItems.filter((item) => {
      return item.title !== 'All';
    });
  }
  return (
    <div className={`${styles['wrapper']} meta-categories-text`}>
      <ul className={styles['links']}>
        {navigationItems.map((item, index) => (
          <li key={index}>
            <Link className="link--darker transition--color" href={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNavigation;
