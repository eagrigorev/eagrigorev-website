/* Global */
import React from 'react';

/* Components */
import DesktopNavigation from '@/components/navigation/DesktopNavigation/DesktopNavigation';
import MobileNavigation from '@/components/navigation/MobileNavigation/MobileNavigation';

const HeaderNavigation: React.FunctionComponent<{}> = () => {
  return (
    <nav className="paragraph--bolder">
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  );
};

export default HeaderNavigation;
