/* Global */
import React from 'react';

/* Components */
import NavigationDesktop from '@/components/navigation/NavigationDesktop/NavigationDesktop';
import NavigationMobile from '@/components/navigation/NavigationMobile/NavigationMobile';

const NavigationHeader: React.FunctionComponent<{}> = () => {
  return (
    <nav className="paragraph--bolder">
      <NavigationDesktop />
      <NavigationMobile />
    </nav>
  );
};

export default NavigationHeader;
