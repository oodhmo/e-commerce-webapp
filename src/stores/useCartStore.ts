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
      cart: [
        {
          id: 'sn-001',
          name: 'Product Name',
          price: '10000',
          mainImg: 'https://via.placeholder.com/150',
          count: 1,
          totalPrice: 10000,
        },
      ],
      addCart: product => {
        const currentCart = get().cart;
        const existing = currentCart.find(item => item.id === product.id);

        console.log(currentCart);

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
