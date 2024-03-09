import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles['wrapper']}>
      <div className="container grid">
        <div className={`${styles['widgets']} ${styles['widgets--left']}`}>
          <h3 className={styles['title--left']}>
            Thank you for visiting! Want to stay updated?
          </h3>
          <ul className={styles['socials']}>
            <li>
              <Link className="link-color" href={'/'}>
                Ig.
              </Link>
            </li>
            <li>
              <Link className="link-color" href={'/'}>
                Bc.
              </Link>
            </li>
            <li>
              <Link className="link-color" href={'/'}>
                Gh.
              </Link>
            </li>
          </ul>
          <Link className={`link-color ${styles['privacy']}`} href={'/'}>
            Privacy & Security
          </Link>
        </div>
        <div className={styles['widgets']}>
          <h4 className={styles['title--right']}>Links</h4>
          <div className={styles['links-wrapper']}>
            <ul className={styles['links']}>
              <li>
                <Link className="link-color" href={'/'}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link-color" href={'/'}>
                  Now
                </Link>
              </li>
              <li>
                <Link className="link-color" href={'/'}>
                  Shop
                </Link>
              </li>
              <li>
                <Link className="link-color" href={'/'}>
                  Colophon
                </Link>
              </li>
              <li>
                <Link className="link-color" href={'/'}>
                  Library
                </Link>
              </li>
            </ul>
            <ul className={styles['links']}>
              <li>
                <Link className="link-color" href={'/'}>
                  Illustrations
                </Link>
              </li>
              <li>
                <Link className="link-color" href={'/music-and-tabs'}>
                  Music & Tabs
                </Link>
              </li>
              <li>
                <Link className="link-color" href={'/'}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className="link-color" href={'/'}>
                  Journal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles['copyright']}>
        <p>© 2024 Evgenii Grigorev</p>
      </div>
    </footer>
  );
};

export default Footer;
