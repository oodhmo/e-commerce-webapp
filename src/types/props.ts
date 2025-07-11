// import type { TImagePairList } from './image';
import type { TProductInfo, TCartProduct } from './product';

// commponents/detail/Gallery.tsx
export interface TGalleryProps {
  prodImages: string[];
  thumbImages: string[];
  onClickImage?: (idx: number) => void;
  clickedIndex?: number;
  showArrows?: boolean;
  currentIdx?: number;
  setCurrentIdx?: (idx: number) => void;
}

export interface TThumbListProps {
  list: string[];
  currentIdx: number;
  setCurrentIdx?: (idx: number) => void;
}

export interface TProductListProps {
  list: string[];
  idx: number;
  onClickImage?: (idx: number) => void;
}

// commponents/detail/ProductDesc.tsx
export interface TProductDescProps {
  product: TProductInfo;
}

export interface TProductCountProps {
  count: number;
  setCount: (cnt: number) => void;
}

export interface TGalleryPopupProps {
  isOpen: boolean;
  currentIdx: number;
  setCurrentIdx: (idx: number) => void;
  prodImages: string[];
  thumbImages: string[];
  onClose: () => void;
}

export interface TCartBtnProps {
  count: number;
  product: TProductInfo;
}
