import { useMediaQuery } from 'react-responsive';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 825 });

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
};

export default NavBar;
