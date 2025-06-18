import type { TImagePairList } from './image';

// commponents/detail/Gallery.tsx
export type TGalleryProps = {
  images: TImagePairList;
};

export type TThumbListProps = {
  list: string[];
  setBigImage: (src: string) => void;
  setSelectedThumb: (src: string) => void;
};

export type TProductListProps = {
  list: string[];
};
