import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import menuItems from '@/assets/data/menu-info.json';
import CartIcon from '@/components/icons/CartIcon';
import MenuIcon from '@/components/icons/MenuIcon';
import avatar from '@/assets/images/avatar/image-avatar.png';
import CloseBtnIcon from '@/components/icons/CloseBtnIcon';

// menuItems 타입 정의
interface MenuItem {
  id: string;
  name: string;
  url: string;
}

const NavbarMobile = () => {
  type MenuState = 'open' | 'closed' | 'closing';
  const [menuState, setMenuState] = useState<MenuState>('closed');

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToPage = (page: string) => {
    navigate(page);
    handleMenuClose();
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
            <div
              className="logo"
              onClick={() => handleGoToPage('/collections')}
            >
              sneakers
            </div>
          </div>
          <div className="nav-rgt">
            <div className="cart">
              <CartIcon />
            </div>
            <div className="avatar">
              <img src={avatar} alt="avatar" width="40" />
            </div>
          </div>
        </div>
      </div>
      {/* 오버레이 및 사이드 메뉴 */}
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
