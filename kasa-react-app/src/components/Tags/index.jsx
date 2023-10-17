import styled from 'styled-components';
import PropTypes from 'prop-types'; // Import PropTypes
import colors from '../../utils/styles/colors';

const Badge = styled.span`
  display: inline-block;
  background-color: ${colors.primary};
  color: #fff;
  padding: 4px 8px;
  border-radius: 16px;
  margin-right: 8px;
`;

const Tags = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Badge key={index}>{tag}</Badge>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate the 'tags' prop
};

export default Tags;
