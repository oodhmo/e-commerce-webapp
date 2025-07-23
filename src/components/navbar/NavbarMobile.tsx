import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import menuItems from '@/assets/data/menu-info.json';
import CartIcon from '@/components/icons/CartIcon';
import MenuIcon from '@/components/icons/MenuIcon';
import avatar from '@/assets/images/avatar/image-avatar.png';
import CloseBtnIcon from '@/components/icons/CloseBtnIcon';
import { useCartStore } from '@/stores/useCartStore';
import CartPopup from './CartPopup';

// menuItems 타입 정의
interface MenuItem {
  id: string;
  name: string;
  url: string;
}

interface NavbarMobileProps {
  showCart: boolean;
  onCartToggle: () => void;
  onCartClose: () => void;
  cartRef: React.RefObject<HTMLDivElement | null>;
}

const NavbarMobile = ({
  showCart,
  onCartToggle,
  cartRef,
}: NavbarMobileProps) => {
  type MenuState = 'open' | 'closed' | 'closing';
  const [menuState, setMenuState] = useState<MenuState>('closed');
  const cart = useCartStore(state => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.count, 0);

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToPage = (page: string) => {
    navigate(page);
    // 메뉴가 열려있을 때만 닫기
    if (menuState === 'open') {
      handleMenuClose();
    }
  };

  const handleMenuToggle = () => {
    if (menuState === 'closed' || menuState === 'closing') {
      setMenuState('open');
    } else {
      handleMenuClose();
    }
  };

  const handleMenuClose = () => {
    setMenuState('closing');
    setTimeout(() => setMenuState('closed'), 250);
  };

  return (
    <div id="navbar-mobile">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-lft">
            <div className="menu-btn" onClick={handleMenuToggle}>
              <MenuIcon />
            </div>
            <div className="logo" onClick={() => handleGoToPage('/')}>
              sneakers
            </div>
          </div>
          <div className="nav-rgt">
            <div className="cart-popup-wrap" ref={cartRef}>
              <span className="cart" onClick={onCartToggle}>
                <CartIcon count={cartCount} />
              </span>
              {showCart && <CartPopup />}
            </div>
            <div className="avatar">
              <img src={avatar} alt="avatar" width="40" />
            </div>
          </div>
        </div>
      </div>
      {(menuState === 'open' || menuState === 'closing') && (
        <>
          <div
            className={`mobile-menu-overlay${
              menuState === 'open' ? ' open' : ''
            }`}
            onClick={handleMenuClose}
          />
          <nav
            className={`mobile-menu ${
              menuState === 'open' ? 'slide-in' : 'slide-out'
            }`}
          >
            <button
              className="close-btn"
              onClick={handleMenuClose}
              aria-label="메뉴 닫기"
            >
              <CloseBtnIcon />
            </button>
            <ul className="mobile-menu-list">
              {(menuItems as MenuItem[]).map(item => (
                <li
                  key={item.id}
                  onClick={() => handleGoToPage(item.url)}
                  className={location.pathname === item.url ? 'active' : ''}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default NavbarMobile;
