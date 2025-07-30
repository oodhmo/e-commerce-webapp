import { useEffect, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/common/ProductList';
import Pagination from '../components/common/Pagination';

const Men = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const menProducts = useProducts('MEN');

  const itemsPerPage = 12;
  const totalPages = Math.ceil(menProducts.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 페이지 로드 시 transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`men-page ${isLoaded ? 'loaded' : ''}`}>
      <div className="men-page__content">
        <div className="men-page__header">
          <h1>Men</h1>
        </div>
        <div className="men-page__products">
          <ProductList products={menProducts} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Men;
