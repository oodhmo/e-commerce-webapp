import type { TProductInfo } from '@/types/product';

export declare interface TDetailCommonProps {
  product: TProductInfo;
  prodImages: string[];
  thumbImages: string[];
  selectedImage: number;
  isGalleryPopup: boolean;
  setIsGalleryPopup: (val: boolean) => void;
  handleImageClick: (val: number) => void;
}
