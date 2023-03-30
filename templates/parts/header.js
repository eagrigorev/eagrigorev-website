import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <h1>Evgenii Grigorev</h1>
        </div>
        <div>
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
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};
