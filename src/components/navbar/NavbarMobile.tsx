import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '@/assets/data/menu-info.json';
import CartIcon from '@/components/icons/CartIcon';
import avatar from '@/assets/images/avatar/image-avatar.png';

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGoToPage = (page: string) => {
    navigate(page);
    setMenuOpen(false); // 메뉴 닫기
  };

  return (
    <div id="navbar-mobile">
      <div className="nav-container"></div>
    </div>
  );
};

export default NavbarMobile;
