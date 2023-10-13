import React from 'react';
import styled from 'styled-components';
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

export default Tags;
