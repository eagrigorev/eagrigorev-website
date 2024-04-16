import styles from './footer.module.scss';
import { categories, pages, socialIcons } from '@/utils/getNavigationItems';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles['wrapper']}>
      <div className="container grid">
        <SocialWidget />
        <LinksWidget />
      </div>
      <div className={`${styles['copyright']} heading heading--regular-m-100`}>
        <p>© 2024 Evgenii Grigorev</p>
      </div>
    </footer>
  );
};

export default Footer;

const SocialWidget = () => {
  return (
    <div className={styles['social-widget__wrapper']}>
      <h3 className="heading heading--medium-2xl-125">
        Thank you for visiting! Want to stay updated?
      </h3>
      <ul className={styles['social-widget__icons']}>
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <Link
              className="link link--color paragraph paragraph--regular-m-100"
              href={icon.url}
            >
              {icon.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* <Link
        className="link link--color paragraph paragraph--regular-s-100"
        href={'/'}
      >
        Privacy & Security
      </Link> */}
    </div>
  );
};

const LinksWidget = () => {
  return (
    <div className={styles['links-widget__wrapper']}>
      <h4 className="heading heading--medium-xl-125">Links</h4>
      <div className={styles['links-widget__links-wrapper']}>
        <ul className={styles['links-widget__links']}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                className="link link--color heading heading--regular-m-100"
                href={category.url}
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles['links-widget__links']}>
          {pages.map((page, index) => (
            <li key={index}>
              <Link
                className="link link--color heading heading--regular-m-100"
                href={page.url}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
