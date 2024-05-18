import styles from './CategoriesNavigation.module.scss';
import Link from 'next/link';

const CategoriesNavigation = () => {
  return (
    <div className={`${styles['wrapper']} meta-categories-text`}>
      <ul className={styles['links']}>
        {categoriesNavigationItems.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesNavigation;

const categoriesNavigationItems = [
  {
    title: 'Illustrations',
    url: '/illustrations',
  },
  {
    title: 'Music & Tabs',
    url: '/music-and-tabs',
  },
];
