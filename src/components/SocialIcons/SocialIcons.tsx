/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Data */
import socialIcons from '@/data/navigation-items/socialIcons.json';

/* Style */
import styles from './SocialIcons.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

type Props = {
  showFollowText: boolean;
};

const SocialIcons: React.FunctionComponent<Props> = ({ showFollowText }) => {
  return (
    <div className={styles['wrapper']}>
      {showFollowText ? <p className="jost-bold--s">follow:</p> : null}
      <ul className={`list-simple ${styles['icons']}`}>
        {socialIcons.map(
          (icon: NavigationItem, index: number): React.JSX.Element => (
            <li key={index}>
              <Link className="link-image" href={icon.url}>
                <Image
                  className={styles['icon']}
                  src={`/images/icons/icons8-${icon.title.toLowerCase()}.svg`}
                  alt={`${icon.title} icon`}
                  width={25}
                  height={25}
                />
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SocialIcons;
