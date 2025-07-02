import Gallery from '@/components/detail/Gallery';
import GalleryPopup from '@/components/detail/GalleryPopup';
import ProductDesc from '@/components/detail/ProductDesc';
import type { TDetailCommonProps } from './types';

const DetailDesktop = ({
  product,
  prodImages,
  thumbImages,
  selectedImage,
  isGalleryPopup,
  setIsGalleryPopup,
  handleImageClick,
}: TDetailCommonProps) => {
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

export default DetailDesktop;
