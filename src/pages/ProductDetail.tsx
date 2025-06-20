import { useParams } from 'react-router-dom';
import sneakersList from '@/assets/data/sneakers-info.json';
import Gallery from '@/components/detail/Gallery';
import ProductDesc from '@/components/detail/ProductDesc';
import type { TProductInfo } from '@/types/product';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = sneakersList.find(item => item.id === id) as TProductInfo;

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div id="container">
      <div id="content">
        <div className="detail">
          <div className="image-container">
            <Gallery images={product.image_pair} />
          </div>
          <div className="desc-container">
            <ProductDesc product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
