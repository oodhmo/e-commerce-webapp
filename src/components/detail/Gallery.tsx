import { useParams } from 'react-router-dom';
import sneakersList from '@/assets/data/sneakers-info.json';

type ImagePair = {
  prod_image: string[];
  thumb_image: string[];
};

type Props = ImagePair[];

const getImages = (images: Props, id: string) => {};

const Gallery = (images: Props) => {
  const { id } = useParams<{ id: string }>();

  return (
    <div id="image-list">
      <div className="image-grid">
        <div className="big-image">
          <img />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
