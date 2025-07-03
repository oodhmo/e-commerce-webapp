import type { TGalleryProps } from '@/types/props';
import GalleryDesktop from './GalleryDesktop';
import GalleryMobile from './GalleryMobile';
import { useMediaQuery } from 'react-responsive';

const Gallery = (props: TGalleryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 825 });
  return isMobile ? (
    <GalleryMobile {...props} />
  ) : (
    <GalleryDesktop {...props} />
  );
};

export default Gallery;
