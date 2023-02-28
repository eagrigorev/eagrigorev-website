import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="site-header">
        <div className="site-header__left">
          <h1>Evgenii Grigorev</h1>
        </div>
        <div className="site-header__right">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;

const Navigation = () => {
  return (
    <nav>
      <ul className="site-nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
