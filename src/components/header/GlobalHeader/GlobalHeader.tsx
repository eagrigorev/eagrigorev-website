/* Global */
import React from 'react';

/* Components */
import DesktopNavigation from '@/components/header/DesktopNavigation/DesktopNavigation';
import MobileNavigation from '@/components/header/MobileNavigation/MobileNavigation';

/* Style */
import styles from './GlobalHeader.module.scss';

const GlobalHeader: React.FunctionComponent<{}> = () => {
  return (
    <nav className={`${styles['wrapper']}`}>
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  );
};

export default GlobalHeader;
