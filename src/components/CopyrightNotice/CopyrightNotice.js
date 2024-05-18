import styles from './CopyrightNotice.module.scss';
import Link from 'next/link';

const CopyrightNotice = () => {
  return (
    <footer className={`${styles['wrapper']} paragraph--copyright`}>
      <p>© 2024 Evgenii Grigorev</p>
      <div>
        <Link href={'/'}>Privacy & Security</Link>
        <span> | </span>
        <Link href={'/'}>RSS Feed</Link>
      </div>
    </footer>
  );
};

export default CopyrightNotice;
