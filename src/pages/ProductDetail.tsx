import { useParams } from 'react-router-dom';
import { useState } from 'react';
import sneakersList from '@/assets/data/sneakers-info.json';
import Gallery from '@/components/detail/Gallery';
import GalleryPopup from '@/components/detail/GalleryPopup';
import ProductDesc from '@/components/detail/ProductDesc';
import type { TProductInfo } from '@/types/product';
import { useImageLoader, useDetailImage } from '@/hooks/useImageLoader';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const product = sneakersList.find(item => item.id === id) as TProductInfo;

  const [isGalleryPopup, setIsGalleryPopup] = useState(true);
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

  return (
    <div id="container">
      <div id="content">
        <div className="detail">
          <div className="image-container">
            <Gallery
              prodImages={prodImages}
              thumbImages={thumbImages}
              onClickImage={handleImageClick}
            />
          </div>
          <div className="desc-container">
            <ProductDesc product={product} />
          </div>
        </div>
      </div>
      <GalleryPopup
        isOpen={isGalleryPopup}
        prodImages={prodImages}
        thumbImages={thumbImages}
        idx={selectedImage}
        onClose={() => setIsGalleryPopup(false)}
      />
    </div>
  );
};

export default ProductDetail;
