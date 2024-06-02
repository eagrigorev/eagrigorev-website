import styles from './TopNavigation.module.scss';
import { TOP_NAVIGATION } from '@/const/TOP_NAVIGATION';
import Link from 'next/link';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const TopNavigation = () => {
  return (
    <nav className={`${styles['wrapper']} paragraph--bolder`}>
      <Link className="link--neutral" href={'/'}>
        Evgenii Grigorev
      </Link>
      <ul className={styles['links']}>
        {TOP_NAVIGATION.map((item, index) => (
          <li key={index}>
            <Link className="link--lighter transition--color" href={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <DropdownMenu navigationItems={TOP_NAVIGATION} />
    </nav>
  );
};

export default TopNavigation;
