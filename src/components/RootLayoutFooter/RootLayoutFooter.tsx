/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Style */
import styles from './RootLayoutFooter.module.scss';

const RootLayoutFooter: React.FunctionComponent<{}> = () => {
  return (
    <footer className={`jost-bold--xs-grey ${styles['wrapper']}`}>
      <p>© 2024 Evgenii Grigorev</p>
      <div>
        <Link className="link-grey" href={'/privacy-and-security'}>
          Privacy & Security
        </Link>
        <span> | </span>
        <Link className="link-grey" href={'/rss.xml'}>
          RSS Feed
        </Link>
        <span> | </span>
        <Link className="link-grey" href={'/sitemap.xml'}>
          Sitemap
        </Link>
      </div>
    </footer>
  );
};

export default RootLayoutFooter;
