/* Global */
import React from 'react';

/* Components */
import AboutWidget from '@/components/AboutWidget/AboutWidget';
import PagesWidget from '@/components/PagesWidget/PagesWidget';
import RecentPostsWidget from '@/components/RecentPostsWidget/RecentPostsWidget';

/* Style */
import styles from './FooterWidgets.module.scss';

const FooterWidgets: React.FunctionComponent<{}> = () => {
  return (
    <footer className={styles['wrapper']}>
      <div className={styles['widgets']}>
        <div className="container grid">
          <AboutWidget />
          <RecentPostsWidget />
          <AboutWidget />
          <PagesWidget />
        </div>
      </div>
    </footer>
  );
};

export default FooterWidgets;
