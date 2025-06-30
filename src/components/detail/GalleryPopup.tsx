import type { TGalleryPopupProps } from '@/types/props';
import CloseBtnIcon from '../icons/CloseBtnIcon';

const GalleryPopup = ({ isOpen, idx, prodImages, thumbImages onClose }: TGalleryPopupProps) => {
  if (!isOpen) return null;

  return (
    <div id="gallery-popup">
      <div className="dialog-container">
        <div className="x-btn">
          <CloseBtnIcon />
        </div>
        <div id="image-list">
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
        </div>
      </div>
    </div>
  );
};

export default GalleryPopup;
