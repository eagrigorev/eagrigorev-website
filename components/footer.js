import styles from './footer.module.scss';
import { LinkColor, LinkUnderline } from './link';

const Footer = () => {
  return (
    <footer className={styles['wrapper']}>
      <div className="container grid">
        <div className={styles['widgets--left']}>
          <h3 className={styles['title--left']}>
            Thank you for visiting! Want to stay updated?
          </h3>
          <ul className={styles['socials']}>
            <LinkColor link="/" title="Tw." />
            <LinkColor link="/" title="Yt." />
            <LinkColor link="/" title="Ig." />
            <LinkColor link="/" title="Bc." />
            <LinkColor link="/" title="Gh." />
          </ul>
        </div>
        <div className={styles['widgets--right']}>
          <h4 className={styles['title--right']}>Links</h4>
          <div className={styles['links-wrapper']}>
            <ul className={styles['links']}>
              <LinkUnderline link="/" title="Illustrations" />
              <LinkUnderline link="/" title="Music" />
              <LinkUnderline link="/" title="Arrangements" />
              <LinkUnderline link="/" title="Projects" />
              <LinkUnderline link="/" title="Journal" />
            </ul>
            <ul className={styles['links']}>
              <LinkUnderline link="/" title="About" />
              <LinkUnderline link="/" title="Now" />
              <LinkUnderline link="/" title="Shop" />
              <LinkUnderline link="/" title="Colophon" />
              <LinkUnderline link="/" title="Library" />
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
