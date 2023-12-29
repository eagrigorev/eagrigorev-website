import style from './header.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import WebsiteLogo from '../public/img/icon.png';

const Header = () => {
  return (
    <div className={style.wrapper}>
      <nav className={style.navigation}>
        <Link href={'/'}>
          <Image src={WebsiteLogo} alt="Website logo" />
        </Link>
        <h2 className={style.title}>Evgenii G.</h2>
        <button className={style.menu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Header;
