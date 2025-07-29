import { useState, useMemo, useEffect } from 'react';
import sneakersData from '../../assets/data/sneakers-info.json';
import type { TProductInfo } from '../../types/product';
import { useImageLoader } from '../../hooks/useImageLoader';
import ProductCard from '../common/ProductCard';

const TodaysBest = () => {
  const categories = ['ALL', 'MEN', 'WOMEN'];
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { imageMap } = useImageLoader('product');

  // 카테고리 변경 시 부드러운 전환 효과
  useEffect(() => {
    setIsTransitioning(true);

    // 현재 스크롤 위치 저장
    const currentScrollY = window.scrollY;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // 레이아웃 변경 후 스크롤 위치 복원
      requestAnimationFrame(() => {
        window.scrollTo({
          top: currentScrollY,
          behavior: 'smooth',
        });
      });
    }, 300); // CSS transition 시간과 맞춤

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    let filtered;

    switch (selectedCategory) {
      case 'ALL':
        filtered = sneakersData;
        break;
      case 'MEN':
        filtered = sneakersData.filter(
          product => product.gender === 'men' || product.gender === 'unisex'
        );
        break;
      case 'WOMEN':
        filtered = sneakersData.filter(
          product => product.gender === 'women' || product.gender === 'unisex'
        );
        break;
      default:
        filtered = sneakersData;
    }

    return filtered
      .sort((a: TProductInfo, b: TProductInfo) => b.view_count - a.view_count)
      .slice(0, 6);
  }, [selectedCategory]);

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
