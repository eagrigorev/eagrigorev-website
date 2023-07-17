import Link from 'next/link';
import NavigationTop from './navigationTop';

const Header = () => {
  return (
    <>
      <header>
        <Link href={'/'}>
          <h1>Evgenii Grigorev</h1>
        </Link>
        <NavigationTop />
      </header>
    </>
  );
};

export default Header;
