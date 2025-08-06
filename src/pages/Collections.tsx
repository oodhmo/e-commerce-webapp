import { useState, useEffect, useRef } from 'react';
import ProductCard from '@/components/common/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import collectionsInfo from '@/assets/data/collections-info.json';
import sneakersInfo from '@/assets/data/sneakers-info.json';
import { useImageLoader, useCollectionImage } from '@/hooks/useImageLoader';

const ProductSection = ({
  selectedCollection,
  onClose,
  imageMap,
}: {
  selectedCollection: string | null;
  onClose: () => void;
  imageMap: Record<string, string>;
}) => {
  //const items = sneakersInfo.filter(sneaker => sneaker.)

  return (
    <div className="col-product">
      <div className="col-product__container">
        <div className="col-product__content">
          <div className="col-product__content-gradient"></div>

          <div className="col-product__header">
            <div>
              <h3 className="col-product__header-title">{collection.title}</h3>
              <div className="col-product__header-underline"></div>
            </div>
            <button
              className="col-product__header-close"
              onClick={onClose}
              aria-label="Close products section"
            >
              <svg>...</svg>
            </button>
          </div>

          <div className="col-product__grid">
            {sneakersInfo.slice(0, 4).map(sneaker => (
              <ProductCard
                key={sneaker.id}
                product={sneaker}
                imageMap={imageMap}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Collections = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [selectedSeasonal, setSelectedSeasonal] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

  const seasonalRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);

  const { imageMap: collectionMap } = useImageLoader('collection');
  const { imageMap: productMap } = useImageLoader('product');

  const seasonalCollections = collectionsInfo.seasonal;
  const styleCollections = collectionsInfo.style;

  useEffect(() => {
    window.scrollTo(0, 0);

    // 페이지 로드 시 transition 적용용
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSeasonalClick = (colId: string) => {
    const isNewSelection = selectedSeasonal !== colId;
    setSelectedSeasonal(selectedSeasonal === colId ? null : colId);
    setSelectedStyle(null);

    if (isNewSelection) {
      setTimeout(() => {
        seasonalRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  const handleStyleClick = (colId: string) => {
    const isNewSelection = selectedStyle !== colId;
    setSelectedStyle(selectedStyle === colId ? null : colId);
    setSelectedSeasonal(null);

    if (isNewSelection) {
      setTimeout(() => {
        styleRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  const renderProducts = (
    selectedCollection: string | null,
    onClose: () => void,
    productMap: Record<string, string>,
  ) => {
    if (!selectedCollection) return null;

    const colType: 'seasonal' | 'style' = seasonalCollections.some(
      obj => obj.id === selectedCollection
    )
      ? 'seasonal'
      : 'style';

    const collection =
      colType === 'seasonal'
        ? seasonalCollections.find(c => c.id === selectedCollection)
        : styleCollections.find(c => c.id === selectedCollection);
    if (!collection) return null;

    return (
      <div>
        <div>
          <ProductSection
            selectedCollection={selectedCollection}
            onClose={onClose}
            imageMap={productMap}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`collections ${isLoaded ? 'loaded' : ''}`}>
      <div className="collections__main">
        <div className="collections__container">
          <h1 className="collections__title">Collections</h1>

          <section className="collections__section">
            <h2 className="collections__section-title">Seasonal Collections</h2>
            <div className="collections__grid">
              {collectionsInfo.seasonal.map(col => (
                <div
                  key={col.id}
                  className="collections__tile"
                  onClick={() => handleSeasonalClick(col.id)}
                  onMouseEnter={() => setHoveredTile(col.id)}
                  onMouseLeave={() => setHoveredTile(null)}
                >
                  <img
                    src={collectionMap[col.image]}
                    alt={col.title}
                    className="collections__tile-image"
                  />
                  <div className="collections__tile-overlay" />
                  <div className="collections__tile-content">
                    <h3 className="collections__tile-title">{col.title}</h3>
                    <div
                      className={`collections__tile-underline ${
                        hoveredTile === col.id
                          ? 'collections__tile-underline--expanded'
                          : ''
                      }`}
                    />
                  </div>
                  {hoveredTile === col.id && (
                    <div className="collections__tile-hover-effect" />
                  )}
                </div>
              ))}
            </div>
            <div ref={seasonalRef}>
              {renderProducts(
                selectedSeasonal,
                () => setSelectedSeasonal(null),
                productMap
              )}
            </div>
          </section>

          <section className="collections__section">
            <h2 className="collections__section-title">Style Collections</h2>
            <div className="collections__grid">
              {styleCollections.map(col => (
                <div
                  className="collections__tile"
                  key={col.id}
                  onClick={() => handleStyleClick(col.id)}
                  onMouseEnter={() => setHoveredTile(col.id)}
                  onMouseLeave={() => setHoveredTile(null)}
                >
                  <img
                    src={collectionMap[col.image]}
                    alt={col.title}
                    className="collections__tile-image"
                  />
                  <div className="collections__tile-overlay" />
                  <div className="collections__tile-content">
                    <h3 className="collections__tile-title">{col.title}</h3>
                  </div>
                  {hoveredTile === col.id && (
                    <div className="collections__tile-hover-effect" />
                  )}
                </div>
              ))}
            </div>
            <div ref={styleRef}>
              {renderProducts(
                selectedStyle,
                () => setSelectedStyle(null),
                productMap
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Collections;
