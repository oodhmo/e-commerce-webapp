import { memo, useState, useMemo } from 'react';
import { useImageLoader, useDetailImage } from '@/hooks/useImageLoader';
import type { TImagePair } from '@/types/image';
import type {
  TGalleryProps,
  TThumbListProps,
  TProductListProps,
} from '@/types/props';

const ProdList = memo(({ list }: TProductListProps) => {
  return (
    <div className="prod-list">
      {list.map((src, idx) => {
        return <img src={src} key={idx} />;
      })}
    </div>
  );
});

const ThumbList = memo(
  ({ list, setBigImage, setSelectedThumb }: TThumbListProps) => {
    return (
      <div className="thumb-list">
        {list.map((src, idx) => {
          return (
            <img
              src={src}
              key={idx}
              onClick={() => {
                setBigImage(src);
                setSelectedThumb(src);
              }}
            />
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

  const [bigImage, setBigImage] = useState<string>(prodImages[0]);
  const [selectedThumb, setSelectedThumb] = useState<string>(thumbImages[0]);

  console.log(prodImages, thumbImages);
  return (
    <div id="image-list">
      <div className="image-grid">
        <div className="big-container">
          <ProdList list={prodImages} />
        </div>
        <div className="thumb-container">
          <ThumbList
            list={thumbImages}
            setBigImage={setBigImage}
            setSelectedThumb={setSelectedThumb}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
