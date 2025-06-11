import { useParams } from 'react-router-dom';
import sneakersList from '@/assets/data/sneakers-info.json';
import Gallery from '@/components/detail/Gallery';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = sneakersList.find(item => item.id === id);

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div id="detail">
      <div className="container">
        <div>
          <Gallery images={product.image_pair} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
