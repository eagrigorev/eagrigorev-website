import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <h1>Evgenii Grigorev</h1>
        </div>
        <div>Social links</div>
        <div>Search</div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;

const Navigation = () => {
  return (
    <nav>
      <ul>
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
