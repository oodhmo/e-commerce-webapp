import type { TDetailCommonProps } from './types';
import Gallery from '@/components/detail/Gallery';

const DetailMobile = ({
  product,
  prodImages,
  thumbImages,
  handleImageClick,
}: TDetailCommonProps) => {
  return (
    <div id="container-mobile">
      <div id="content-mobile">
        <div className="detail">
          <div className="image-container-mobile">
            <Gallery
              prodImages={prodImages}
              thumbImages={thumbImages}
              onClickImage={handleImageClick}
            />
          </div>
          <div className="desc-container"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailMobile;
