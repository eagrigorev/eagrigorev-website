/* Namespaces */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Utils */
import styles from './SocialIcons.module.scss';

const SocialIcons: React.FunctionComponent<{}> = () => {
  return (
    <ul className={styles['wrapper']}>
      <li>
        <Link
          className="link--lighter transition--color"
          href={'https://www.instagram.com/eagrigorev/'}
        >
          Ig.
        </Link>
      </li>
      <li>
        <Link
          className="link--lighter transition--color"
          href={'https://github.com/eagrigorev/'}
        >
          Gh.
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
