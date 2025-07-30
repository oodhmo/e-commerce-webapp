import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import menuItems from '@/assets/data/menu-info.json';
import CartIcon from '@/components/icons/CartIcon';
import MenuIcon from '@/components/icons/MenuIcon';
import avatar from '@/assets/images/avatar/image-avatar.png';
import CloseBtnIcon from '@/components/icons/CloseBtnIcon';
import { useCartStore } from '@/stores/useCartStore';
import CartPopup from './CartPopup';

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
    <div className="navbar navbar--mobile">
      <div className="navbar__container">
        <div className="navbar__content">
          <div className="navbar__left">
            <div className="navbar__menu-btn" onClick={handleMenuToggle}>
              <MenuIcon />
            </div>
            <div className="navbar__logo" onClick={() => handleGoToPage('/')}>
              sneakers
            </div>
          </div>
          <div className="navbar__right">
            <div className="navbar__cart-popup-wrap" ref={cartRef}>
              <span className="navbar__cart" onClick={onCartToggle}>
                <CartIcon count={cartCount} />
              </span>
              {showCart && <CartPopup />}
            </div>
            <div className="navbar__avatar">
              <img
                src={avatar}
                alt="avatar"
                width="40"
                className="navbar__avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
      {(menuState === 'open' || menuState === 'closing') && (
        <>
          <div
            className={`navbar__mobile-overlay${
              menuState === 'open' ? ' navbar__mobile-overlay--open' : ''
            }`}
            onClick={handleMenuClose}
          />
          <nav
            className={`navbar__mobile-menu ${
              menuState === 'open'
                ? 'navbar__mobile-menu--slide-in'
                : 'navbar__mobile-menu--slide-out'
            }`}
          >
            <button
              className="navbar__close-btn"
              onClick={handleMenuClose}
              aria-label="메뉴 닫기"
            >
              <CloseBtnIcon />
            </button>
            <ul className="navbar__mobile-list">
              {(menuItems as MenuItem[]).map(item => (
                <li
                  key={item.id}
                  className={`navbar__mobile-item ${
                    location.pathname === item.url
                      ? 'navbar__mobile-item--active'
                      : ''
                  }`}
                  onClick={() => handleGoToPage(item.url)}
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
