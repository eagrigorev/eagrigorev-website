import header from './header.module.css';

import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../../public/img/logo.png';

const Header = () => {
  return (
    <header className={header.container}>
      <Link href={'/'}>
        <Image
          src={Logo}
          className={header.logo}
          alt="Evgenii Grigorev website logo"
        />
      </Link>
      <nav className={header.navigation}>
        <ul className={header.links} role="list">
          <li role="listitem">
            <Link href={'/'} className={header.link}>
              Work
            </Link>
          </li>
          <li role="listitem">
            <Link href={'/about'} className={header.link}>
              About
            </Link>
          </li>
          <li role="listitem">
            <Link href={'/contact'} className={header.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button className={header.menu}>Menu</button>
    </header>
  );
};

export default Header;
