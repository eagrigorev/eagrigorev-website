import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <span>© 2023 Evgenii Grigorev</span>
      <div className={styles.social}>
        <span>Follow:</span>
        <ul className={styles.links}>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">YouTube</a>
          </li>
          <li>
            <a href="">GitHub</a>
          </li>
          <li>
            <a href="">Bandcamp</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
