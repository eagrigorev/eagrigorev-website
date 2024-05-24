import styles from './CopyrightNotice.module.scss';
import Link from 'next/link';

const CopyrightNotice = () => {
  return (
    <footer className={`${styles['wrapper']} paragraph--copyright`}>
      <p>© 2024 Evgenii Grigorev</p>
      <div>
        <Link className="link--darker transition--color" href={'/'}>
          Privacy & Security
        </Link>
        <span> | </span>
        <Link className="link--darker transition--color" href={'/'}>
          RSS Feed
        </Link>
      </div>
    </footer>
  );
};

export default CopyrightNotice;
