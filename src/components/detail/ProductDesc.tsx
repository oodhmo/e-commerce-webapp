import type {
  TProductDescProps,
  TProductCountProps,
  TCartBtnProps,
} from '@/types/props';
import MinusBtnIcon from '@/components/icons/MinusBtnIcon';
import PlusBtnIcon from '@/components/icons/PlusBtnIcon';
import CartIcon from '@/components/icons/CartIcon';
import { useCartStore } from '@/stores/useCartStore';
import { useState, useEffect } from 'react';
import Toast from '@/components/common/Toast';

const CountSetter = ({ count, setCount }: TProductCountProps) => {
  return (
    <div className="product-desc__count-wrapper">
      <div className="product-desc__count">
        <div
          className="product-desc__minus"
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          <MinusBtnIcon />
        </div>
        <div className="product-desc__num">{count}</div>
        <div className="product-desc__plus" onClick={() => setCount(count + 1)}>
          <PlusBtnIcon />
        </div>
      </div>
    </div>
  );
};

const CartBtn = ({
  product,
  count,
  onAddCart,
}: TCartBtnProps & { onAddCart?: () => void }) => {
  const addCart = useCartStore(state => state.addCart);

  const handleAddCartClick = () => {
    if (count > 0) {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        mainImg: product.image_pair[0].thumb_image,
        count: count,
        totalPrice: Number(product.price) * count,
      };

      addCart(cartItem);
    }
    if (onAddCart) onAddCart();
  };

  return (
    <div
      className="product-desc__cart-wrapper"
      onClick={() => handleAddCartClick()}
    >
      <div className="product-desc__cart-btn">
        <CartIcon />
        <span>Add to cart</span>
      </div>
    </div>
  );
};

const ProductDesc = ({ product }: TProductDescProps) => {
  const [count, setCount] = useState(0);
  const [toast, setToast] = useState({ visible: false, message: '' });

  // 토스트 자동 사라짐
  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(
        () => setToast({ ...toast, visible: false }),
        2500
      );
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="product-desc">
      <div className="product-desc__info">
        <div className="product-desc__company">SNEAKER COMPANY</div>
        <div className="product-desc__name">{product.name}</div>
        <div className="product-desc__description">{product.description}</div>
        <div className="product-desc__price">
          <div className="product-desc__discount">
            <div className="product-desc__now">${product.price}</div>
            {product.discount && (
              <div className="product-desc__chip">
                <div className="product-desc__percent">{product.discount}%</div>
              </div>
            )}
          </div>
          {product.discount && (
            <div className="product-desc__origin">
              ${product.original_price}
            </div>
          )}
        </div>
      </div>
      <div className="product-desc__cart">
        <CountSetter count={count} setCount={setCount} />
        <CartBtn
          product={product}
          count={count}
          onAddCart={() => {
            if (count === 0) {
              setToast({
                visible: true,
                message: 'Please select at least one item.',
              });
            } else {
              setToast({
                visible: true,
                message: 'Successfully added to your cart!',
              });
            }
          }}
        />
      </div>
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
};

export default ProductDesc;
