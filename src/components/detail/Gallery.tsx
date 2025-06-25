import { memo, useState } from 'react';
import { useImageLoader, useDetailImage } from '@/hooks/useImageLoader';
import type {
  TGalleryProps,
  TThumbListProps,
  TProductListProps,
} from '@/types/props';

const ProdList = memo(({ list, idx }: TProductListProps) => {
  return (
    <div className="slide-wrapper">
      <div
        className="slider"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {list.map((src, i) => (
          <div className="slide" key={i}>
            <img src={src} className="blur-bg" alt="" />
            <img src={src} key={i} className="prod" alt="" />
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

const Gallery = ({ images }: TGalleryProps) => {
  const { imageMap: productMap } = useImageLoader('product');
  const { imageMap: thumbMap } = useImageLoader('thumbnail');

  const { prodImages, thumbImages } = useDetailImage(
    images,
    productMap,
    thumbMap
  );

  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div id="image-list">
      <div className="image-grid">
        <div className="prod-container">
          <ProdList list={prodImages} idx={currentIdx} />
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
