import { useMediaQuery } from 'react-responsive';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import { useState, useRef } from 'react';

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 825 });
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);

  // 팝업 토글 함수
  const handleCartToggle = () => setShowCart(v => !v);
  // 팝업 닫기 함수
  const handleCartClose = () => setShowCart(false);

  return isMobile ? (
    <NavbarMobile
      showCart={showCart}
      onCartToggle={handleCartToggle}
      onCartClose={handleCartClose}
      cartRef={cartRef}
    />
  ) : (
    <NavbarDesktop
      showCart={showCart}
      onCartToggle={handleCartToggle}
      onCartClose={handleCartClose}
      cartRef={cartRef}
    />
  );
};

export default NavBar;
