import { LoadMoreBtn } from './btnStyled';
import PropTypes from 'prop-types';

export const Btn = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
