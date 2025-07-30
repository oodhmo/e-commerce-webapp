import menuItems from '@/assets/data/menu-info.json';
import CartIcon from '@/components/icons/CartIcon';
import avatar from '@/assets/images/avatar/image-avatar.png';
// import { useNavigate } from 'react-router-dom';
import CartPopup from './CartPopup';
import { useEffect } from 'react';
import { useCartStore } from '@/stores/useCartStore';

interface NavbarDesktopProps {
  showCart: boolean;
  onCartToggle: () => void;
  onCartClose: () => void;
  cartRef: React.RefObject<HTMLDivElement | null>;
}

const NavbarDesktop = ({
  showCart,
  onCartToggle,
  onCartClose,
  cartRef,
}: NavbarDesktopProps) => {
  //const navigate = useNavigate();
  const cart = useCartStore(state => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.count, 0);

  // const handleGoToPage = (page: string) => {
  //   navigate(page);
  // };

  // 바깥 클릭 시 팝업 닫는 로직
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        onCartClose();
      }
    };
    if (showCart) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCart, cartRef, onCartClose]);

  return (
    <div id="navbar">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-lft">
            <div
              className="logo"
              // onClick={() => handleGoToPage('/collections')}
            >
              sneakers
            </div>
            <div className="menu">
              <ul className="list">
                {menuItems.map(item => {
                  return (
                    <li
                      key={item.id}
                      // onClick={() => handleGoToPage(item.url)}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="nav-rgt">
            <div className="cart" ref={cartRef}>
              <span onClick={onCartToggle}>
                <CartIcon count={cartCount} />
              </span>
              {showCart && <CartPopup />}
            </div>
            <div className="avatar">
              <img src={avatar} alt="avatar" width="40" className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
