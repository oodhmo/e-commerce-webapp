import type { TGalleryProps } from '@/types/props';

const GalleryMobile = (props: TGalleryProps) => {
  const { prodImages, currentIdx = 0, setCurrentIdx } = props;
  if (!prodImages) return null;
  return (
    <div>
      <div>
        모바일 갤러리: {currentIdx + 1} / {prodImages.length}
      </div>
      <img
        src={prodImages[currentIdx]}
        alt={`product-${currentIdx}`}
        style={{ width: '100%' }}
      />
      <div>
        <button
          onClick={() =>
            setCurrentIdx && setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : 0)
          }
          disabled={currentIdx === 0}
        >
          이전
        </button>
        <button
          onClick={() =>
            setCurrentIdx &&
            setCurrentIdx(
              currentIdx < prodImages.length - 1 ? currentIdx + 1 : currentIdx
            )
          }
          disabled={currentIdx === prodImages.length - 1}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default GalleryMobile;
