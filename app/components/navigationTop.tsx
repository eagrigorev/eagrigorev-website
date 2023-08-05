import Link from 'next/link';

const NavigationTop = () => {
  return (
    <nav>
      <ul>
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

export default NavigationTop;
