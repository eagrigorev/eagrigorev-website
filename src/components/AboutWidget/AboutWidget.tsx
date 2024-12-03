/* Global */
import React from 'react';

/* Components */
import SocialIcons from '@/components/SocialIcons/SocialIcons';

/* Style */
import styles from './AboutWidget.module.scss';

const AboutWidget: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <h4 className={`heading--h4 ${styles['heading']}`}>About</h4>
      <p className="post-card-big__description">
        Lorem ipsum dolor sit dolor and other amet things for several lines of
        text.
      </p>
      <SocialIcons showFollowText={false} />
    </div>
  );
};

export default AboutWidget;
