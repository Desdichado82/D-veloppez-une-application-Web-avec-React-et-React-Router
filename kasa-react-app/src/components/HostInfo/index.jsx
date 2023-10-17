
import PropTypes from 'prop-types'; // Import PropTypes
import styled from 'styled-components';
import colors from '../../utils/styles/colors'
import "@fontsource/montserrat";

const HostInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HostName = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size:1rem;
  font-weight:500;
  font-weight: bold;
  margin-right: 10px;
  color:${colors.primary};
`;

const HostProfilePic = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

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

// Define PropTypes for hostData
HostInfo.propTypes = {
  hostData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default HostInfo;
