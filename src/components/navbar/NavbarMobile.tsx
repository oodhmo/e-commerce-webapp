import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '@/assets/data/menu-info.json';
import CartIcon from '@/components/icons/CartIcon';
import MenuIcon from '@/components/icons/MenuIcon';
import avatar from '@/assets/images/avatar/image-avatar.png';

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGoToPage = (page: string) => {
    navigate(page);
    setMenuOpen(false); // 메뉴 닫기
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
    </div>
  );
};

export default NavbarMobile;
