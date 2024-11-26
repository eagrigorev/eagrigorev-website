/* Global */
import React from 'react';

/* Components */
import SocialIcon from '@/components/SocialIcon/SocialIcon';

/* Data */
import socialIcons from '@/data/socialIcons.json';

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
      {showFollowText ? (
        <p className="header-navigation__links">follow:</p>
      ) : null}
      <ul className={styles['items']}>
        {socialIcons.map(
          (item: NavigationItem, index: number): React.JSX.Element => (
            <li key={index}>
              <SocialIcon icon={item} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SocialIcons;
