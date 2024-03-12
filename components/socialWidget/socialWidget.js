import styles from './socialWidget.module.scss';
import { socialIcons } from '@/utils/getNavigationItems';
import Link from 'next/link';

const SocialWidget = () => {
  return (
    <div className={styles['wrapper']}>
      <h3 className={`${styles['title']} heading`}>
        Thank you for visiting! Want to stay updated?
      </h3>
      <ul className={styles['icons']}>
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <Link className="link link--color" href={icon.url}>
              {icon.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link className={`link link--color ${styles['privacy']}`} href={'/'}>
        Privacy & Security
      </Link>
    </div>
  );
};

export default SocialWidget;
