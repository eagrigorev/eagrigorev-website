/* Namespaces */
import React from 'react';

/* Components */
import Link from 'next/link';
import Image from 'next/image';

/* Utils */
import styles from './SocialIcons.module.scss';

const SocialIcons: React.FunctionComponent<{}> = () => {
  return (
    <ul className={styles['wrapper']}>
      <li>
        <Link
          className="link--neutral"
          href={'https://www.instagram.com/eagrigorev/'}
        >
          <Image
            className={`${styles['icon']} transition--opacity`}
            src="images/icons/icons8-instagram.svg"
            alt="Instagram icon"
            width={30}
            height={30}
          />
        </Link>
      </li>
      <li>
        <Link className="link--neutral" href={'https://github.com/eagrigorev/'}>
          <Image
            className={`${styles['icon']} transition--opacity`}
            src="images/icons/icons8-github.svg"
            alt="Instagram icon"
            width={30}
            height={30}
          />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
