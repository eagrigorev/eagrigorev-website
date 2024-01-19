import Link from 'next/link';

const Header = () => {
  return (
    <nav>
      <p>Evgenii Grigorev</p>
      <Link href={'/'}>Home</Link>
      <Link href={'/roadmap'}>Roadmap</Link>
    </nav>
  );
};

export default Header;
