// Import necessary modules and components
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/styles/colors';

// Styled component for the badge
const Badge = styled.span`
  display: inline-block;
  background-color: ${colors.primary};
  color: #fff;
  padding: 4px 8px;
  border-radius: 16px;
  margin-right: 8px;
  margin-top: 5px;
`;

// Functional component for displaying tags as badges
const Tags = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Badge key={index}>{tag}</Badge>
      ))}
    </div>
  );
};

// Define PropTypes to ensure the correct data type for the 'tags' prop
Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Requires an array of strings
};

// Export the Tags component
export default Tags;


/*
This script defines a React component called Tags for displaying tags as badges.
The component uses styled-components to style the badge.
It receives a tags prop, which is expected to be an array of strings.
The component maps through the tags and displays each tag as a badge with a specific style.
PropTypes are used to validate that the tags prop is an array of strings.
This component allows you to display tags with a consistent and visually appealing style.
*/
