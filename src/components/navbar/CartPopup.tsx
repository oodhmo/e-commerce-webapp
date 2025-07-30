import { useCartStore } from '@/stores/useCartStore';
import DeleteIcon from '@/components/icons/DeleteIcon';
import type { TCartProduct } from '@/types/product';
import { useImageLoader, useCartImage } from '@/hooks/useImageLoader';

const CartPopup = () => {
  const cart = useCartStore(state => state.cart);
  const deleteCart = useCartStore(state => state.deleteCart);
  const hasItems = cart.length > 0;

  const cartItem = hasItems ? cart : null;

  const mainImgs: string[] = cart.map(item => item.mainImg);
  const { imageMap: cartImageMap } = useImageLoader('thumbnail'); // 장바구니 이미지로 thumbnail 이미지를 활용할 것임
  const { cartImages } = useCartImage(mainImgs, cartImageMap);

  return (
    <div className="cart-popup">
      <div className="cart-popup__header">Cart</div>
      <div className="cart-popup__content">
        {hasItems && cartItem ? (
          <>
            {cartItem.map((item: TCartProduct, idx: number) => (
              <div className="cart-popup__item" key={item.id}>
                <img
                  src={cartImages[idx]}
                  alt={item.name}
                  className="cart-popup__thumb"
                />
                <div className="cart-popup__info">
                  <div className="cart-popup__title">{item.name}</div>
                  <div className="cart-popup__price">
                    ${item.price} x {item.count}{' '}
                    <b>${(Number(item.price) * item.count).toFixed(2)}</b>
                  </div>
                </div>
                <div
                  className="cart-popup__delete"
                  onClick={() => deleteCart(item.id)}
                >
                  <DeleteIcon />
                </div>
              </div>
            ))}

            <button className="cart-popup__checkout">Checkout</button>
          </>
        ) : (
          <div className="cart-popup__empty">Your cart is empty.</div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
