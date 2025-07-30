import CartSvg from '@/assets/images/icons/icon-cart.svg?react';

interface CartIconProps {
  count?: number;
}

const CartIcon = ({ count }: CartIconProps) => {
  return (
    <div className="cart-icon">
      <CartSvg />
      {typeof count === 'number' && count > 0 && (
        <span className="cart-icon__badge">{count}</span>
      )}
    </div>
  );
};

export default CartIcon;
