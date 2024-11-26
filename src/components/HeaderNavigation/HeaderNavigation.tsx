/* Global */
import React from 'react';

/* Components */
import DesktopNavigation from '@/components/DesktopNavigation/DesktopNavigation';
import MobileNavigation from '@/components//MobileNavigation/MobileNavigation';

/* Style */
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation: React.FunctionComponent<{}> = () => {
  return (
    <nav className={`container ${styles['wrapper']}`}>
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  );
};

export default HeaderNavigation;
