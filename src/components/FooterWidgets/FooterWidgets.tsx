/* Global */
import React from 'react';

/* Components */
import AboutWidget from '@/components/AboutWidget/AboutWidget';
import CopyrightNotice from '@/components/CopyrightNotice/CopyrightNotice';
import PagesWidget from '@/components/PagesWidget/PagesWidget';
import RecentPostsWidget from '@/components/RecentPostsWidget/RecentPostsWidget';
import TagsWidget from '@/components/TagsWidget/TagsWidget';

/* Style */
import styles from './FooterWidgets.module.scss';

const FooterWidgets: React.FunctionComponent<{}> = () => {
  return (
    <footer className={styles['wrapper']}>
      <div className={styles['widgets']}>
        <div className="container grid">
          <AboutWidget />
          <RecentPostsWidget />
          <TagsWidget />
          <PagesWidget />
        </div>
      </div>
      <CopyrightNotice />
    </footer>
  );
};

export default FooterWidgets;
