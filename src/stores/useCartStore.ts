import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TCartProduct } from '@/types/product';

type CartState = {
  cart: TCartProduct[];
  addCart: (product: TCartProduct) => void;
  deleteCart: (id: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addCart: product => {
        const currentCart = get().cart;
        const existing = currentCart.find(item => item.id === product.id);

        // 이미 상품이 들어있으면 수량만 업데이트
        if (existing) {
          const updatedCart = currentCart.map(item =>
            item.id === product.id
              ? {
                  ...item,
                  mainImg: item.mainImg,
                  count: item.count + 1,
                  totalPrice: item.totalPrice,
                }
              : item
          );
          set({ cart: updatedCart });
        } else {
          set({
            cart: [
              ...currentCart,
              {
                ...product,
                mainImg: product.mainImg,
                count: 1,
                totalPrice: Number(product.price),
              },
            ],
          });
        }
      },
      deleteCart: id => {
        const currentCart = get().cart;
        const filteredCart = currentCart.filter(item => item.id !== id);

        set({ cart: filteredCart });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
