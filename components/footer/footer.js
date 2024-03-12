import styles from './footer.module.scss';
import LinksWidget from '../linksWidget/linksWidget';
import SocialWidget from '../socialWidget/socialWidget';

const Footer = () => {
  return (
    <footer className={styles['wrapper']}>
      <div className="container grid">
        <SocialWidget />
        <LinksWidget />
      </div>
      <div className={`${styles['copyright']} heading`}>
        <p>© 2024 Evgenii Grigorev</p>
      </div>
    </footer>
  );
};

export default Footer;
