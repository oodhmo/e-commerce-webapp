import { useMemo } from 'react';
import sneakersData from '../assets/data/sneakers-info.json';
import type { TProductInfo } from '../types/product';

type TCategory = 'ALL' | 'MEN' | 'WOMEN';
type TCollection = 'seasonal' | 'style' | null;

export const useProducts = (
  category: TCategory,
  limit?: number,
  collectionType?: TCollection,
  collectionVal?: string
) => {
  const filteredProducts = useMemo(() => {
    let filtered: TProductInfo[];

    // 1. 성별 필터로 필터링
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

    // 2. 컬렉션 필터로 필터링
    if (collectionType && collectionVal) {
      filtered = filtered.filter(product =>
        product[collectionType]?.includes(collectionVal)
      );
    }

    // 3. 조회수 기준 정렬
    // TODO: 최신순 등 다른 정렬 기준 추가
    const sortedProducts = filtered.sort(
      (a: TProductInfo, b: TProductInfo) => b.view_count - a.view_count
    );

    return limit ? sortedProducts.slice(0, limit) : sortedProducts;
  }, [category, limit, collectionType, collectionVal]);

  return filteredProducts;
};
