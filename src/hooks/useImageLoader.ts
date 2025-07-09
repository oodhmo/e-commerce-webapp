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
};

export const useImageLoader = (type: 'product' | 'thumbnail') => {
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
  const prodImages = Object.entries(prodMap)
    .filter(([name, _]) => images.some(i => name === i.prod_image))
    .map(([_, path]) => path);

  const thumbImages = Object.entries(thumbMap)
    .filter(([name, _]) => images.some(i => name === i.thumb_image))
    .map(([_, path]) => path);

  return { prodImages, thumbImages };
};

// 장바구니에서 사용할 이미지만 필터링해서 import
export const useCartImage = (
  mainImgList: string[],
  thumbMap: Record<string, string>
) => {
  const cartImages = Object.entries(thumbMap)
    .filter(([name, _]) => mainImgList.some(i => name === i))
    .map(([_, path]) => path);

  return { cartImages };
};
