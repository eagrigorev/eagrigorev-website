import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import WebsiteLogo from '../../../public/images/logo.png';

const Header = () => {
  return (
    <nav className={styles.container}>
      <Link href={'/'}>
        <Image className={styles.logo} src={WebsiteLogo} alt="Website logo" />
      </Link>
      <ul className={styles.links}>
        <li>
          <p>
            <Link href={'/'}>Work</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href={'/'}>About</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href={'/'}>Contact</Link>
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
