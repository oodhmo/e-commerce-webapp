import type { TProductInfo } from '@/types/product';

export declare interface TDetailCommonProps {
  product: TProductInfo;
  prodImages: string[];
  thumbImages: string[];
  currentIdx: number;
  setCurrentIdx: (idx: number) => void;
  isGalleryPopup: boolean;
  setIsGalleryPopup: (val: boolean) => void;
  handleImageClick: (val: number) => void;
}
