import { useState } from 'react';
import sneakersData from '../../assets/data/sneakers-info.json';
import type { TProductInfo } from '../../types/product';

const TodaysBest = () => {
  const categories = ['ALL', 'MEN', 'WOMEN'];
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const getTopViewedProducts = (): TProductInfo[] => {
    return sneakersData
      .sort((a: TProductInfo, b: TProductInfo) => b.view_count - a.view_count)
      .slice(0, 6);
  };

  const topProducts = getTopViewedProducts();

  return (
    <div className="best-section__today">
      <h3 className="best-section__subtitle">Today's Best</h3>

      <div className="best-section__categories">
        <div className="best-section__badges">
          {categories.map(cate => (
            <div
              className={`best-section__badge ${
                selectedCategory === cate ? 'best-section__badge--active' : ''
              }`}
              onClick={
                selectedCategory === cate
                  ? () => {}
                  : () => setSelectedCategory(cate)
              }
            >
              {cate}
            </div>
          ))}
        </div>
      </div>

      <div>
        {topProducts.map((product: TProductInfo) => (
          <div key={product.id}></div>
        ))}
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section className="best-section">
      <div className="best-section__container">
        <div className="best-section__header">
          <h2>Sneakers Company Is ...</h2>
          <p className="best-section__description">
            Step into style and comfort. Discover the latest sneakers curated
            just for you.
          </p>
        </div>
        <TodaysBest />
      </div>
    </section>
  );
};

export default ProductSection;
