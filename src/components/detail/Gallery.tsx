import type { TGalleryProps } from '@/types/props';
import GalleryDesktop from './GalleryDesktop';
import GalleryMobile from './GalleryMobile';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const Gallery = (props: TGalleryProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 825 });

  return isMobile ? (
    <GalleryMobile
      {...props}
      currentIdx={currentIdx}
      setCurrentIdx={setCurrentIdx}
    />
  ) : (
    <GalleryDesktop
      {...props}
      currentIdx={currentIdx}
      setCurrentIdx={setCurrentIdx}
    />
  );
};

export default Gallery;
