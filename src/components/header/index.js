import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <h1>Site title</h1>
          </div>
          <div>
            <div>
              <p>Social stuff</p>
            </div>
            <div>
              <p>Search</p>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
