import styles from './TopNavigation.module.scss';
import Link from 'next/link';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const TopNavigation = () => {
  return (
    <nav className={`${styles['wrapper']} paragraph--bolder`}>
      <Link className="link--neutral" href={'/'}>
        Evgenii Grigorev
      </Link>
      <ul className={styles['links--desktop']}>
        {topNavigationItems.map((item, index) => (
          <li key={index}>
            <Link className="link--lighter transition--color" href={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <DropdownMenu links={topNavigationItems} />
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
