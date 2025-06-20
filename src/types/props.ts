import type { TImagePairList } from './image';
import type { TProductInfo } from './product';

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
