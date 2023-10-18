
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled(FaStar)`
  color: ${(props) => (props.active === 'true' ? '#ff6060ff' : '#D3D3D3')};
  font-size:1.5rem;
`;

const StarRating = ({ rating }) => {
  const parsedRating = parseInt(rating);

  return (
    <StarRatingContainer>
      {[1, 2, 3, 4, 5].map((index) => (
       <StarIcon key={index} active={index <= parsedRating ? 'true' : 'false'} />
      ))}
    </StarRatingContainer>
  );
};

StarRating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default StarRating;

