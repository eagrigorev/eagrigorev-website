import styles from './footer.module.scss';
import { categories, pages, socialIcons } from '@/utils/getNavigationItems';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles['wrapper']}>
      <div className="container grid">
        <div
          className={`${styles['widget-container']} ${styles['social-section']}`}
        >
          <h3 className={`${styles['social-section__title']} heading`}>
            Thank you for visiting! Want to stay updated?
          </h3>
          <ul className={styles['social-section__icons']}>
            {socialIcons.map((icon, index) => (
              <li key={index}>
                <Link className="link link--color" href={icon.url}>
                  {icon.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className={`link link--color ${styles['social-section__privacy']}`}
            href={'/'}
          >
            Privacy & Security
          </Link>
        </div>
        <div className={styles['widget-container']}>
          <h4 className={`${styles['links-section__title']} heading`}>Links</h4>
          <div className={styles['links-section__wrapper']}>
            <ul className={styles['links-section__links']}>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link className="link link--color" href={category.url}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={styles['links-section__links']}>
              {pages.map((page, index) => (
                <li key={index}>
                  <Link className="link link--color" href={page.url}>
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles['copyright']} heading`}>
        <p>© 2024 Evgenii Grigorev</p>
      </div>
    </footer>
  );
};

export default Footer;
