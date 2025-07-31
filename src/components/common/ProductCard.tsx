import { Link } from 'react-router-dom';
import type { TProductInfo } from '../../types/product';

interface ProductCardProps {
  product: TProductInfo;
  index?: number;
  imageMap: Record<string, string>;
}

const ProductCard = ({ product, index = 0, imageMap }: ProductCardProps) => {
  return (
    <Link
      key={product.id}
      to={`/${product.gender.toLowerCase()}/detail/${product.id}`}
      className="product-card"
      style={{
        animationDelay: `${index * 0.1}s`,
        animationDuration: '0.5s',
      }}
    >
      <div className="product-image">
        <img
          src={imageMap[product.image_pair[0].prod_image] || ''}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.discount && (
            <>
              <span className="discount-badge">{product.discount}%</span>
              <span className="original-price">${product.original_price}</span>
            </>
          )}
        </div>
        <div className="product-views">
          {product.view_count.toLocaleString()} views
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
