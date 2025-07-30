import { useState, useEffect } from 'react';
import type { TProductInfo } from '@/types/product';
import { useImageLoader } from '../../hooks/useImageLoader';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: TProductInfo[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { imageMap } = useImageLoader('product');

  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  useEffect(() => {
    setIsTransitioning(true);

    const currentScrollY = window.scrollY;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // 레이아웃 변경 후 스크롤 위치 복원하기
      requestAnimationFrame(() => {
        window.scrollTo({
          top: currentScrollY,
          behavior: 'smooth',
        });
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="product-list">
      <div className="product-list__content">
        <div
          className={`product-list__grid ${
            isTransitioning ? 'transitioning' : ''
          }`}
        >
          {currentProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              imageMap={imageMap}
              index={index}
            />
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="product-list__pagination">
          <div className="product-list__pagination-content">
            <button
              className={`product-list__pagination-btn ${
                currentPage === 1 ? 'disabled' : ''
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <div className="product-list__pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`product-list__pagination-number ${
                    currentPage === page ? 'active' : ''
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className={`product-list__pagination-btn ${
                currentPage === totalPages ? 'disabled' : ''
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
