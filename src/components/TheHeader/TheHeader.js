import styles from './TheHeader.module.scss';
import Link from 'next/link';
import topNavigationItems from '@/const/topNavigationItems';

const TheHeader = () => {
  return (
    <nav className={`${styles['wrapper']} navigation--top`}>
      <Link href={'/'}>Evgenii Grigorev</Link>
      <ul className={styles['navigation']}>
        {topNavigationItems.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <button className={`${styles['menu']} navigation--top`}>Menu</button>
    </nav>
  );
};

export default TheHeader;
