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
    <div id="container-mobile">
      <div id="content-mobile">
        <div className="detail-mobile">
          <div className="image-container-mobile">
            <Gallery
              prodImages={prodImages}
              thumbImages={thumbImages}
              currentIdx={currentIdx}
              setCurrentIdx={setCurrentIdx}
              onClickImage={handleImageClick}
            />
          </div>
          <div className="desc-container-mobile">
            <ProductDesc product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMobile;
