import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { TGalleryPopupProps } from '@/types/props';
import CloseBtnIcon from '../icons/CloseBtnIcon';
import Gallery from './Gallery';

const GalleryPopup = ({
  isOpen,
  currentIdx,
  prodImages,
  thumbImages,
  onClose,
}: TGalleryPopupProps) => {
  const [selectedIdx, setSelectedIdx] = useState(currentIdx);

  useEffect(() => {
    if (isOpen) {
      setSelectedIdx(currentIdx);
    }
  }, [isOpen, currentIdx]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="gallery-popup">
      <div className="gallery-popup__dialog">
        <div
          className="gallery-popup__close-container"
          onClick={() => onClose()}
        >
          <span className="gallery-popup__close-btn">
            <CloseBtnIcon />
          </span>
        </div>
        <div className="gallery-popup__content">
          <div className="gallery-popup__gallery">
            <Gallery
              prodImages={prodImages}
              thumbImages={thumbImages}
              currentIdx={selectedIdx}
              setCurrentIdx={setSelectedIdx}
              showArrows={true}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GalleryPopup;
