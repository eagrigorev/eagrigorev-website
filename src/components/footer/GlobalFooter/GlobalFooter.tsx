/* Global */
import React from 'react';

/* Components */
import DynamicWidget from '@/components/footer/DynamicWidget/DynamicWidget';

/* Style */
import styles from './GlobalFooter.module.scss';

const GlobalFooter: React.FunctionComponent<{}> = () => {
  return (
    <footer className={styles['wrapper']}>
      <div className={styles['widgets']}>
        <div className="container grid">
          <DynamicWidget layout="about" title="About" />
          <DynamicWidget layout="recent-posts" title="Recent Posts" />
          <DynamicWidget layout="tags" title="Tags" />
          <DynamicWidget layout="pages" title="Pages" />
        </div>
      </div>
      <div className={styles['copyright']}>
        <p className="paragraph--light-xs">© 2024 Evgenii Grigorev</p>
      </div>
    </footer>
  );
};

export default GlobalFooter;
