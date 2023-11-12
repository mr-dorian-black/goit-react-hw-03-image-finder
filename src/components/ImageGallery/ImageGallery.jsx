import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ list }) => {
  return (
    <ImageGalleryStyled>
      {list.map(item => {
        return <ImageGalleryItem key={item.id} item={item} />;
      })}
    </ImageGalleryStyled>
  );
};
