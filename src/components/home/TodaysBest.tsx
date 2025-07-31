import { useState, useEffect } from 'react';
import { useImageLoader } from '../../hooks/useImageLoader';
import { useProducts } from '../../hooks/useProducts';
import type { TProductInfo } from '../../types/product';
import ProductCard from '../common/ProductCard';

const TodaysBest = () => {
  const categories = ['ALL', 'MEN', 'WOMEN'] as const;
  const [selectedCategory, setSelectedCategory] = useState<
    'ALL' | 'MEN' | 'WOMEN'
  >('ALL');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { imageMap } = useImageLoader('product');

  useEffect(() => {
    setIsTransitioning(true);

    const currentScrollY = window.scrollY;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // 레이아웃 변경 후 스크롤 위치 복원, transition 시간기다림
      requestAnimationFrame(() => {
        window.scrollTo({
          top: currentScrollY,
          behavior: 'smooth',
        });
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredProducts = useProducts(selectedCategory, 6);

  return (
    <div className="best-section__today">
      <h3 className="best-section__subtitle">Today's Best</h3>

      <div className="best-section__categories">
        <div className="best-section__badges">
          <div className="best-section__badge-wrapper">
            {categories.map(cate => (
              <div
                key={cate}
                className={`best-section__badge ${
                  selectedCategory === cate ? 'best-section__badge--active' : ''
                }`}
                onClick={() => setSelectedCategory(cate)}
              >
                {cate}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`best-section__products ${
          isTransitioning ? 'transitioning' : ''
        }`}
      >
        {filteredProducts.map((product: TProductInfo, index: number) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            imageMap={imageMap}
          />
        ))}
      </div>
    </div>
  );
};

export default TodaysBest;
