// Import PropTypes for type checking
import PropTypes from 'prop-types';

// Import necessary modules and components
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import "@fontsource/montserrat";

// Styled component for the HostInfo container
const HostInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Styled component for the host's name
const HostName = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  font-weight: bold; // Redundant line (font-weight is already specified)
  margin-right: 10px;
  color: ${colors.primary};
`;

// Styled component for the host's profile picture
const HostProfilePic = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

// Functional component for displaying host information
const HostInfo = ({ hostData }) => {
  if (!hostData) {
    return null;
  }

  const { name, picture } = hostData;

  return (
    <HostInfoContainer>
      <HostName>{name}</HostName>
      <HostProfilePic src={picture} alt={`${name}'s Profile`} />
    </HostInfoContainer>
  );
};

// Define PropTypes to ensure the correct data type for hostData
HostInfo.propTypes = {
  hostData: PropTypes.shape({
    name: PropTypes.string.isRequired, // Requires a string name
    picture: PropTypes.string.isRequired, // Requires a string for the picture URL
  }).isRequired, // It is a required prop
};

// Export the HostInfo component
export default HostInfo;


/*
This script defines a React component called HostInfo for displaying host information.
Styled components are used to define the styling for the host's name and profile picture.
The component receives hostData as a prop, which should be an object containing a name (string) and a picture (string).
If hostData is not provided, the component returns null.
The host's name and profile picture are displayed in a flex container.
This component ensures that the hostData prop is correctly typed using PropTypes to prevent data type errors during development.
*/
