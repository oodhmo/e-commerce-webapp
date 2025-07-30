import { memo } from 'react';
import type {
  TGalleryProps,
  TThumbListProps,
  TProductListProps,
} from '@/types/props';
import ArrowButton from '@/components/detail/ArrowButton';

const ProdList = memo(({ list, idx, onClickImage }: TProductListProps) => {
  return (
    <div className="gallery__slide-wrapper">
      <div
        className="gallery__slider"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {list.map((src, i) => (
          <div className="gallery__slide" key={i}>
            <img src={src} className="gallery__blur-bg" alt="" />
            <img
              src={src}
              key={i}
              className="gallery__product"
              alt=""
              onClick={() => onClickImage?.(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

const ThumbList = memo(
  ({ list, currentIdx, setCurrentIdx }: TThumbListProps) => {
    return (
      <div className="gallery__thumb-list">
        {list.map((src, i) => {
          return (
            <div
              key={i}
              className={`gallery__thumb-wrapper ${
                currentIdx === i ? 'gallery__thumb-wrapper--active' : ''
              }`}
              onClick={() => setCurrentIdx && setCurrentIdx(i)}
            >
              <img src={src} className="gallery__thumb" />
            </div>
          );
        })}
      </div>
    );
  }
);

const GalleryDesktop = ({
  prodImages,
  thumbImages,
  onClickImage,
  showArrows,
  currentIdx = 0,
  setCurrentIdx,
}: TGalleryProps) => {
  const handlePrev = () => {
    if (setCurrentIdx) {
      setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : currentIdx);
    }
  };

  const handleNext = () => {
    if (setCurrentIdx) {
      setCurrentIdx(
        currentIdx < prodImages.length - 1 ? currentIdx + 1 : currentIdx
      );
    }
  };

  return (
    <div className="gallery">
      <div className="gallery__container">
        <div className="gallery__product-container">
          {showArrows && <ArrowButton direction="prev" onClick={handlePrev} />}

          <ProdList
            list={prodImages}
            idx={currentIdx}
            onClickImage={onClickImage}
          />

          {showArrows && <ArrowButton direction="next" onClick={handleNext} />}
        </div>
        <div className="gallery__thumb-container">
          <ThumbList
            list={thumbImages}
            currentIdx={currentIdx}
            setCurrentIdx={setCurrentIdx}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryDesktop;
