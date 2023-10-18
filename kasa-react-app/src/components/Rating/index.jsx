// Import PropTypes for type checking
import PropTypes from 'prop-types';

// Import necessary modules and components
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

// Styled component for the StarRating container
const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Styled component for a star icon
const StarIcon = styled(FaStar)`
  color: ${(props) => (props.active === 'true' ? '#ff6060ff' : '#D3D3D3')};
  font-size: 1.5rem;
`;

// Functional component for displaying a star rating
const StarRating = ({ rating }) => {
  // Parse the rating as an integer
  const parsedRating = parseInt(rating);

  return (
    <StarRatingContainer>
      {/* Create an array of 5 stars and apply active styling based on the rating */}
      {[1, 2, 3, 4, 5].map((index) => (
        <StarIcon key={index} active={index <= parsedRating ? 'true' : 'false'} />
      ))}
    </StarRatingContainer>
  );
};

// Define PropTypes to ensure the correct data type for the rating
StarRating.propTypes = {
  rating: PropTypes.string.isRequired, // Requires a string rating
};

// Export the StarRating component
export default StarRating;


/*
This script defines a React component called StarRating for displaying star ratings.
The component uses the FaStar icon from react-icons/fa to render stars.
It receives a rating prop as a string and converts it to an integer for the star rating.
The component generates a star rating display with a dynamic number of active stars based on the provided rating.
This component also includes PropTypes for type checking to ensure that the rating prop is of the correct data type, in this case, a string.
*/


