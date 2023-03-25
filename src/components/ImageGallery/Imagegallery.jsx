import { Ul } from './ImageGalleryStyled';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galleryArr }) => {
  return (
    <Ul>
      {galleryArr.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </Ul>
  );
};

ImageGallery.propTypes = {
  galleryArr: PropTypes.arrayOf(PropTypes.object),
};
