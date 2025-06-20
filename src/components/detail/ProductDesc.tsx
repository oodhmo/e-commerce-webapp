import type { TProductDescProps } from '@/types/props';

const ProductDesc = ({ product }: TProductDescProps) => {
  return (
    <div className="prod-desc">
      <div className="prod-info">
        <div className="company">Sneaker Company</div>
        <div className="name">{product.name}</div>
        <div className="description">{product.description}</div>
        <div className="price">
          <div className="discount">
            <div className="now">{product.price}</div>
            <div className="chip">
              <div className="percent">{product.discount}</div>
            </div>
          </div>
          <div className="origin">{product.original_price}</div>
        </div>
      </div>
      <div className="prod-cart"></div>
    </div>
  );
};

export default ProductDesc;
