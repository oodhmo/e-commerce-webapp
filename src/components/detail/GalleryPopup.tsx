import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { TGalleryPopupProps } from '@/types/props';
import CloseBtnIcon from '../icons/CloseBtnIcon';
import Gallery from './Gallery';

const GalleryPopup = ({
  isOpen,
  currentIdx,
  setCurrentIdx,
  prodImages,
  thumbImages,
  onClose,
}: TGalleryPopupProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div id="gallery-popup">
      <div className="dialog-container">
        <div className="btn-container" onClick={() => onClose()}>
          <span className="x-btn">
            <CloseBtnIcon />
          </span>
        </div>
        <div className="popup-images">
          <div className="image-container">
            <Gallery
              prodImages={prodImages}
              thumbImages={thumbImages}
              currentIdx={currentIdx}
              setCurrentIdx={setCurrentIdx}
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
