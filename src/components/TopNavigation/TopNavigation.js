import styles from './TopNavigation.module.scss';
import Link from 'next/link';
// import topNavigationItems from '@/const/topNavigationItems';

const TopNavigation = () => {
  return (
    <nav className={`${styles['wrapper']} navigation-text`}>
      <Link href={'/'}>Evgenii Grigorev</Link>
      <ul className={styles['links--desktop']}>
        {topNavigationItems.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <button className={`${styles['menu']} navigation-text`}>Menu</button>
    </nav>
  );
};

export default TopNavigation;

const topNavigationItems = [
  {
    title: 'Portfolio',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Now',
    url: '/now',
  },
];
