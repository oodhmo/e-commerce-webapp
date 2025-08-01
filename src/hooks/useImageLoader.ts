import { useMemo } from 'react';
import type { TImagePairList } from '@/types/image';

const imageMaps = {
  product: import.meta.glob('../assets/images/product/*.{jpg,png}', {
    eager: true,
    import: 'default',
    as: 'url',
  }),
  thumbnail: import.meta.glob('../assets/images/thumbnail/*.{jpg,png}', {
    eager: true,
    import: 'default',
    as: 'url',
  }),
  collection: import.meta.glob('../assets/images/collection/*.{jpg,png}', {
    eager: true,
    import: 'default',
    as: 'url',
  }),
};

export const useImageLoader = (
  type: 'product' | 'thumbnail' | 'collection'
) => {
  const imageMap = useMemo(() => {
    const images = imageMaps[type];

    const map: Record<string, string> = {};

    Object.entries(images).forEach(([path, url]) => {
      const filename = path.split('/').pop() || '';
      map[filename] = url;
    });

    return map;
  }, [type]);

  return { imageMap };
};

// 디테일 페이지에서 사용할 이미지만 필터링해서 import
export const useDetailImage = (
  images: TImagePairList,
  prodMap: Record<string, string>,
  thumbMap: Record<string, string>
) => {
  const prodImages = images.map(img => prodMap[img.prod_image]).filter(Boolean);

  const thumbImages = images
    .map(img => thumbMap[img.thumb_image])
    .filter(Boolean);

  return { prodImages, thumbImages };
};

// 장바구니에서 사용할 이미지만 필터링해서 import
export const useCartImage = (
  mainImgList: string[],
  thumbMap: Record<string, string>
) => {
  const cartImages = mainImgList
    .map(mainImg => thumbMap[mainImg])
    .filter(Boolean);

  return { cartImages };
};

// Collections 페이지에서 사용할 이미지만 필터링해서 import
// export const useCollectionImage = (colMap: Record<string, string>) => {
//   const colImages = Object.values(colMap).map(url => url);

//   return { colImages };
// };
