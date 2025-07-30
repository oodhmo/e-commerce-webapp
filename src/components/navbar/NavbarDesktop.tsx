import menuItems from '@/assets/data/menu-info.json';
import CartIcon from '@/components/icons/CartIcon';
import avatar from '@/assets/images/avatar/image-avatar.png';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const cart = useCartStore(state => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.count, 0);

  const handleGoToPage = (page: string) => {
    navigate(page);
  };

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
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__content">
          <div className="navbar__left">
            <div className="navbar__logo" onClick={() => handleGoToPage('/')}>
              sneakers
            </div>
            <div className="navbar__menu">
              <ul className="navbar__list">
                {menuItems.map(item => {
                  return (
                    <li
                      key={item.id}
                      className="navbar__item"
                      onClick={() => handleGoToPage(item.url)}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="navbar__right">
            <div className="navbar__cart" ref={cartRef}>
              <span className="navbar__cart-icon" onClick={onCartToggle}>
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
    </div>
  );
};

export default NavbarDesktop;
