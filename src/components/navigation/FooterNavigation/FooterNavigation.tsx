/* Global */
import React from 'react';
import styles from './FooterNavigation.module.scss';

/* Components */
import Link from 'next/link';

const FooterNavigation: React.FunctionComponent<{}> = () => {
  return (
    <footer className={`${styles['wrapper']} paragraph--copyright`}>
      <p>© 2024 Evgenii Grigorev</p>
      <div>
        <Link
          className="link--darker transition--color"
          href={'/privacy-and-security'}
        >
          Privacy & Security
        </Link>
        <span> | </span>
        <Link className="link--darker transition--color" href={'/rss.xml'}>
          RSS Feed
        </Link>
        <span> | </span>
        <Link className="link--darker transition--color" href={'/sitemap.xml'}>
          Sitemap
        </Link>
      </div>
    </footer>
  );
};

export default FooterNavigation;
