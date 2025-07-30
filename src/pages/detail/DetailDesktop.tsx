import Gallery from '@/components/detail/Gallery';
import GalleryPopup from '@/components/detail/GalleryPopup';
import ProductDesc from '@/components/detail/ProductDesc';
import type { TDetailCommonProps } from './types';

const DetailDesktop = ({
  product,
  prodImages,
  thumbImages,
  currentIdx,
  setCurrentIdx,
  isGalleryPopup,
  setIsGalleryPopup,
  handleImageClick,
}: TDetailCommonProps) => {
  return (
    <div className="detail-page">
      <div className="detail-page__content">
        <div className="detail-page__container">
          <div className="detail-page__gallery">
            <Gallery
              prodImages={prodImages}
              thumbImages={thumbImages}
              currentIdx={currentIdx}
              setCurrentIdx={setCurrentIdx}
              onClickImage={handleImageClick}
            />
          </div>
          <div className="detail-page__description">
            <ProductDesc product={product} />
          </div>
        </div>
      </div>
      <GalleryPopup
        isOpen={isGalleryPopup}
        prodImages={prodImages}
        thumbImages={thumbImages}
        currentIdx={currentIdx}
        onClose={() => setIsGalleryPopup(false)}
      />
    </div>
  );
};

export default DetailDesktop;
