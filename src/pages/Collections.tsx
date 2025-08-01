import { useState, useRef } from 'react';
import ProductCard from '@/components/common/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import collectionsInfo from '@/assets/data/collections-info.json';
import { useImageLoader, useCollectionImage } from '@/hooks/useImageLoader';

const Collections = () => {
  const [selectedSeasonal, setSelectedSeasonal] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

  const seasonalRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);

  const { imageMap: collectionMap } = useImageLoader('collection');

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

  // const renderProducts = (selectedCollection: string | null, onClose: () => void) => {
  //   if (!selectedCollection) return null;

  //   const collection = Collections.find(c => c.id === selectedCollection);
  //   if (!collection) return null;

  //   return (
  //     <div></div>
  //   )
  // }

  return (
    <div className="collections">
      <div className="collections__main">
        <div className="collections__container">
          <h1 className="collections__title">Collections</h1>

          <div className="collections__section">
            <h2 className="collections__section-title">Seasonal Collections</h2>
            <div className="collections__grid--seasonal">
              {collectionsInfo.seasonal.map(col => (
                <div
                  key={col.id}
                  className="collections__tile collections__tile--seasonal"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
