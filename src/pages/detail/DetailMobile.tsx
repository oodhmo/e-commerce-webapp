import type { TDetailCommonProps } from './types';
import Gallery from '@/components/detail/Gallery';
import ProductDesc from '@/components/detail/ProductDesc';

const DetailMobile = ({
  product,
  prodImages,
  thumbImages,
  currentIdx,
  setCurrentIdx,
  handleImageClick,
}: TDetailCommonProps) => {
  return (
    <div className="detail-page detail-page--mobile">
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
    </div>
  );
};

export default DetailMobile;
