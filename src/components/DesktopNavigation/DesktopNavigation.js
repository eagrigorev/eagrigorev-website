import styles from './DesktopNavigation.module.scss';
import { TOP_NAVIGATION } from '@/const/navigation';
import Link from 'next/link';
import SocialIcons from '../SocialIcons/SocialIcons';

const DesktopNavigation = () => {
  return (
    <div className={styles['wrapper']}>
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
        <li>
          <SocialIcons />
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavigation;
