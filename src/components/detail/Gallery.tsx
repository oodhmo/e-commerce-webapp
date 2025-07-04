import { memo, useEffect, useState } from 'react';
import type {
  TGalleryProps,
  TThumbListProps,
  TProductListProps,
} from '@/types/props';
import PreviousBtnIcon from '@/components/icons/PreviousBtnIcon';
import NextBtnIcon from '@/components/icons/NextBtnIcon';

const ProdList = memo(({ list, idx, onClickImage }: TProductListProps) => {
  return (
    <div className="slide-wrapper">
      <div
        className="slider"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {list.map((src, i) => (
          <div className="slide" key={i}>
            <img src={src} className="blur-bg" alt="" />
            <img
              src={src}
              key={i}
              className="prod"
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
      <div className="thumb-list">
        {list.map((src, i) => {
          return (
            <div
              key={i}
              className={`thumb-wrapper ${currentIdx === i ? 'active' : ''}`}
              onClick={() => setCurrentIdx(i)}
            >
              <img src={src} className="thumb" />
            </div>
          );
        })}
      </div>
    );
  }
);

const Gallery = ({
  prodImages,
  thumbImages,
  onClickImage,
  index,
  showArrows,
}: TGalleryProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // index: 큰 이미지를 클릭했을 때 그 이미지의 index (GalleryPopup.tsx 에서 사용)
  // currentIdx: 작은 thumbnail을 선택했을 때 바뀌는 index (ProductDetail.tsx, GalleryPopup.tsx에서 사용)
  useEffect(() => {
    if (index !== undefined) {
      setCurrentIdx(index);
    }
  }, [index]);

  const handlePrev = () => {
    setCurrentIdx(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIdx(prev => (prev < prodImages.length - 1 ? prev + 1 : prev));
  };

  return (
    <div id="image-list">
      <div className="image-grid">
        <div className="prod-container">
          {showArrows && (
            <div className="prev arrow" onClick={() => handlePrev()}>
              <PreviousBtnIcon />
            </div>
          )}

          <ProdList
            list={prodImages}
            idx={currentIdx}
            onClickImage={onClickImage}
          />

          {showArrows && (
            <div className="next arrow" onClick={() => handleNext()}>
              <NextBtnIcon />
            </div>
          )}
        </div>
        <div className="thumb-container">
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

export default Gallery;
