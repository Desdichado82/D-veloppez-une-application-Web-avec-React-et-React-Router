import React from 'react';
import styled from 'styled-components';

const HostInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HostName = styled.div`
  font-weight: bold;
  margin-right: 10px;
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

export default HostInfo;
