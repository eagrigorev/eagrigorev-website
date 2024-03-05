import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles['wrapper']}>
      <div className="container grid">
        <div className={styles['widgets--left']}>
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
        </div>
        <div className={styles['widgets--right']}>
          <h4 className={styles['title--right']}>Links</h4>
          <div className={styles['links-wrapper']}>
            <ul className={styles['links']}>
              <li>
                <Link className="link-underline" href={'/music'}>
                  Music
                </Link>
              </li>
            </ul>
            <ul className={styles['links']}>
              <li>
                <Link className="link-underline" href={'/'}>
                  Home
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
