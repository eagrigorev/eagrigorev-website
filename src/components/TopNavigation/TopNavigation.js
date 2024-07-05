import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

const TopNavigation = () => {
  return (
    <nav className="paragraph--bolder">
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  );
};

export default TopNavigation;
