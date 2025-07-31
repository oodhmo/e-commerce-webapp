import { useMemo } from 'react';
import sneakersData from '../assets/data/sneakers-info.json';
import type { TProductInfo } from '../types/product';

type Category = 'ALL' | 'MEN' | 'WOMEN';

export const useProducts = (category: Category, limit?: number) => {
  const filteredProducts = useMemo(() => {
    let filtered: TProductInfo[];

    switch (category) {
      case 'ALL':
        filtered = sneakersData;
        break;
      case 'MEN':
        filtered = sneakersData.filter(
          product => product.gender === 'men' || product.gender === 'unisex'
        );
        break;
      case 'WOMEN':
        filtered = sneakersData.filter(
          product => product.gender === 'women' || product.gender === 'unisex'
        );
        break;
      default:
        filtered = sneakersData;
    }

    const sortedProducts = filtered.sort(
      (a: TProductInfo, b: TProductInfo) => b.view_count - a.view_count
    );

    return limit ? sortedProducts.slice(0, limit) : sortedProducts;
  }, [category, limit]);

  return filteredProducts;
};
