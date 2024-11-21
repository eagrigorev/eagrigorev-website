/* Namespaces */
import React from 'react';

/* Components */
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

const TopNavigation: React.FunctionComponent<{}> = () => {
  return (
    <nav className="paragraph--bolder">
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  );
};

export default TopNavigation;
