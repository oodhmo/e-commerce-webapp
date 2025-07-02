import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import sneakersList from '@/assets/data/sneakers-info.json';

import DetailMobile from './DetailMobile';
import DetailDesktop from './DetailDesktop';

import type { TProductInfo } from '@/types/product';
import type { TDetailCommonProps } from './types';
import { useImageLoader, useDetailImage } from '@/hooks/useImageLoader';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const isMobile = useMediaQuery({ maxWidth: 825 });

  const product = sneakersList.find(item => item.id === id) as TProductInfo;

  const [isGalleryPopup, setIsGalleryPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (idx: number) => {
    setSelectedImage(idx);
    setIsGalleryPopup(true);
  };

  const { imageMap: productMap } = useImageLoader('product');
  const { imageMap: thumbMap } = useImageLoader('thumbnail');

  const { prodImages, thumbImages } = useDetailImage(
    product?.image_pair,
    productMap,
    thumbMap
  );

  if (!id || !product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  const commonProps: TDetailCommonProps = {
    product,
    prodImages,
    thumbImages,
    selectedImage,
    isGalleryPopup,
    setIsGalleryPopup,
    handleImageClick,
  };

  return isMobile ? (
    <DetailMobile {...commonProps} />
  ) : (
    <DetailDesktop {...commonProps} />
  );
};

export default ProductDetail;
