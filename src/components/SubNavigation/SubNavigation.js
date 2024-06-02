import styles from './SubNavigation.module.scss';
import Link from 'next/link';

const SubNavigation = ({ navigationItems, showAll }) => {
  return (
    <div className={`${styles['wrapper']} meta-categories-text`}>
      <ul className={styles['links']}>
        {showAll ? (
          <li>
            <Link className="link--darker transition--color" href={'/'}>
              All
            </Link>
          </li>
        ) : null}
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
