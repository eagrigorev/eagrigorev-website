/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Style */
import styles from './SocialIcon.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

type Props = {
  icon: NavigationItem;
};

const SocialIcon: React.FunctionComponent<Props> = ({ icon }) => {
  return (
    <Link href={icon.url}>
      <Image
        className={`opacity--decrease ${styles['image']}`}
        src={`/images/icons/icons8-${icon.title.toLowerCase()}.svg`}
        alt={`${icon.title} icon`}
        width={25}
        height={25}
      />
    </Link>
  );
};

export default SocialIcon;
