import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import WebsiteLogo from '../../../public/images/logo.png';

const Header = () => {
  return (
    <nav className={styles.container}>
      <Link href={'/'}>
        <Image
          src={WebsiteLogo}
          alt="Website logo"
          style={{
            width: 'var(--space-l-4xl)',
            height: 'var(--space-l-4xl)',
          }}
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/work'}>Work</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/contact'}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
