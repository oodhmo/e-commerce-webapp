import { memo } from 'react';
import type { TGalleryProps, TProductListProps } from '@/types/props';
import ArrowButton from '@/components/detail/ArrowButton';

const ProdList = memo(({ list, idx }: TProductListProps) => {
  return (
    <div className="gallery__slide-wrapper">
      <div
        className="gallery__slider"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {list.map((src: string, i: number) => (
          <div className="gallery__slide" key={i}>
            <img src={src} className="gallery__blur-bg" alt="" />
            <img src={src} key={i} className="gallery__product" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
});

const GalleryMobile = (props: TGalleryProps) => {
  const { prodImages, currentIdx = 0, setCurrentIdx } = props;

  if (!prodImages) return null;

  const handlePrev = () => {
    if (setCurrentIdx) {
      setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : 0);
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
    <div className="gallery gallery--mobile">
      <div className="gallery__product-container">
        <ProdList list={prodImages} idx={currentIdx} />

        <div className="gallery__arrow-buttons">
          <ArrowButton direction="prev" onClick={handlePrev} />
          <ArrowButton direction="next" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default GalleryMobile;
