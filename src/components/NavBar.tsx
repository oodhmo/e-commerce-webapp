import menuItems from '@/assets/data/menu-info.json';
import CartIcon from '@/components/icons/CartIcon';
import avatar from '@/assets/images/avatar/image-avatar.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleGoToPage = (page: string) => {
    navigate(page);
  };

  return (
    <div id="navbar">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-lft">
            <div
              className="logo"
              onClick={() => handleGoToPage('/collections')}
            >
              sneakers
            </div>
            <div className="menu">
              <ul className="list">
                {menuItems.map(item => {
                  return (
                    <li key={item.id} onClick={() => handleGoToPage(item.url)}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
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

export default NavBar;
