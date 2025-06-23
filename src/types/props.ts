import type { TImagePairList } from './image';
import type { TProductInfo, TCartProduct } from './product';

// commponents/detail/Gallery.tsx
export interface TGalleryProps {
  images: TImagePairList;
}

export interface TThumbListProps {
  list: string[];
  currentIdx: number;
  setCurrentIdx: (idx: number) => void;
}

export interface TProductListProps {
  list: string[];
  idx: number;
}

// commponents/detail/ProductDesc.tsx
export interface TProductDescProps {
  product: TProductInfo;
}

export interface TProductCountProps {
  count: number;
  setCount: (cnt: number) => void;
}

export interface TCartBtnProps {
  count: number;
  product: TProductInfo;
}
